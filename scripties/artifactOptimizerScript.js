var toUpgrade = [];
var artifactsToLevel;
ArtifactJsonArray = [];
var sumAD = 0;
var sumSpentRelics = 0;
var currentArtifactView;
var sumDiscoverCosts = 0;
var artifactsOwned = 0;
var upgradeButtonChoice = {One: .01, Five: .05, TwoFive: .25, All: 1};
var selectedUpgradeChoice = upgradeButtonChoice.Five;
function updateUpgradeButton(value){
  switch(value){
    case "1":
      selectedUpgradeChoice = upgradeButtonChoice.One;
      break;
    case "5":
      selectedUpgradeChoice = upgradeButtonChoice.Five;
      break;
    case "25":
      selectedUpgradeChoice = upgradeButtonChoice.TwoFive;
      break;
    default:
      selectedUpgradeChoice = upgradeButtonChoice.Five;
      break;
  }
  markArtifactStart();
}
var relicsAvailableString;
var artifactTypeConversions = {
  JackpotGold: Types.Gold.All,
  AllActiveSkillAmount: Types.dimshift,
  AllActiveSkillCooldownRate: Types.utility,
  AllActiveSkillDuration: Types.utility,
  AllArtifactDamageEffect: Types.all,
  AllArtifactGoldEffect: Types.utility,
  AllDamage: Types.all,
  AllEquipmentEffect: Types.calisto,
  AllHelperDamage: Types.hero,
  AllProbabilityBoost: Types.utility,
  AllUpgradeCost: Types.utility,
  ArmorBoost: Types.Gold.All,
  AuraBoost: Types.all,
  BoostedSwordAttackDamage: Types.titanslayer,
  BossDamage: Types.all,
  BossTimerDuration: Types.utility,
  BurstDamageSkillAmount: Types.hs,
  BurstDamageSkillMana: Types.utility,
  ChestAmount: Types.Gold.Chesterson,
  ChestChance: Types.utility,
  ClanShipDamage: Types.ship,
  CompanionDamage: Types.companion,
  CritBoostSkillAmount: Types.crit,
  CritBoostSkillDuration: Types.utility,
  CritBoostSkillMana: Types.utility,
  CritChance: Types.utility,
  CritDamage: Types.crit,
  DamagePerOwnedArtifact: Types.all,
  DamagePerOwnedCardLevel: Types.all,
  DamagePerRunningActiveSkill: Types.all,
  ExoticPetDamageEffect: Types.exotic,
  ExoticPetGoldEffect: Types.Gold.All,
  FairyGold: Types.Gold.Fairy,
  FairySpawnChance: Types.utility,
  FlyingHelperDamage: Types.flying,
  FundamentalDamage: Types.fundamental,
  GoldAll: Types.Gold.All,
  GoldBoss: Types.Gold.Boss,
  GoldPerOwnedCardLevel: Types.Gold.All,
  GoldPerRunningActiveSkill: Types.Gold.All,
  GoldSpecialty: Types.Gold.All,
  Goldx10Chance: Types.Gold.All,
  GroundHelperDamage: Types.ground,
  HSArtifactDamage: Types.all,
  HandOfMidasSkillAmount: Types.Gold.HoM,
  HandOfMidasSkillDuration: Types.utility,
  HandOfMidasSkillMana: Types.utility,
  HelmetBoost: Types.helmet,
  HelperBoostSkillAmount: Types.hero,
  HelperBoostSkillDuration: Types.utility,
  HelperBoostSkillMana: Types.utility,
  HelperScrollBoost: Types.all,
  HelperScrollSetBoost: Types.all,
  HelperUpgradeCost: Types.utility,
  HelperWeaponBoost: Types.all,
  HelperWeaponSetBoost: Types.all,
  InactiveGold: Types.Gold.Inactive,
  KnightBonusBoost: Types.knight,
  KronusComboBoost: Types.all,
  LanceComboBoost: Types.cobalt,
  LegacyPetDamageEffect: Types.hos,
  LegacyPetGoldEffect: Types.appollo,
  ManaMonsterSpawnChance: Types.utility,
  ManaPoolCap: Types.utility,
  ManaRefundPercent: Types.utility,
  ManaRegen: Types.utility,
  MegaBombSpawnChance: Types.utility,
  MeleeHelperDamage: Types.melee,
  MonsterHP: Types.utility,
  MultiMonsters: Types.utility,
  MultiMonstersGold: Types.Gold.MultiSpawn,
  NohniComboBoost: Types.spiritsvigil,
  PetDamage: Types.pet,
  PetGoldQTEAmount: Types.Gold.pHoM,
  PrestigeRelic: Types.utility,
  RangedHelperDamage: Types.ranged,
  RogueBonusBoost: Types.rogue,
  SajeComboBoost: Types.fotk,
  ShadowCloneSkillAmount: Types.sc,
  ShadowCloneSkillDuration: Types.utility,
  ShadowCloneSkillMana: Types.utility,
  SlashBoost: Types.all,
  SophiaComboBoost: Types.all,
  SorcererBonusBoost: Types.sorcerer,
  SpellHelperDamage: Types.mage,
  SplashDamage: Types.utility,
  StageSkipMonsterSpawnChance: Types.utility,
  SwordAttackDamage: Types.sad,
  SwordBoost: Types.all,
  TapBoostSkillAmount: Types.tap,
  TapBoostSkillDuration: Types.utility,
  TapBoostSkillMana: Types.utility,
  TapDamage: Types.tap,
  TapDamageFromHelpers: Types.tap,
  TitanDamage: Types.manaUtil,
  TitanSlayer: Types.titanslayer,
  UnskilledGold: Types.Gold.UnskilledGold,
  WarlordBonusBoost: Types.hero,
  UltraDaggerDamage: Types.dagger,
  GoldGunDamage: Types.goldGun,
  TwilightBoost: Types.twilight,
  ShadowCloneSkillSpecialDamage: Types.sc,
  StreamOfBladesSkillAmount: Types.dagger,
  CannonDamage: Types.cannonDamage,
  DualPetAmount: Types.pet
}
var artifactCSV;
async function artifactImport(pastedIn){
  try{
      var text = "";
      if(pastedIn !== false){
        text = pastedIn;
        document.getElementById('artifactPasteImport').value = "";
      }else{
        text = await navigator.clipboard.readText();
      }
      importedStats = JSON.parse(text);
      console.log(importedStats);
      sampleArtifacts = importedStats.artifacts;
      $.ajax({
                  type: "GET",
                  url: activeArtifactCsv,
                  dataType: "text",
                  success: function(data) {
                      artifactCSV = data;
                      processArtifacts(data);
              }
              });
  } catch{
    alert("Import Unsuccesful, Make sure you have the export on your clipboard");
  }

}
function artifactViewToggle(){
  if(artifactViewChoice.value == "True"){
    artifactHolder.style.display = "none";
    aritactSuggestions.style.display = "block";
 } else {
    artifactHolder.style.display = "block";
    aritactSuggestions.style.display = "block";
 }
}
function processArtifacts(data){
    allText = data;
    var allTextLines = allText.split(/\r\n|\n/);
    
    var headings = allTextLines[0].split(',');
    ArtifactJsonArray = [];
    var headings = headings.splice(0,headings.length);
    for (var i = 1; i < allTextLines.length; i++ ) {
        var tarr = {};
        var currentLine = allTextLines[i].match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g);
        
        for (var j=0; j<headings.length; j++) {
            if(currentLine[j]) tarr[headings[j].trim()] = currentLine[j].trim();
        }
        var namestr = tarr['Name'] !== "Lucky Foot of Al-Mi-Raj" ? tarr['Name'] : "Lucky Foot of Al-mi'raj";
        tarr['BonusType'] = artifactTypeConversions[tarr['BonusType']];
        tarr["Level"] = sampleArtifacts[namestr]["level"] || 0;
        tarr["Enchanted"] = sampleArtifacts[namestr]["enchanted"] || "False";
        tarr['Ignore'] = false;
        tarr['Imported'] = JSON.stringify(tarr);
        ArtifactJsonArray[tarr['Name']]  = tarr;
    }
    sumAD = 0;
    sumSpentRelics = 0;
    Object.keys(ArtifactJsonArray).forEach(function(k){
        calculateArtifactPreEfficiencies(ArtifactJsonArray[k]);
        sumAD += ArtifactJsonArray[k]['ArtifactDamage'];
        sumSpentRelics = sumSpentRelics + Number(ArtifactJsonArray[k]['CummulativeCost']);
    });
    LOG(sumSpentRelics)
    artifactsOwned = 0;
    Object.keys(ArtifactJsonArray).forEach(function(k){
        ArtifactJsonArray[k]['Level'] > 0 ? artifactsOwned++ : null;
        ArtifactJsonArray[k]['Enchanted'] == "True" ? artifactsOwned++ : null;
        calculateArtifactEfficiencies(ArtifactJsonArray[k]);
    });

    sumDiscoverCosts = discoverCosts.slice(0, artifactsOwned).reduce((a,b)=>a+b,0);
    sumSpentRelics = sumSpentRelics + sumDiscoverCosts;
    LOG(sumSpentRelics)
    Object.keys(ArtifactJsonArray).forEach(function(k){
        calculateArtifactRanksAndPercentSpent(ArtifactJsonArray[k]);
        ArtifactJsonArray[k].Imported = JSON.stringify(ArtifactJsonArray[k]);
    });
  // Pass the collection of people to the view
  var artis = new collection.Artifacts;
  currentArtifactView = new views.Artifacts({
    collection: artis
  });
  Object.keys(ArtifactJsonArray).forEach(function(k){

    var newArt = new model.Artifact(ArtifactJsonArray[k]);

    artis.add(
        newArt
    )
    });
  currentArtifactView.render();
  markArtifactStart();
}
function availableRelicsUpdated(inputBox) {
  relicsAvailableString = printBigScientific(inputBox.value);
  markArtifactStart();
}
function calculateArtifactPreEfficiencies(artiRow){
    artiRow['Effect'] = 1+ artiRow['EffectPerLevel'] * 10 * Math.pow(artiRow.Level, artiRow['GrowthExpo']);
    var costCum = Math.log10(Number(artiRow.CostCoef)/(1+Number(artiRow.CostExpo)))+Math.log10(Number(artiRow.Level))*(1+Number(artiRow.CostExpo));
    var remainder = costCum % 1;
    var stringScientific = Math.pow(10, remainder)+"e"+Math.floor(costCum);
    artiRow['CummulativeCost'] = stringScientific;
    artiRow['ArtifactDamage'] = artiRow.Level*artiRow.DamageBonus;
    artiRow['Cost'] = Math.pow(artiRow.CostCoef*artiRow.Level, artiRow.CostExpo);
}
function calculateArtifactEfficiencies(artiRow){
    var reductionAmt = 0;
    
    if(Gold.hasOwnProperty(artiRow['BonusType'])){
        reductionAmt = playerProbabilities["goldEff"] * Number(Goldreductions[SelectedGoldOption][artiRow['BonusType']]);
    } else {
        switch(artiRow['BonusType']){
          case Types.ranged:
            if(artifactHeroType.value == "Ranged" || artifactHeroType.value == "All"){
              reductionAmt = Number(SPreductions[SelectedBuildDamage][artiRow['BonusType']])
            } else {
              reductionAmt = 0;
            };
            break;
          case Types.melee:
            if(artifactHeroType.value == "Melee" || artifactHeroType.value == "All"){
              reductionAmt = Number(SPreductions[SelectedBuildDamage][artiRow['BonusType']])
            } else {
              reductionAmt = 0;
            };
            break;
          case Types.mage:
            if(artifactHeroType.value == "Mage" || artifactHeroType.value == "All"){
              reductionAmt = Number(SPreductions[SelectedBuildDamage][artiRow['BonusType']])
            } else {
              reductionAmt = 0;
            };
            break;
          case Types.flying:
            if(artifactFlyingGroundType.value == "Flying" || artifactFlyingGroundType.value == "All"){
              reductionAmt = Number(SPreductions[SelectedBuildDamage][artiRow['BonusType']])
            } else {
              reductionAmt = 0;
            };
            break;
          case Types.ground:
            if(artifactFlyingGroundType.value == "Ground" || artifactFlyingGroundType.value == "All"){
              reductionAmt = Number(SPreductions[SelectedBuildDamage][artiRow['BonusType']])
            } else {
              reductionAmt = 0;
            };
            break;
          default:
            reductionAmt = Number(SPreductions[SelectedBuildDamage][artiRow['BonusType']]);
            break;
        }
    }
    if(reductionAmt == 0) {
      artiRow['Efficiency'] = 1e-300;
    } else {
      artiRow['Efficiency'] = Math.max( ( (reductionAmt)*Math.log10(artiRow['Effect']) + Math.log10(sumAD/(sumAD-artiRow['ArtifactDamage'])) )/Number(artiRow['CummulativeCost']), 1e-300);
    }
}
function calculateArtifactRanksAndPercentSpent(artiRow){
    var rank = 1;
    if(artiRow['MaxLevel'] !== "0"){
        artiRow['Rank'] = 150;
        return;
    }
    Object.keys(ArtifactJsonArray).forEach(function(k){
        if(ArtifactJsonArray[k]['MaxLevel'] == 0 && ArtifactJsonArray[k]['Efficiency'] > artiRow['Efficiency']){
          rank++;
        }
    }); 

    artiRow['Rank'] = rank;
    artiRow['PercentSpent'] = Number(artiRow['CummulativeCost'])/sumSpentRelics;
}

