function effectColA(skillRow, levelIncrement){
    return "A"+(skillRow.Level+levelIncrement);
}
function effectColB(skillRow, levelIncrement){
    return "B"+(skillRow.Level+levelIncrement);
}
function costCol(skillRow, levelIncrement){
    return "Co"+(skillRow.Level+levelIncrement);
}
function CalculateSpecialEfficieny(skillRow, A, Aplus, Aplusplus, B, Bplus, Bplusplus, cost, reductionAmtA, reductionAmtB){
    const homRatio = Goldreductions[SelectedGoldOption][Gold.HoM];
    function getEffForMulticastSkill(){
        var costSoFar = 0;
        function costCol(lvl){
            return "Co"+lvl;
        }
        function effCol(lvl){
            return "A"+lvl;
        }
        function effBCol(lvl){
            return "B"+lvl;
        }
        var levelToCalc;
        var effectLvl;
        var effectiveLvl = skillRow.Level;
        if(hasT4plusOne(skillRow.Class) && Number(skillRow.TierNum) === 4) effectiveLvl++;
        if(effectiveLvl < 6){
            levelToCalc = (hasT4plusOne(skillRow.Class) && Number(skillRow.TierNum) === 4) ? 5 : 6;
            effectLvl = 6;
        } else if(effectiveLvl < 11){
            levelToCalc = (hasT4plusOne(skillRow.Class) && Number(skillRow.TierNum) === 4) ? 10 : 11;
            effectLvl = 11;
        } else {
            return Number(Math.pow(Math.pow(((Math.pow(((hasT4plusOne(skillRow.Class) && Number(skillRow.TierNum) === 4) ? Aplusplus : Aplus),
            (playerSets["Forsaken Battlemage"] ? 1 : 0) + (hasT4plusOne(skillRow.Class) && Number(skillRow.TierNum)=== 4) ? Bplusplus: Bplus))/(Math.pow(((hasT4plusOne(skillRow.Class) && Number(skillRow.TierNum) == 4) ? Aplus : A),
             (playerSets["Forsaken Battlemage"] ? 1 : 0) + (hasT4plusOne(skillRow.Class) && Number(skillRow.TierNum) === 4) ? Bplus: B))), (1/cost)), reductionAmtA));
        }
        for(var i = 0; i < levelToCalc; i++){
            costSoFar += Number(skillRow[costCol(i)]);
        }
        
        return Number(Math.pow(Math.pow(Math.pow(skillRow[effCol(effectLvl)], (playerSets["Forsaken Battlemage"] ? 1 : 0) + Number(skillRow[effBCol(effectLvl)])), (1/costSoFar)), reductionAmtA));
    };
    function getEffForDualBonusSkill(hasT4plusOne){
        if(skillRow.Level === 0) return Number(Math.pow(Math.pow((hasT4plusOne ? Aplusplus : Aplus), reductionAmtA)*Math.pow(hasT4plusOne ? Bplusplus : Bplus, reductionAmtB), (1/cost)));
        return Number(Math.pow((Math.pow((hasT4plusOne ? Aplusplus : Aplus)/(hasT4plusOne ? Aplus : A), reductionAmtA)*Math.pow((hasT4plusOne ? Bplusplus : Bplus)/(hasT4plusOne ? Bplus : B), reductionAmtB)), (1/cost)));
    }
    switch(skillRow.Name){
            case "Loaded Dice": {
                if(A === 0) return Number(Math.pow(Math.pow((hasT4plusOne("Rogue") ? Bplusplus : Bplus), (1/cost)), reductionAmtA));
                return Number(Math.pow(Math.pow((hasT4plusOne("Rogue") ? Bplusplus : Bplus)/(hasT4plusOne("Rogue") ? Bplus : B), (1/cost)), reductionAmtA));
            }
            case "Sprouting Salts": {
                if(A === 0) return Number(Math.pow(Math.pow(Math.pow((hasT4plusOne("Alchemist") ? Aplusplus : Aplus), (hasT4plusOne("Alchemist") ? Bplusplus : Bplus)), (1/cost)), reductionAmtA));
                return Number(Math.pow(Math.pow((Math.pow((hasT4plusOne("Alchemist") ? Aplusplus : Aplus), (hasT4plusOne("Alchemist") ? Bplusplus : Bplus))/Math.pow((hasT4plusOne("Alchemist") ? Aplus : A), (hasT4plusOne("Alchemist") ? Bplus : B))), (1/cost)), reductionAmtA));
            }
            case "Weakpoint Throw":{
                return getEffForDualBonusSkill(hasT4plusOne("Rogue"));
            }
            case "Midas Overflow":{
                return getEffForMulticastSkill();
            }
            case "Astral Awakening":
            if(A === 0) return Number(Math.pow(Math.pow((hasT4plusOne("Warlord") ? Math.pow(Aplusplus, 5) : Math.pow(Aplus, 5)), (1/cost)), reductionAmtA));
                return Number(Math.pow(Math.pow((Math.pow(hasT4plusOne("Warlord") ? Aplusplus : Aplus, 5)/Math.pow(hasT4plusOne("Warlord") ? Aplus : A, 5)), (1/cost)), reductionAmtA));
            case "Deadly Focus":
                return getEffForMulticastSkill();
            case "Volcanic Eruption":
                return getEffForMulticastSkill();
                if(A == 0) return Number(Math.pow(Math.pow((hasT4plusOne("Knight") ? Aplusplus : Aplus), (1/cost)), reductionAmtA));
                return Number(Math.pow(Math.pow(((Math.pow((hasT4plusOne("Knight") ? Aplusplus : Aplus), (playerSets["Forsaken Battlemage"] ? 1 : 0) + hasT4plusOne("Warlord") ? Bplusplus: Bplus))/(Math.pow((hasT4plusOne("Knight") ? Aplus : A), (playerSets["Forsaken Battlemage"] ? 1 : 0) + hasT4plusOne("Warlord") ? Bplus: B))), (1/cost)), reductionAmtA));
            break;
            case "Barbaric Fury":{
                if(A == 0) return Number(Math.pow(Math.pow((hasT4plusOne("Knight") ? Aplusplus : Aplus), (1/cost)), reductionAmtA));
                return Number(Math.pow(Math.pow(((hasT4plusOne("Knight") ? Aplusplus : Aplus)/(hasT4plusOne("Knight") ? Aplus : A)), (1/cost)), reductionAmtA));
                break;
            }
            case "Command Supremacy":
                return getEffForMulticastSkill();
                if(A == 0) return Number(Math.pow(Math.pow((hasT4plusOne("Warlord") ? Aplusplus : Aplus), (1/cost)), reductionAmtA));
                return Number(Math.pow(Math.pow(((Math.pow((hasT4plusOne("Warlord") ? Aplusplus : Aplus), (playerSets["Forsaken Battlemage"] ? 1 : 0) + hasT4plusOne("Warlord") ? Bplusplus: Bplus))/(Math.pow((hasT4plusOne("Warlord") ? Aplus : A), (playerSets["Forsaken Battlemage"] ? 1 : 0) + hasT4plusOne("Warlord") ? Bplus : B))), (1/cost)), reductionAmtA));
                break;
            case "Divine Wrath":
                return getEffForMulticastSkill();
                if(A == 0) return Number(Math.pow(Math.pow((hasT4plusOne("Sorcerer") ? Aplusplus : Aplus), (1/cost)), reductionAmtA));
                return Number(Math.pow(Math.pow(((Math.pow((hasT4plusOne("Sorcerer") ? Aplusplus : Aplus), (playerSets["Forsaken Battlemage"] ? 1 : 0) + hasT4plusOne("Sorcerer") ? Bplusplus: Bplus))/(Math.pow((hasT4plusOne("Sorcerer") ? Aplus : A), (playerSets["Forsaken Battlemage"] ? 1 : 0) + hasT4plusOne("Sorcerer") ? Bplus : B))), (1/cost)), reductionAmtA));
                break;
            case "Phantom Control":
            return getEffForMulticastSkill();
                return Number(Math.pow(Math.pow(((Math.pow( Aplus, (playerSets["Forsaken Battlemage"] ? 1 : 0) + Bplus))/(Math.pow( A, (playerSets["Forsaken Battlemage"] ? 1 : 0) + B))), (1/cost)), reductionAmtA));
                break;
            case "Mark of Death":
                return getEffForMulticastSkill();
            case "Lightning Strike":
                function calculateLs(currentHealth, currentHealthReduction, staticEfficiency, strikesRemaining){
                    if(strikesRemaining <= 0) {
                       return Number(currentHealth);
                    }
                    var currentMultiplier = (currentHealthReduction*staticEfficiency);
                    currentHealth = Number(currentHealth+Math.log10(currentMultiplier));
                    return Number(calculateLs(currentHealth, currentMultiplier, staticEfficiency, strikesRemaining-1));
                }
                function calculateLsStrike(currentHealthReduction, staticEfficiency){
                    return calculateLs(0, (1-currentHealthReduction), staticEfficiency, ((playerProbabilities.lightningStrikePercent/100)*(playerProbabilities.lightningStrikeAttempts)*playerProbabilities.timeSpentOnBoss));
                }
                function calculateTotalMultiplier(skill1A, skill1B, skill2A, skill2B){
                    var total = Math.pow(10, calculateLsStrike(skill1A, skill1B) - calculateLsStrike(skill2A, skill2B));
                    return total;
                }
                if(A == 0) {
                    var total = Math.pow(10, playerSets["Kor, the Whispering Wave"] ? -calculateLsStrike(Aplusplus, Bplusplus) : -calculateLsStrike(Aplus, Bplus));
                    return Number(Math.pow(Math.pow(10, isNaN(total) ? 10 : total), (1/cost)));
                }
                return Number(Math.pow(hasT4plusOne("Sorcerer") ? calculateTotalMultiplier(Aplusplus, Bplusplus, Aplus, Bplus) : calculateTotalMultiplier(Aplus, Bplus, A, B), (1/cost)));
            break;
            case "Tactical Insight":
                var nextLvlMult = 1;
                var currLvlMult = 1;
                const goldRatio = Goldreductions[SelectedGoldOption][Gold.All];
                nextLvlMult = nextLvlMult * Math.pow(Math.pow(1+Aplus, heroSkillsCalced.GoldAll), goldRatio);
                currLvlMult = currLvlMult * Math.pow(Math.pow(1+A, heroSkillsCalced.GoldAll), goldRatio);
                const bossGoldRatio = Goldreductions[SelectedGoldOption][Gold.Boss];
                nextLvlMult = nextLvlMult * Math.pow(Math.pow(1+Aplus, heroSkillsCalced.GoldBoss), bossGoldRatio);
                currLvlMult = currLvlMult * Math.pow(Math.pow(1+A, heroSkillsCalced.GoldBoss), bossGoldRatio);
                const chestGoldRatio = Goldreductions[SelectedGoldOption][Gold.Chesterson];
                nextLvlMult = nextLvlMult * Math.pow(Math.pow(1+Aplus, heroSkillsCalced.ChestAmount), chestGoldRatio);
                currLvlMult = currLvlMult * Math.pow(Math.pow(1+A, heroSkillsCalced.ChestAmount), chestGoldRatio);
                const fairyGoldRatio = Goldreductions[SelectedGoldOption][Gold.Fairy];
                nextLvlMult = nextLvlMult * Math.pow(Math.pow(1+Aplus, heroSkillsCalced.FairyGold), fairyGoldRatio);
                currLvlMult = currLvlMult * Math.pow(Math.pow(1+A, heroSkillsCalced.FairyGold), fairyGoldRatio);
                if(SelectedBuildDamage != BuildDamageOptions.Hero){
                    nextLvlMult = nextLvlMult * Math.pow(1+Aplus, heroSkillsCalced.CritDamage);
                    nextLvlMult = nextLvlMult * ((1 + Bplus) * (heroSkillsCalced.CritChance + (playerProbabilities.crit/100)));
                    currLvlMult = currLvlMult * Math.pow(1+A, heroSkillsCalced.CritDamage);
                    currLvlMult = currLvlMult * ((1 + B) * (heroSkillsCalced.CritChance + (playerProbabilities.crit/100)));
                }
                nextLvlMult = nextLvlMult * Math.pow(1+Aplus, heroSkillsCalced.AllDamage);
                currLvlMult = currLvlMult * Math.pow(1+A, heroSkillsCalced.AllDamage);
                const heroRatio = SPreductions[SelectedBuildDamage][Types.hero];
                nextLvlMult = nextLvlMult * Math.pow(Math.pow(1+Aplus, heroSkillsCalced.AllHelperDamage + heroSkillsCalced.RangedHelperDamage), heroRatio);
                currLvlMult = currLvlMult * Math.pow(Math.pow(1+A, heroSkillsCalced.AllHelperDamage + heroSkillsCalced.RangedHelperDamage), heroRatio);
                const scRatio = SPreductions[SelectedBuildDamage][Types.sc];
                nextLvlMult = nextLvlMult * Math.pow(Math.pow(1+Aplus, heroSkillsCalced.ShadowCloneSkillAmount), scRatio);
                currLvlMult = currLvlMult * Math.pow(Math.pow(1+A, heroSkillsCalced.ShadowCloneSkillAmount), scRatio);
                const tapRatio = SPreductions[SelectedBuildDamage][Types.tap];
                nextLvlMult = nextLvlMult * Math.pow(Math.pow(1+Aplus, heroSkillsCalced.TapDamage), tapRatio);
                nextLvlMult = nextLvlMult * Math.pow(1+Bplus, tapRatio);
                currLvlMult = currLvlMult * Math.pow(Math.pow(1+A, heroSkillsCalced.TapDamage), tapRatio);
                currLvlMult = currLvlMult * Math.pow(1+B, tapRatio);
                return Number(Math.pow((nextLvlMult/currLvlMult), (1/cost)));
            break;
            default:
                break;
        }
        if(A === 0) A = 1; //FOR SKILLS THAT DONT GET +1s - Division by 0 Error fixes
        switch(skillRow.Name){
            case "Burning Passion": {
                return getEffForMulticastSkill();
            }
            case "Galvanized Mast":
                return getEffForMulticastSkill();
            case "Eventide Afterglow":
                return getEffForMulticastSkill();
            case "Ember Arts":
                return getEffForDualBonusSkill(false);
            case "Master Thief":
                return getEffForDualBonusSkill(false);
            case "Terrifying Pact":

                var FcAllocated = false;
                var RcAllocated = false;
                var breakEarly = 0;
                SPJsonArray.some((element)=>{
                    if(element.TalentID === "ForbiddenContract"){
                        if(element.Level > 0) FcAllocated = true;
                        breakEarly++;
                    }
                    if(element.TalentID === "RoyalContract"){
                        if(element.Level > 0) RcAllocated = true;
                        breakEarly++;
                    }
                    if(breakEarly >= 2) return true;
                })
                //Set their multipliers to 1 if they aren't allocated
                if(!FcAllocated){
                    reductionAmtA = 0;
                }
                if(!RcAllocated){
                    reductionAmtB = 0;
                }
                return getEffForDualBonusSkill(false);
            case "Cleaving Strike":
                var critExpo = SPreductions[SelectedBuildDamage][Types.critMult];
                return Number(Math.pow(Math.pow(((Aplus/A)*(Math.pow((playerProbabilities.crit/100)+Bplus, critExpo)/Math.pow((playerProbabilities.crit/100)+B, critExpo))), (1/cost)), reductionAmtA));
            case "Searing Light":
                if(A === 0 || B === 0) return Number(Math.pow(Math.pow(((1+(Aplus*Bplus))/(1)), (1/cost)), reductionAmtA));
                return Number(Math.pow(Math.pow((1+(Aplus*Bplus))/(1+(A*B)), (1/cost)), reductionAmtA));
            case "Phantom Vengeance":
                return Number(Math.pow(Math.pow((Aplus/A)*((4+Bplus)/(4+B)), (1/cost)), reductionAmtA));
            case "Stroke of Luck":
                if(SelectedBuildDamage == "Dagger"){
                    A = 1;
                    Aplus = 1;
                }
                var Beffic = SPreductions[SelectedBuildDamage][Types.rogueDS];
                if(A == 0 || B == 0) return Number(Math.pow(Math.pow(((Aplus*Bplus)/(1)), (1/cost)), reductionAmtA));
                return Number(Math.pow(Math.pow(((Aplus)/(A)), reductionAmtA)*Math.pow(Bplus/B ,Beffic), (1/cost)));
            case "Voltaic Sails":
                if(A == 0 || B == 0) return Number(Math.pow(Math.pow(((Aplus*Bplus)/(1)), (1/cost)), reductionAmtA));
                return Number(Math.pow(Math.pow(((Aplus*Bplus)/(A*B)), (1/cost)), reductionAmtA));
            default:
                break;
        }
}

