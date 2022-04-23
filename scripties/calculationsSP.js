function effectColA(skillRow, levelIncrement){
    return "A"+(skillRow.Level+levelIncrement);
}
function effectColB(skillRow, levelIncrement){
return "B"+(skillRow.Level+levelIncrement);
}
function costCol(skillRow, levelIncrement){
    return "Co"+(skillRow.Level+levelIncrement);
}
function CalculateSpecialEfficieny(skillRow, A, Aplus, Aplusplus, B, Bplus, Bplusplus, cost, reduction, bonustype){
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
        if(hasT4plusOne(skillRow.Class) && Number(skillRow.TierNum) == 4) effectiveLvl++;
        if(effectiveLvl < 6){
            levelToCalc = (hasT4plusOne(skillRow.Class) && Number(skillRow.TierNum) == 4) ? 5 : 6;
            effectLvl = 6;
        } else if(effectiveLvl < 11){
            levelToCalc = (hasT4plusOne(skillRow.Class) && Number(skillRow.TierNum) == 4) ? 10 : 11;
            effectLvl = 11;
        } else {
            return Number(Math.pow(Math.pow(((Math.pow(((hasT4plusOne(skillRow.Class) && Number(skillRow.TierNum) == 4) ? Aplusplus : Aplus), 
            (playerSets["Forsaken Battlemage"] ? 1 : 0) + (hasT4plusOne(skillRow.Class) && Number(skillRow.TierNum)== 4) ? Bplusplus: Bplus))/(Math.pow(((hasT4plusOne(skillRow.Class) && Number(skillRow.TierNum) == 4) ? Aplus : A),
             (playerSets["Forsaken Battlemage"] ? 1 : 0) + (hasT4plusOne(skillRow.Class) && Number(skillRow.TierNum) == 4) ? Bplus: B))), (1/cost)), reduction));
        }
        for(var i = 0; i < levelToCalc; i++){
            costSoFar += Number(skillRow[costCol(i)]);
        }
        
        return Number(Math.pow(Math.pow(Math.pow(skillRow[effCol(effectLvl)], (playerSets["Forsaken Battlemage"] ? 1 : 0) + Number(skillRow[effBCol(effectLvl)])), (1/costSoFar)), reduction));
    }
    switch(skillRow.Name){
            case "Sprouting Salts": {
                if(A == 0) return Number(Math.pow(Math.pow(Math.pow((hasT4plusOne("Alchemist") ? Aplusplus : Aplus), (hasT4plusOne("Alchemist") ? Bplusplus : Bplus)), (1/cost)), reduction));
                return Number(Math.pow(Math.pow((Math.pow((hasT4plusOne("Alchemist") ? Aplusplus : Aplus), (hasT4plusOne("Alchemist") ? Bplusplus : Bplus))/Math.pow((hasT4plusOne("Alchemist") ? Aplus : A), (hasT4plusOne("Alchemist") ? Bplus : B))), (1/cost)), reduction));
                break;
            }
            case "Midas Overflow":{
                return getEffForMulticastSkill();
            }
            case "Burning Passion": {
                return getEffForMulticastSkill();
            }
            case "Astral Awakening":
            if(A == 0) return Number(Math.pow(Math.pow((hasT4plusOne("Warlord") ? Math.pow(Aplusplus, 5) : Math.pow(Aplus, 5)), (1/cost)), reduction));
                return Number(Math.pow(Math.pow((Math.pow(hasT4plusOne("Warlord") ? Aplusplus : Aplus, 5)/Math.pow(hasT4plusOne("Warlord") ? Aplus : A, 5)), (1/cost)), reduction));
            break;
            case "Deadly Focus":
                return getEffForMulticastSkill();
                if(A == 0) return Number(Math.pow(Math.pow((hasT4plusOne("Rogue") ? Aplusplus : Aplus), (1/cost)), reduction));
                return Number(Math.pow(Math.pow(((Math.pow((hasT4plusOne("Rogue") ? Aplusplus : Aplus), (playerSets["Forsaken Battlemage"] ? 1 : 0) + hasT4plusOne("Rogue") ? Bplusplus: Bplus))/(Math.pow((hasT4plusOne("Rogue") ? Aplus : A), (playerSets["Forsaken Battlemage"] ? 1 : 0) + hasT4plusOne("Rogue") ? Bplus: B))), (1/cost)), reduction));
                break;
            case "Deadly Focus":
                if(A == 0) return Number(Math.pow(Math.pow((hasT4plusOne("Rogue") ? Aplusplus*Bplusplus : Aplus*Bplus), (1/cost)), reduction));
                return Number(Math.pow(Math.pow(((hasT4plusOne("Rogue") ? Aplusplus : Aplus) * (hasT4plusOne("Rogue") ? Bplusplus : Bplus))/((hasT4plusOne("Rogue") ? Aplus : A) * (hasT4plusOne("Rogue") ? Bplus : B)), (1/cost)), reduction));
                break;
            case "Volcanic Eruption":
                return getEffForMulticastSkill();
                if(A == 0) return Number(Math.pow(Math.pow((hasT4plusOne("Knight") ? Aplusplus : Aplus), (1/cost)), reduction));
                return Number(Math.pow(Math.pow(((Math.pow((hasT4plusOne("Knight") ? Aplusplus : Aplus), (playerSets["Forsaken Battlemage"] ? 1 : 0) + hasT4plusOne("Warlord") ? Bplusplus: Bplus))/(Math.pow((hasT4plusOne("Knight") ? Aplus : A), (playerSets["Forsaken Battlemage"] ? 1 : 0) + hasT4plusOne("Warlord") ? Bplus: B))), (1/cost)), reduction));
            break;
            case "Barbaric Fury":{
                if(A == 0) return Number(Math.pow(Math.pow((hasT4plusOne("Knight") ? Aplusplus : Aplus), (1/cost)), reduction));
                return Number(Math.pow(Math.pow(((hasT4plusOne("Knight") ? Aplusplus : Aplus)/(hasT4plusOne("Knight") ? Aplus : A)), (1/cost)), reduction));
                break;
            }
            case "Command Supremacy":
                return getEffForMulticastSkill();
                if(A == 0) return Number(Math.pow(Math.pow((hasT4plusOne("Warlord") ? Aplusplus : Aplus), (1/cost)), reduction));
                return Number(Math.pow(Math.pow(((Math.pow((hasT4plusOne("Warlord") ? Aplusplus : Aplus), (playerSets["Forsaken Battlemage"] ? 1 : 0) + hasT4plusOne("Warlord") ? Bplusplus: Bplus))/(Math.pow((hasT4plusOne("Warlord") ? Aplus : A), (playerSets["Forsaken Battlemage"] ? 1 : 0) + hasT4plusOne("Warlord") ? Bplus : B))), (1/cost)), reduction));
                break;
            case "Divine Wrath":
                return getEffForMulticastSkill();
                if(A == 0) return Number(Math.pow(Math.pow((hasT4plusOne("Sorcerer") ? Aplusplus : Aplus), (1/cost)), reduction));
                return Number(Math.pow(Math.pow(((Math.pow((hasT4plusOne("Sorcerer") ? Aplusplus : Aplus), (playerSets["Forsaken Battlemage"] ? 1 : 0) + hasT4plusOne("Sorcerer") ? Bplusplus: Bplus))/(Math.pow((hasT4plusOne("Sorcerer") ? Aplus : A), (playerSets["Forsaken Battlemage"] ? 1 : 0) + hasT4plusOne("Sorcerer") ? Bplus : B))), (1/cost)), reduction));
                break;
            case "Phantom Control":
            return getEffForMulticastSkill();
                return Number(Math.pow(Math.pow(((Math.pow( Aplus, (playerSets["Forsaken Battlemage"] ? 1 : 0) + Bplus))/(Math.pow( A, (playerSets["Forsaken Battlemage"] ? 1 : 0) + B))), (1/cost)), reduction));
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
        if(A == 0) A = 1; //FOR SKILLS THAT DONT GET +1s - Division by 0 Error fixes
        switch(skillRow.Name){
            case "Warcry":
                warcryHelpers = B;
                levelSkill(SearingLight, 0);
                return Number(Math.pow(Math.pow((Aplus/A), (1/cost)), reduction));
                break;
            case "Cleaving Strike":
                var critExpo = SPreductions[SelectedBuildDamage][Types.critMult];
                return Number(Math.pow(Math.pow(((Aplus/A)*(Math.pow((playerProbabilities.crit/100)+Bplus, critExpo)/Math.pow((playerProbabilities.crit/100)+B, critExpo))), (1/cost)), reduction));
            break;
            case "Searing Light":
                if(startingSp > 600 && (SearingLight.Level < 7 && SearingLight.Level >= 1 )){
                    var levelInc = 8 - SearingLight.Level;
                    return Number(Math.pow(Math.pow((1+SearingLight[effectColA(SearingLight,levelInc)]*warcryHelpers*4*30)/(SearingLight[effectColA(SearingLight,levelInc-1)]*warcryHelpers*4*30), (1/SearingLight[costCol(SearingLight, levelInc-1)])), reduction));
                }
                return Number(Math.pow(Math.pow((1+Aplus*warcryHelpers*4*30)/(A == 0 || A == 1 ? 1 : 1+A*warcryHelpers*4*30), (1/cost)), reduction));
            break;
            case "Phantom Vengeance":
                return Number(Math.pow(Math.pow((Aplus/A)*((4+Bplus)/(4+B)), (1/cost)), reduction));
            break;
            case "Stroke of Luck":
                if(SelectedBuildDamage == "Dagger"){
                    A = 1;
                    Aplus = 1;
                }
                var Beffic = SPreductions[SelectedBuildDamage][Types.rogueDS];
                if(A == 0 || B == 0) return Number(Math.pow(Math.pow(((Aplus*Bplus)/(1)), (1/cost)), reduction));
                return Number(Math.pow(Math.pow(((Aplus)/(A)), reduction)*Math.pow(Bplus/B ,Beffic), (1/cost)));
                break;
            case "Voltaic Sails":
                if(A == 0 || B == 0) return Number(Math.pow(Math.pow(((Aplus*Bplus)/(1)), (1/cost)), reduction));
                return Number(Math.pow(Math.pow(((Aplus*Bplus)/(A*B)), (1/cost)), reduction));
                break;
            default:
                break;
        }
}
function calculateBaseEfficieny(skillRow){

    const bonustype = skillRow['BonusTypeA'];
    const currLvlEFfA = Number(skillRow[effectColA(skillRow, 0)]);
    const nextLvlEFfA = Number(skillRow[effectColA(skillRow, 1)]);
    const nextnextLvlEFfA = Number(skillRow[effectColA(skillRow, 2)]);
    const currLvlEFfB = Number(skillRow[effectColB(skillRow, 0)]);
    const nextLvlEFfB = Number(skillRow[effectColB(skillRow, 1)]);
    const nextnextLvlEFfB = Number(skillRow[effectColB(skillRow, 2)]);
    const nextLvlCost = Number(skillRow[costCol(skillRow, 0)]);
    
    var reductionAmt = 0;
    if(Gold.hasOwnProperty(bonustype)){  
        reductionAmt = playerProbabilities["goldEff"] * Number(Goldreductions[SelectedGoldOption][bonustype]);
    } else {
        reductionAmt = Number(SPreductions[SelectedBuildDamage][bonustype]);
    }

    if(isSpecialEffiencySkill(skillRow.Name)) return CalculateSpecialEfficieny(skillRow, currLvlEFfA, nextLvlEFfA, nextnextLvlEFfA, currLvlEFfB, nextLvlEFfB, nextnextLvlEFfB, nextLvlCost, reductionAmt, bonustype);
    var eff = 0;
    if(skillRow.TierNum == 4 && hasT4plusOne(skillRow.Class)){
        if(skillRow.Level == 0){
            eff = Number(Math.pow(Math.pow((nextnextLvlEFfA), (1/nextLvlCost)), reductionAmt));
        } else {
            eff = Number(Math.pow(Math.pow((nextnextLvlEFfA/nextLvlEFfA), (1/nextLvlCost)), reductionAmt));
        }
    } else {
        if(skillRow.Level == 0){
            eff = Number(Math.pow(Math.pow((nextLvlEFfA), (1/nextLvlCost)), reductionAmt));
        } else {
            eff = Number(Math.pow(Math.pow((nextLvlEFfA/currLvlEFfA), (1/nextLvlCost)), reductionAmt));
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
    var UpgradeAvailable = true;
    var bestIndex = 0;
    var toLevel = 0;
    while(UpgradeAvailable){
        UpgradeAvailable = false;
            if(!SPJsonArray[bestIndex].Ignore){
                    if( SPJsonArray[bestIndex].Level < Number(SPJsonArray[bestIndex].MaxLevel)){
                        if(SPJsonArray[bestIndex][costCol(SPJsonArray[bestIndex], 0)] <= (startingSp - spSpent)){
                            if(SPJsonArray[bestIndex].Efficiency > 1.0){
                                if(SPJsonArray[bestIndex].SPReq <= treeSp[SPJsonArray[bestIndex].Class]){
                                        toLevel = bestIndex;    
                                        bestIndex = 0;
                                        UpgradeAvailable = true;
                                } else {
                                    checkPrerequesites(SPJsonArray[bestIndex]);
                                    allocateBestAvailableOfTree(SPJsonArray[bestIndex].Class, SPJsonArray[bestIndex].SPReq);
                                    toLevel = bestIndex;    
                                    bestIndex = 0;
                                    UpgradeAvailable = true;
                                }
                            }
                        }
                    }
            }
        if(UpgradeAvailable){
            console.log("leveling: ", SPJsonArray[toLevel].Name);
            checkPrerequesites(SPJsonArray[toLevel]);
            levelSkill(SPJsonArray[toLevel], 1);
        } else if(bestIndex < SPJsonArray.length - 1){
            bestIndex++;
            UpgradeAvailable = true;
        }
    };
}
function allocateBestAvailableOfTree(thisClass, toThisSp){
    
    var bestIndex = 0;
    var UpgradeAvailable = true;
    while(UpgradeAvailable && treeSp[thisClass] < toThisSp){
        UpgradeAvailable = false;
        if(!SPJsonArray[bestIndex].Ignore){//If not ignored
            if(SPJsonArray[bestIndex].Class == thisClass){ //If actually in this tree
                if(SPJsonArray[bestIndex].SPReq <= treeSp[SPJsonArray[bestIndex].Class]){ //If skill to level up can be leveled up currently
                    if( SPJsonArray[bestIndex].Level < Number(SPJsonArray[bestIndex].MaxLevel)){ //If skill is not max level
                        if(SPJsonArray[bestIndex][costCol(SPJsonArray[bestIndex], 0)] <= (startingSp - spSpent)){ //If you have sp available to level it up
                                    toLevel = bestIndex;    
                                    bestIndex = 0;
                                    UpgradeAvailable = true;
                        }
                    }
                }
            }
        }
        if(UpgradeAvailable){
            console.log("Satisfying Prereq SP By Leveling: ", SPJsonArray[toLevel].Name, toThisSp);
            levelSkill(SPJsonArray[toLevel], 1);
            checkPrerequesites(SPJsonArray[toLevel]);
        } else if(bestIndex < SPJsonArray.length - 1){
            bestIndex++;
            UpgradeAvailable = true;
        } 
    }
    return true;
};
function checkPrerequesites(skillRow){
    if(Number(skillRow.Slot) == 0){
        if(Number(skillRow.Level) >= 2){
            return true; 
        } else { 
            levelSkill(skillRow, 2-Number(skillRow.Level));
            return true; 
        }
    } 
    if(skillRow.SPReq > treeSp[skillRow.Class]){
        console.log("checkPrereq -> allocateBestAvail");
        allocateBestAvailableOfTree(skillRow.Class, skillRow.SPReq);
    }
    var slot = Number(skillRow.Slot);
    var prereqslot = Math.max(0, slot - 3);
    var prereqSkillRow = findSlot(getTreeByClass(skillRow.Class), prereqslot);
    if(prereqSkillRow.Level == 0) {
        if(prereqSkillRow.Slot == 0) levelSkill(prereqSkillRow, 2);
        else {
            levelSkill(prereqSkillRow, 1);
        }
    }
    checkPrerequesites(prereqSkillRow);
}