function upgradeNext(thisRow){
  var availablerelics = relicsAvailableNumber;
  var spendThisMuch = availablerelics*selectedUpgradeChoice;
  var newCummCost = Number(thisRow.CummulativeCost) + spendThisMuch;
  var newLevel = Math.round(Math.pow(newCummCost/(Number(thisRow.CostCoef)/(1+Number(thisRow.CostExpo))), 1/(1+Number(thisRow.CostExpo))));
  thisRow.Level = newLevel;
  relicsAvailableNumber = relicsAvailableNumber - spendThisMuch;
  calculateArtifactPreEfficiencies(thisRow);
  calculateArtifactEfficiencies(thisRow);
  Object.keys(ArtifactJsonArray).forEach(function(k){
    calculateArtifactRanksAndPercentSpent(ArtifactJsonArray[k]);
  });
  var thisupgrade = {
    newlevel: printBigScientific(newLevel),
    skill: thisRow.Name,
    ammount: selectedUpgradeChoice,
    cost: printBigScientific(spendThisMuch)
  }
  toUpgrade.push(thisupgrade);
}

var relicsAvailableNumber = 0;

function startUpgradeSuggestions(){
  var upgraded = false;
  Object.entries(ArtifactJsonArray).forEach(([key, value]) => {
    if(Number(value.Rank) == 1 && Number(relicsAvailableNumber)>(.05*Number(relicsAvailableString))){
       upgradeNext(value);
       upgraded = true;
    }
  })
  if(upgraded) {
    startUpgradeSuggestions();
  } else {
    var artis = new collection.ArtifactsToLevel;
    var currentArtifactToLevelView = new views.ArtifactsToLevel({
      collection: artis
    });
    Object.keys(toUpgrade).forEach(function(k){
      var newArt = new model.ArtifactToLevel(toUpgrade[k]);
      artis.add(
          newArt
      )
      });
      currentArtifactToLevelView.render();
  }
}
function markArtifactStart(){
  toUpgrade = [];
  relicsAvailableNumber = Number(relicsAvailableString);
  Object.entries(ArtifactJsonArray).forEach(([key, value]) => {

    var imported = value.Imported;
    var converted = JSON.parse(imported);
    ArtifactJsonArray[key] = converted;
    ArtifactJsonArray[key].Imported = imported;
  })
  startUpgradeSuggestions();
}

