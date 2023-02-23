/**
 * Level up the given skillrow by the given amount
 * @param {JSON} skillRow
 * @param {Integer} levelIncrement
 * @param skipSort
 */
function levelSkill(skillRow, levelIncrement, skipSort = false){
    //console.log("leveling: " + skillRow.Name + " up " + levelIncrement + " to " + (skillRow.Level + levelIncrement));
    if(skillRow.Level + levelIncrement <= skillRow.MaxLevel || skillRow.Level + levelIncrement >= 0) {
        skillRow.Level = skillRow.Level + levelIncrement;
    }
    skillRow["CummulativeSP"] = getCummaltiveSpForSkill(skillRow);
    calculateTreeTotal(getTreeByClass(skillRow.Class), TreeIDTagByClass[skillRow.Class]);
    skillRow["Efficiency"] = calculateBaseEfficieny(skillRow);
    var oldCell = document.getElementById(skillRow["Class"]+skillRow["Slot"]);
    oldCell.parentElement.replaceChild(createSkillCell(skillRow), oldCell);
    playerProbabilities.TiAdditivePerecent = TI["A"+TI.Level];
    playerProbabilities.TiMultiplicativePerecent = TI["B"+TI.Level];
    if(!skipSort) updateSkillRankingList();

    //To refresh TerrifyingPact
    if(skillRow["TalentID"] === "RoyalContract" || skillRow["TalentID"] === "ForbiddenContract"){
        levelSkill(TerrifyingPact, 0, skipSort);
    }
}
/**
 * 
 * @param {JSON} skillrow 
 * @returns the skill cell DIV with everything inside
 */
function createSkillCell(skillrow){
    var div = document.createElement('div');
    if(typeof skillrow !== 'undefined'){
        var tree = getTreeByClass(skillrow.Class);
        var id = skillrow.Slot;
        div.id = skillrow.Class+id;
        var levelup = levelUpButton.cloneNode(true);
        if(skillrow.Level == 0){
            skillrow["Efficiency"] = calculateBaseEfficieny(skillrow);
            skillrow["CummulativeSP"] = getCummaltiveSpForSkill(skillrow);
        }
        levelup.onclick = function (){ 
            if(skillrow.Level == skillrow.MaxLevel) return;
            levelSkill(skillrow, 1);
        };
        var leveldown = levelDownButton.cloneNode(true);
        leveldown.onclick = function (){ 
            if(skillrow.Level == 0) return;
            levelSkill(skillrow, -1);
        };
        var ignore = document.createElement('Button');
        ignore.textContent = "On";
        ignore.className = "ignoreButton";
        if(skillrow.Ignore){
            ignore.textContent = "OFF";
            ignore.className = "ignoreButton ignored"
        } else {
            ignore.textContent = "ON";
            ignore.className = "ignoreButton active"
        }

        ignore.onclick = function (){ 
            skillrow.Ignore = !skillrow.Ignore;
            var parent = div.parentElement;
            parent.replaceChild(createSkillCell(skillrow), div);
            updateSkillRankingList();
            //console.log(SPJsonArray);
            //calculateTreeTotal(tree, Trees[skillrow.Class]);
        };
        var levelamt =  document.createElement('div');
        levelamt.textContent = skillrow.Level;
        var leveldiv =  document.createElement('div');
        leveldiv.className = 'skillCellLevel';
        leveldiv.appendChild(levelup);
        leveldiv.appendChild(levelamt);
        leveldiv.appendChild(leveldown);
        if(skillrow.TierNum == 4 && skillrow.Level > 0 && hasT4plusOne(skillrow.Class)){
            var plusOne = document.createElement('div');
            plusOne.textContent = ""+(skillrow.Level+1)+"";
            var single = "";
            if(skillrow.Level < 9) single = " plusOneSingleVal";
            plusOne.className = "plusOne plusOne"+skillrow.Class + single;
            leveldiv.appendChild(plusOne);
        }    
        div.appendChild(leveldiv)
        var namediv =  document.createElement('div');
        namediv.textContent = skillrow.Name;
        namediv.className = 'skillCellName';
        var effdiv =  document.createElement('div');
        var eff = skillrow["Efficiency"];
        if(skillrow.Level == skillrow.MaxLevel){
            eff = "MAX";
            effdiv.textContent = eff;
        } else {
          effdiv.textContent = Number(eff).toFixed(4);;  
        }
        effdiv.className = 'skillCellEff';
        namediv.appendChild(effdiv);
        namediv.appendChild(ignore);
        
        div.appendChild(namediv)
        div.className = 'skillCell skillCell'+skillrow.Class+ ' firstRow';
    } else {
        div.className = 'skillCell skillCell empty'; 
    }
    return div;
}

/**
 * finds the corresponding id+tree element in the DOM and creates the tree inside of it
 * @param {string} id the unique ID of the tree to create
 * @param {array} treeArray the array of JSON skills associated with that tree
 */