function calculateBaseEfficieny(skillRow){

    const bonusTypeA = skillRow['BonusTypeA'];
    const bonusTypeB = skillRow['BonusTypeB'];
    const currLvlEFfA = Number(skillRow[effectColA(skillRow, 0)]);
    const nextLvlEFfA = Number(skillRow[effectColA(skillRow, 1)]);
    const nextnextLvlEFfA = Number(skillRow[effectColA(skillRow, 2)]);
    const currLvlEFfB = Number(skillRow[effectColB(skillRow, 0)]);
    const nextLvlEFfB = Number(skillRow[effectColB(skillRow, 1)]);
    const nextnextLvlEFfB = Number(skillRow[effectColB(skillRow, 2)]);
    const nextLvlCost = Number(skillRow[costCol(skillRow, 0)]);
    
    var reductionAmtA = 0;
    if(Gold.hasOwnProperty(bonusTypeA)){
        reductionAmtA = playerProbabilities["goldEff"] * Number(Goldreductions[SelectedGoldOption][bonusTypeA]);
    } else {
        reductionAmtA = Number(SPreductions[SelectedBuildDamage][bonusTypeA]);
    }

    var reductionAmtB = 0;
    if(Gold.hasOwnProperty(bonusTypeB)){
        reductionAmtB = playerProbabilities["goldEff"] * Number(Goldreductions[SelectedGoldOption][bonusTypeB]);
    } else {
        reductionAmtB = Number(SPreductions[SelectedBuildDamage][bonusTypeB]);
    }

    if(isSpecialEffiencySkill(skillRow.Name)) return CalculateSpecialEfficieny(skillRow, currLvlEFfA, nextLvlEFfA, nextnextLvlEFfA, currLvlEFfB, nextLvlEFfB, nextnextLvlEFfB, nextLvlCost, reductionAmtA, reductionAmtB);
    var eff = 0;
    if(skillRow.TierNum === 4 && hasT4plusOne(skillRow.Class)){
        if(skillRow.Level === 0){
            eff = Number(Math.pow(Math.pow((nextnextLvlEFfA), (1/nextLvlCost)), reductionAmtA));
        } else {
            eff = Number(Math.pow(Math.pow((nextnextLvlEFfA/nextLvlEFfA), (1/nextLvlCost)), reductionAmtA));
        }
    } else {
        if(skillRow.Level === 0){
            eff = Number(Math.pow(Math.pow((nextLvlEFfA), (1/nextLvlCost)), reductionAmtA));
        } else {
            eff = Number(Math.pow(Math.pow((nextLvlEFfA/currLvlEFfA), (1/nextLvlCost)), reductionAmtA));
        }
    }
    return eff;
}
function calculateTreeTotal(tree, id){
    var spdiv = document.getElementById(id+"Sp");
    spdiv.parentElement.replaceChild(getTreeSpTotal(tree, id), spdiv);
    updateTotalSpSpent();
}
function getCummaltiveSpForSkill(skillrow){
    var costSoFar = 0;
    function costCol(level){
        return "Co"+level;
    }
    for(var i = 0; i < skillrow.Level; i++){
        costSoFar += Number(skillrow[costCol(i)]);
    }
    return costSoFar;
}
function spendSP(){
    var bestIndex = 0;
    for(var i = 0; i < SPJsonArray.length; i++){
        if(SPJsonArray[i].Efficiency > SPJsonArray[bestIndex].Efficiency && SPJsonArray[i].Level < SPJsonArray[i].MaxLevel) bestIndex = i;
    }
    SPJsonArray[bestIndex].Level++;
    Reload();
}
function spendAllSP(){
    //All assuming SPJsonArray is sorted by efficiency, index 0 being highest
    //Repeated walk down list and attempt to level the best efficiency one, keep skipping highest ones if can't be leveled for any reason
    var UpgradeAvailable = true;
    var bestIndex = 0;
    while(UpgradeAvailable)
    {
        UpgradeAvailable = false;
            // If it's not ignored
        if(!SPJsonArray[bestIndex].Ignore)
        {
            // Check you have MS required
            if(Number(SPJsonArray[bestIndex].S0) <= Number(playerProfileStats['Max Prestige Stage'] ?? 160000) )
            {
                // Check it's not at max level
                if (SPJsonArray[bestIndex].Level < Number(SPJsonArray[bestIndex].MaxLevel))
                {
                    // Check efficiency so it doesn't spend remaining points on random useless things
                    if(SPJsonArray[bestIndex].Efficiency > 1.0){
                        // Check it costs less than available sp
                        if (SPJsonArray[bestIndex][costCol(SPJsonArray[bestIndex], 0)] <= (startingSp - spSpent))
                        {
                            if(SPJsonArray[bestIndex].Level >= 1){
                                if(canLevel(SPJsonArray[bestIndex])){
                                    levelSkill(SPJsonArray[bestIndex], 1);
                                    bestIndex = 0;
                                    UpgradeAvailable = true;
                                    continue; 
                                }
                            }
                            if(
                                (Number(SPJsonArray[bestIndex][costCol(SPJsonArray[bestIndex], 0)]) + Math.max((Number(SPJsonArray[bestIndex].SPReq) - treeSp[SPJsonArray[bestIndex].Class]), 0)) 
                                <= Math.max(0, (startingSp - spSpent))){
                                if(recursiveTryAllocateUpTo(SPJsonArray[bestIndex])){
                                    bestIndex = 0;
                                    UpgradeAvailable = true;
                                    continue;
                                }
                            }
                        }
                    }
                }
            }
        }
        if(bestIndex < SPJsonArray.length - 1){
            bestIndex++;
            UpgradeAvailable = true;
        }
    };
}
function canLevel(skillRow){
    //Can level in individual tree?
    if(Number(skillRow.SPReq) <= treeSp[skillRow.Class]){
        //Is this skill unlocked?
        if(Number(skillRow.S0) <= Number(playerProfileStats['Max Prestige Stage'] ?? 160000) ){
            //Do you have prereq skill
            if(Number(skillRow.Slot) === 0 || getPrereqSkillRow(skillRow).Level !== 0){
                if( skillRow.Level < Number(skillRow.MaxLevel)) {
                    if(!skillRow.Ignore){
                        return true;
                    }
                }
            }
        }
    }
    return false;
}
function allocateBestAvailableOfTree(thisClass, toThisSp){
    let bestIndex = 0;
    //Assuming SPJsonArray is sorted by efficiency
    while(treeSp[thisClass] <= toThisSp){
        if(SPJsonArray[bestIndex].Class === thisClass){ //If actually in this tree
            if(canLevel(SPJsonArray[bestIndex])){
                levelSkill(SPJsonArray[bestIndex], 1);
                bestIndex = 0;
            } else {
                if(bestIndex === SPJsonArray.length - 1){
                    //Made it to end of list without being able to level anything up..
                    return false;
                }
                bestIndex++;
            }
        } else {
            bestIndex++;
        }
    }
    return true;
};