var collection = {};

/* MODEL */
var model = {};
model.Artifact = Backbone.Model.extend({

});

model.artifact = new model.Artifact({
   name: "artifact",
   echanted: false,
   level: 0
});

model.ArtifactToLevel = Backbone.Model.extend({

});

model.artifactToLevel = new model.ArtifactToLevel({
   name: "artifact",
   echanted: false,
   level: 0
});
/* COLLECTION */
collection.Artifacts = Backbone.Collection.extend({
    model: model.Artifact
  });

collection.artifacts = new collection.Artifacts([
]);

collection.ArtifactsToLevel = Backbone.Collection.extend({
  model: model.Artifact
});

collection.artifactsToLevel = new collection.ArtifactsToLevel([
]);
/* VIEW */
var views = {};

views.Artifact = Backbone.View.extend({
  // Each person will be shown as a table row
  tagName: 'div',
  className: 'row artifactRow no-gutters',
  initialize: function(options) {
    // Ensure our methods keep the `this` reference to the view itself
    _.bindAll(this, 'render');
    // If the model changes we need to re-render
    this.model.bind('change', this.render);
  },

  render: function() {
    // Clear existing row data if needed
    jQuery(this.el).empty();
    var rankClass;
    if(this.model.get('Rank') < 11) rankClass = "rankTop10";
    if(this.model.get('Rank') < 6) rankClass = "rankTop5";
    if(this.model.get('Rank') == 1) rankClass = "rankTop1";
    // Write the table columns
    jQuery(this.el).append(jQuery('<div class="' + 'col-2 artifactRank text-center '+ rankClass + '">' + this.model.get('Rank') + '</div>'));
    jQuery(this.el).append(jQuery('<div class="col-3 artifactLevel text-center">' + this.model.get('Level') + '</div>'));
    var percent = (Number(this.model.get('PercentSpent'))*100).toFixed(1);
    isNaN(percent) ? percent = 0 : null;
    jQuery(this.el).append(jQuery('<div class="col artifactName">'
    + '<img src="' + artifactImageUrls[this.model.get('Name')] + '" style="height:30px;">&nbsp'
    + this.model.get('Name') +" (" + percent + "%)" + '</div>'));
    //jQuery(this.el).append(jQuery('<div class="col-3 artifactLevel">' + this.model.get('Efficiency') + '</div>'));
    //jQuery(this.el).append(jQuery('<button class="col artifactButton 5perc">' + '5%' + '</button>'));CummulativeCost
     var enchantedString = String(this.model.get('Enchanted')).toLowerCase() == "true" ? "[E]" : "&nbsp";
    //jQuery(this.el).append(jQuery('<div class="col-auto artifactEnchanted text-center">' + this.model.get('CummulativeCost') + '</div>'));
     jQuery(this.el).append(jQuery('<div class="col-auto artifactEnchanted text-center">' + enchantedString + '</div>'));
    // jQuery(this.el).append(jQuery('<button class="col artifactButton 5perc">' + 'Ignore' + '</button>'));
    return this;
  }
});