function createTree(id, treeArray){
    // var thisTree = document.getElementById(id);
    // thisTree.innerHTML = "";

    var thisTree = document.createDocumentFragment();
    var totalSpent = document.createElement('div');
    totalSpent.textContent = "0";
    totalSpent.classList = "treeSp";
    totalSpent.id = id+"Sp"
    var firstRow = document.createElement('div');
    var i = 0;
    thisTree.append(totalSpent);
    var div = createSkillCell(findSlot(treeArray, i++));
    firstRow.appendChild(div);
    thisTree.append(firstRow);
    var secondRow = document.createElement('div');
    secondRow.appendChild(createSkillCell(findSlot(treeArray, i++)));
    secondRow.appendChild(createSkillCell(findSlot(treeArray, i++)));
    secondRow.appendChild(createSkillCell(findSlot(treeArray, i++)));
    thisTree.append(secondRow);
    var thirdRow = document.createElement('div');
    thirdRow.appendChild(createSkillCell(findSlot(treeArray, i++)));
    thirdRow.appendChild(createSkillCell(findSlot(treeArray, i++)));
    thirdRow.appendChild(createSkillCell(findSlot(treeArray, i++)));
    thisTree.append(thirdRow);
    var fourthRow = document.createElement('div');
    fourthRow.appendChild(createSkillCell(findSlot(treeArray, i++)));
    fourthRow.appendChild(createSkillCell(findSlot(treeArray, i++)));
    fourthRow.appendChild(createSkillCell(findSlot(treeArray, i++)));
    thisTree.append(fourthRow);
    var fifthRow = document.createElement('div');
    fifthRow.appendChild(createSkillCell(findSlot(treeArray, i++)));
    fifthRow.appendChild(createSkillCell(findSlot(treeArray, i++)));
    fifthRow.appendChild(createSkillCell(findSlot(treeArray, i++)));
    thisTree.append(fifthRow);
   //console.log(id);
    document.getElementById(id).innerHTML = "";
    document.getElementById(id).append(thisTree);
    if(id === "alchemistTree"){
        var parrotInfo = document.createElement('div');
        parrotInfo.className = "parrotInfo";
        parrotInfo.style.display = "inline-block"
        parrotInfo.innerHTML = '<a target="_blank" style="font-size: 1.2rem; line-height: 2rem;" href="https://youtu.be/y10N-2e55p4">Video Tutorial Link</a></br>Discord: Parrot6#7225</br>Reddit: u/Killerparrot6</br>Venmo: Parrot6'
        document.getElementById('alchemistTree').append(parrotInfo);
    }
   //console.log(id, treeArray)
    calculateTreeTotal(treeArray, id);
    function checkIfSkipSlot(){
        if(treeArray[i].Slot > i) return true;
    }
    //calculateTreeTotals(treeArray);
}
/**
 * populate each tree array with JSON of just the given Class
 **/
function populateTrees(){
    populateTree("Knight", knightArray);
    populateTree("Warlord", warlordArray);
    populateTree("Sorcerer", sorcererArray);
    populateTree("Rogue", rogueArray);
    populateTree("Pet", petArray);
    populateTree("Alchemist", alchemistArray);
}


function initializeQuickRenderTemplates(){
    levelUpButton = document.createElement('Button');
    levelUpButton.className = 'levelButton levelUpButton';
    levelUpButton.innerHTML = '&#9650';
    levelDownButton = document.createElement('Button');
    levelDownButton.className = 'levelButton levelDownButton';
    levelDownButton.innerHTML = '&#9660';
    rankingBoxRankTemplate = document.createElement('div');
    rankingBoxRankTemplate.classList = "SkillRankingRank";
    rankingBoxNameTemplate = document.createElement('div');
    rankingBoxNameTemplate.classList = "SkillRankingName";
    rankingBoxValueTemplate = document.createElement('div');
    rankingBoxValueTemplate.classList = "SkillRankingValue";
    rankingBoxSPTemplate = document.createElement('div');
    rankingBoxSPTemplate.classList = "SkillRankingSP";
    rankingBoxRowPet = document.createElement('div');
    rankingBoxRowPet.classList = "skillRankingRow petToLevel";
    rankingBoxRowKnight = document.createElement('div');
    rankingBoxRowKnight.classList = "skillRankingRow KnightToLevel";
    rankingBoxRowWarlord = document.createElement('div');
    rankingBoxRowWarlord.classList = "skillRankingRow WarlordToLevel";
    rankingBoxRowSorcerer = document.createElement('div');
    rankingBoxRowSorcerer.classList = "skillRankingRow SorcererToLevel";
    rankingBoxRowRogue = document.createElement('div');
    rankingBoxRowRogue.classList = "skillRankingRow RogueToLevel";
    rankingBoxRowAlchemist = document.createElement('div');
    rankingBoxRowAlchemist.classList = "skillRankingRow AlchemistToLevel";
}