function recursiveTryAllocateUpTo(skillRow, topLevelCall = true){
    if(Number(skillRow.TierNum) > 1) {
        if (skillRow.Ignore) {
            return false;
        }
        if (recursiveTryAllocateUpTo(getPrereqSkillRow(skillRow), false)) {
            if (canLevel(skillRow)) {
                if (skillRow.Level === 0) {
                    levelSkill(skillRow, 1);
                }
            } else {
                return false;
            }
            if (!topLevelCall) {
                //Allocate up to parent nodes SP req
                if (allocateBestAvailableOfTree(skillRow.Class, Number(findSlot(getTreeByClass(skillRow.Class), Number(skillRow.Slot) + 3).SPReq))) {
                    return true;
                } else {
                    //If for some reason its unable to finish allocating best avail
                    return false;
                }

            }
            return true;
        } else {
            //recursive call returned false
            return false;
        }
    }
    if(canLevel(skillRow)){
            levelSkill(skillRow, 2 - skillRow.Level);
            return true;
    }
    return false;
}

function getPrereqSkillRow(skillRow){
    var prereqslot = Math.max(0, Number(skillRow.Slot) - 3);
    return findSlot(getTreeByClass(skillRow.Class), prereqslot);
}
function isAnyPrereqIgnored(skillRow){
    var prereqSkillRow = getPrereqSkillRow(skillRow);
    // Base Case
    if(Number(prereqSkillRow.Slot) === 0 && !prereqSkillRow.Ignore) return false;
    // Not ignored, check its prereq skill
    if(!prereqSkillRow.Ignore){
        return isAnyPrereqIgnored(prereqSkillRow);
    } else {
        return true;
    }
}