views.Artifacts = Backbone.View.extend({
  // The collection will be kept here
  collection: null,

  // The people list view is attached to the table body
  el: '#artifactHolder',

  initialize: function(options) {
    this.collection = options.collection;

    // Ensure our methods keep the `this` reference to the view itself
    _.bindAll(this, 'render');

    // Bind collection changes to re-rendering
    this.collection.bind('reset', this.render);
    //this.collection.bind('add', this.render);
    this.collection.bind('remove', this.render);
  },

  render: function() {
    var element = jQuery(this.el);
    // Clear potential old entries first
    element.empty();
    element.append(jQuery('<div class="row artifactHeader no-gutters">'+ '<div class="col-2 artifactRank text-center">' + 'Rank' + '</div>' +'<div class="col-3 artifactLevel text-center">' + 'Level' + 
    '</div><div class="col artifactName">' + 'Artifact' + '</div>' + 
    //'<button class="col-2 artifactButton 5perc">' + 
    //'Spend%' + '</button>' +
    //'<div class="col artifactEnchanted text-center">' + 'Enchanted?' + '</div><div class="col artifactEnchanted text-center">' + 'Ignored?' + '</div>' +
    + '</div>'))
    
    // Go through the collection items
    this.collection.forEach(function(item) {

      // Instantiate a PeopleItem view for each
      var itemView = new views.Artifact({
        model: item
      });

      // Render the PeopleView, and append its element
      // to the table
      element.append(itemView.render().el);
    });
    document.getElementById('relicsSpent').value = printBigScientific(sumSpentRelics);
    if(importedStats.playerStats){
      //LOG(Number(importedStats.playerStats['Lifetime Relics'])-sumSpentRelics);
      relicsAvailableString = printBigScientific(Number(importedStats.playerStats['Lifetime Relics'])*1.02);
      //document.getElementById('relicsAvailable').value = relicsAvailableString;
        document.getElementById('relicsAvailable').value = relicsAvailableString;
    } else document.getElementById('relicsAvailable').value = "0";

    var artis = artifactsOwned >= totalArtifactsThatExist ? totalArtifactsThatExist : artifactsOwned;
    var enchants = artifactsOwned >= totalArtifactsThatExist ? (artifactsOwned%totalArtifactsThatExist) : 0;
    document.getElementById('artifactsDiscovered').innerText = "Artifacts: " + artis + "/"+totalArtifactsThatExist;
    document.getElementById('enchantmentsDiscovered').innerText = "Enchantments: " + enchants + "/" + totalEnchantsThatExist;
    return this;
  }
});
var totalArtifactsThatExist = 103;
var totalEnchantsThatExist = 57;
views.ArtifactToLevel = Backbone.View.extend({
  // Each person will be shown as a table row
  tagName: 'div',
  className: 'row artifactRow no-gutters',
  initialize: function(options) {
    // Ensure our methods keep the `this` reference to the view itself
    _.bindAll(this, 'render');
    // If the model changes we need to re-render
    this.model.bind('change', this.render);
  },

  render: function() {
    // Clear existing row data if needed
    jQuery(this.el).empty();
    // Write the table columns
    jQuery(this.el).append(jQuery('<div class="col artifactName">' + '<img src="' + artifactImageUrls[this.model.get('skill')] + '" style="height:30px;">&nbsp'+ this.model.get('skill') + '</div>'));
    var percent = (Number(this.model.get('ammount'))*100).toFixed(0);
    isNaN(percent) ? percent = 0 : null;
    jQuery(this.el).append(jQuery('<div class="col-2 text-center"><button class="artifactButton 5perc text-center">' + percent + "%" + '</button></div>'));
    //jQuery(this.el).append(jQuery('<div class="col artifactLevel">' + this.model.get('newlevel') + '</div>'));
    jQuery(this.el).append(jQuery('<div class="col artifactRank text-center"">' + this.model.get('cost') + '</div>'));
    //jQuery(this.el).append(jQuery('<div class="col artifactRank text-center"">' + this.model.get('totalPerc') + '</div>'));
    return this;
  }
});
views.ArtifactsToLevel = Backbone.View.extend({
  // The collection will be kept here
  collection: null,

  // The people list view is attached to the table body
  el: '#aritactSuggestions',

  initialize: function(options) {
    this.collection = options.collection;

    // Ensure our methods keep the `this` reference to the view itself
    _.bindAll(this, 'render');

    // Bind collection changes to re-rendering
    this.collection.bind('reset', this.render);
    //this.collection.bind('add', this.render);
    this.collection.bind('remove', this.render);
  },

  render: function() {
    var element = jQuery(this.el);
    // Clear potential old entries first
    element.empty();
    element.append(jQuery('<div class="col-12 artifactUpgradeHeader text-center">' + "UPGRADE SUGGESTIONS" + '</div><div class="row artifactHeader no-gutters">'+ '<div class="col artifactName">' + 'Artifact' + '</div><div class="col-2 text-center"><button class="artifactButton 5perc">' + 
    'Spend%' + '</button></div>' +
    //'<div class="col artifactLevel">' + 'New Level' + '</div>'+
    '<div class="col artifactRank text-center">' + 'Relics Spent' + '</div></div>'))
    
    // Go through the collection items
    this.collection.forEach(function(item) {

      // Instantiate a PeopleItem view for each
      var itemView = new views.ArtifactToLevel({
        model: item
      });

      // Render the PeopleView, and append its element
      // to the table
      element.append(itemView.render().el);
    });
    return this;
  }
});
var discoverCosts = [
  1.00E+00,
3.00E+00,
6.00E+00,
1.10E+01,
1.90E+01,
3.00E+01,
4.60E+01,
6.90E+01,
1.02E+02,
1.48E+02,
2.14E+02,
3.06E+02,
4.34E+02,
6.13E+02,
8.61E+02,
1.20E+03,
1.68E+03,
2.32E+03,
3.21E+03,
4.43E+03,
6.09E+03,
8.36E+03,
1.15E+04,
1.57E+04,
2.14E+04,
2.91E+04,
3.96E+04,
5.38E+04,
7.30E+04,
9.89E+04,
1.33E+05,
1.81E+05,
2.44E+05,
3.30E+05,
4.45E+05,
5.99E+05,
8.07E+05,
1.08E+06,
1.46E+06,
1.96E+06,
2.80E+06,
4.27E+06,
6.54E+06,
1.01E+07,
1.56E+07,
2.43E+07,
3.80E+07,
5.97E+07,
9.43E+07,
1.50E+08,
2.39E+08,
3.83E+08,
6.18E+08,
1.00E+09,
1.62E+09,
2.66E+09,
4.38E+09,
7.24E+09,
1.20E+10,
2.01E+10,
3.37E+10,
5.68E+10,
9.61E+10,
1.64E+11,
2.80E+11,
3.84E+12,
5.32E+13,
7.38E+14,
1.03E+16,
1.44E+17,
2.03E+18,
2.88E+19,
4.09E+20,
5.85E+21,
8.42E+22,
1.21E+24,
1.76E+25,
2.56E+26,
3.74E+27,
5.50E+28,
8.12E+29,
1.20E+30,
1.79E+31,
2.69E+33,
4.04E+34,
6.11E+35,
9.27E+36,
1.41E+38,
2.17E+39,
3.33E+40,
5.15E+42,
8.00E+44,
1.25E+47,
1.95E+49,
3.07E+51,
4.86E+53,
7.72E+55,
1.23E+58,
1.97E+60,
3.17E+62,
5.12E+64,
8.31E+66,
1.35E+69,
2.22E+71,
3.64E+73,
6.01E+75,
9.97E+77,
1.66E+80,
2.78E+82,
4.66E+84,
7.86E+86,
1.33E+89,
2.26E+91,
3.87E+93,
6.63E+95,
1.14E+98,
1.97E+100,
3.43E+102,
5.97E+104,
1.050E+107
,1.840E+109
,3.240E+111
,5.750E+113
,1.020E+116
,1.830E+118
,3.280E+120
,5.900E+122
,1.070E+125
,1.940E+127
,3.530E+129,
6.46E+131,
1.19E+134,
2.19E+136,
4.05E+138,
7.53E+140,
1.40E+143,
2.63E+145,
4.95E+147,
9.34E+149,
1.77E+152,
3.37E+154,
6.43E+156,
1.23E+159,
2.37E+161,
4.58E+163,
8.88E+165,
1.73E+168,
3.37E+170,
6.62E+172,
1.30E+175,
2.55E+177,
5.01E+179,
9.85E+181
];