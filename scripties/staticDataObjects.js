const BuildDamageOptions = Object.freeze({GoldGun: "GoldGun", Hero: "Hero", Tap: "Tap", Pet: "Pet", SC: "SC", HS: "HS", Ship: "Ship", Dagger: "Dagger"});
const BuildGoldOptions = Object.freeze({all: "All", phom: "Boss", fairy: "Fairy", chesterson: "Chesterson"});
const SpecialEffieciencies = Object.freeze(["Sprouting Salts", "Midas Overflow", "Cleaving Strike", "Volcanic Eruption", "Tactical Insight", "Searing Light", "Astral Awakening", "Command Supremacy",
                                            "Warcry", "Lightning Strike", "Burning Passion", "Phantom Vengeance", "Divine Wrath", "Phantom Control", "Stroke of Luck", "Deadly Focus", "Barbaric Fury", "Mark of Death", "Voltaic Sails"]);
const Gold = Object.freeze({UnskilledGold: "UnskilledGold", pHoM: "pHoM", Rogue: "Rogue", Chesterson: "Chesterson", HoM: "HoM", All: "All", ChestersonChance: "ChestersonChance", Fairy: "Fairy", Boss: "Boss", MultiSpawn: "MultiSpawn", Stealth: "Stealth", Inactive:"Inactive"});
const Types = Object.freeze({cannonDamage: "xCannonDamage", twilight: "xTwilight", alchemist: "xAlchemist", goldGun: "xGoldGun", ranged: "xRanged", mage: "xMage", melee: "xMelee", flying: "xFlying", ground: "xGround", chivOrder: "xChivOrder", summoner: "xSummoner", tap:"xTap/FS", hero:"xHero/WC", companion: "xCompanion", all:"xAll", ds:"xDS", sad:"xSAD", crit:"xCrit", critMult:"+Crit%", pet:"xPet", sc:"xSC", dagger: "xDagger", 
hs:"xHS", ship:"xSHIP", Gold, rogueDS: "t4RogueDS", dimshift: "xDimShift", utility: "xUtility", manaUtil: "xUtilityPlus", hos: "xHos", appollo: "xAppollo", calisto: "xCalisto", helmet: "xHelmet", exotic: "xExotic", warlord: "xWarlord", knight: "xKnight", sorcerer: "xSorc"
, rogue: "xRogue", fundamental: "xFundamental", sotv: "xSotV", fots: "xFotS", spiritsvigil: "xSpiritsVigil", titanslayer: "xTitanSlayer", weaponExpert: "xWeaponExpert", fotk: "xFotK", cobalt: "xTCP"
});
var sampleArtifacts = {
"Book of Shadows": {
    "enchanted": "True",
    "level": "5.657E+59"
},
"Charged Card": {
    "enchanted": "True",
    "level": "1.700E+74"
},
"Stone of the Valrunes": {
    "enchanted": "True",
    "level": "1.800E+74"
},
"Chest of Contentment": {
    "enchanted": "True",
    "level": "3.000E+73"
},
"Heroic Shield": {
    "enchanted": "True",
    "level": "1.500E+74"
},
"Book of Prophecy": {
    "enchanted": "True",
    "level": "8.000E+64"
},
"Khrysos Bowl": {
    "enchanted": "False",
    "level": "1.500E+74"
},
"Zakynthos Coin": {
    "enchanted": "False",
    "level": "1.500E+74"
},
"Great Fay Medallion": {
    "enchanted": "True",
    "level": "2.000E+73"
},
"Neko Sculpture": {
    "enchanted": "True",
    "level": "1.400E+74"
},
"Coins of Ebizu": {
    "enchanted": "True",
    "level": "3.000E+73"
},
"The Bronzed Compass": {
    "enchanted": "True",
    "level": "1.400E+74"
},
"Evergrowing Stack": {
    "enchanted": "True",
    "level": "8.000E+64"
},
"Flute of the Soloist": {
    "enchanted": "True",
    "level": "8.935E+64"
},
"Heavenly Sword": {
    "enchanted": "True",
    "level": "8.000E+64"
},
"Divine Retribution": {
    "enchanted": "True",
    "level": "1.400E+69"
},
"Drunken Hammer": {
    "enchanted": "True",
    "level": "1.000E+76"
},
"Samosek Sword": {
    "enchanted": "True",
    "level": "4.000E+68"
},
"The Retaliator": {
    "enchanted": "True",
    "level": "7.390E+76"
},
"Stryfe's Peace": {
    "enchanted": "False",
    "level": "1.400E+69"
},
"Hero's Blade": {
    "enchanted": "False",
    "level": "7.420E+76"
},
"The Sword of Storms": {
    "enchanted": "True",
    "level": "7.100E+76"
},
"Furies Bow": {
    "enchanted": "True",
    "level": "7.100E+76"
},
"Charm of the Ancient": {
    "enchanted": "True",
    "level": "7.200E+76"
},
"Tiny Titan Tree": {
    "enchanted": "False",
    "level": "7.300E+76"
},
"Helm of Hermes": {
    "enchanted": "False",
    "level": "1.100E+76"
},
"Fruit of Eden": {
    "enchanted": "True",
    "level": "4.000E+68"
},
"Influential Elixir": {
    "enchanted": "False",
    "level": "7.000E+76"
},
"Shimmering Oil": {
    "enchanted": "True",
    "level": "1.900E+76"
},
"Golden Scope": {
    "enchanted": "True",
    "level": "2.000E+76"
},
"O'Ryan's Charm": {
    "enchanted": "False",
    "level": "1.220E+74"
},
"Heart of Storms": {
    "enchanted": "False",
    "level": "7.600E+64"
},
"Apollo Orb": {
    "enchanted": "False",
    "level": "6.200E+64"
},
"Sticky Fruit": {
    "enchanted": "False",
    "level": "6.200E+64"
},
"Hades Orb": {
    "enchanted": "False",
    "level": "6.200E+64"
},
"Earrings of Portara": {
    "enchanted": "True",
    "level": "7.600E+76"
},
"Avian Feather": {
    "enchanted": "True",
    "level": "6.000E+76"
},
"Corrupted Rune Heart": {
    "enchanted": "False",
    "level": "2.000E+76"
},
"Durendal Sword": {
    "enchanted": "True",
    "level": "6.000E+68"
},
"Helheim Skull": {
    "enchanted": "True",
    "level": "1.210E+69"
},
"Oath's Burden": {
    "enchanted": "False",
    "level": "3.000E+64"
},
"Crown of the Constellation": {
    "enchanted": "True",
    "level": "6.600E+64"
},
"Titania's Sceptre": {
    "enchanted": "True",
    "level": "6.400E+64"
},
"Fagin's Grip": {
    "enchanted": "True",
    "level": "6.400E+64"
},
"Ring of Calisto": {
    "enchanted": "True",
    "level": "7.500E+64"
},
"Blade of Damocles": {
    "enchanted": "False",
    "level": "1.300E+69"
},
"Helmet of Madness": {
    "enchanted": "False",
    "level": "1.300E+69"
},
"Titanium Plating": {
    "enchanted": "False",
    "level": "1.300E+69"
},
"Moonlight Bracelet": {
    "enchanted": "True",
    "level": "1.300E+69"
},
"Amethyst Staff": {
    "enchanted": "False",
    "level": "1.300E+69"
},
"Sword of the Royals": {
    "enchanted": "True",
    "level": "5.700E+64"
},
"Spearit's Vigil": {
    "enchanted": "True",
    "level": "5.700E+64"
},
"The Cobalt Plate": {
    "enchanted": "True",
    "level": "5.800E+64"
},
"Sigils of Judgement": {
    "enchanted": "True",
    "level": "5.800E+64"
},
"Foliage of the Keeper": {
    "enchanted": "True",
    "level": "5.800E+64"
},
"Invader's Gjallarhorn": {
    "enchanted": "True",
    "level": "1.300E+74"
},
"Titan's Mask": {
    "enchanted": "True",
    "level": "2.000E+76"
},
"Royal Toxin": {
    "enchanted": "False",
    "level": "5.000E+76"
},
"Laborer's Pendant": {
    "enchanted": "False",
    "level": "5.000E+76"
},
"Bringer of Ragnarok": {
    "enchanted": "False",
    "level": "1.000E+76"
},
"Parchment of Foresight": {
    "enchanted": "False",
    "level": "6.000E+76"
},
"Elixir of Eden": {
    "enchanted": "True",
    "level": "1.000E+76"
},
"Twin Bracers": {
    "enchanted": "False",
    "level": "6.000E+68"
},
"Cosmic Sextant": {
    "enchanted": "False",
    "level": "9.000E+67"
},
"Endless Bandolier": {
    "enchanted": "False",
    "level": "5.020E+67"
},
"Pearl of Oblivion": {
    "enchanted": "False",
    "level": "6.200E+60"
},
"Hourglass of the Impatient": {
    "enchanted": "False",
    "level": "4.000E+1"
},
"Phantom Timepiece": {
    "enchanted": "False",
    "level": "3.000E+1"
},
"Forbidden Scroll": {
    "enchanted": "False",
    "level": "3.000E+1"
},
"Ring of Fealty": {
    "enchanted": "False",
    "level": "3.000E+1"
},
"Glacial Axe": {
    "enchanted": "False",
    "level": "3.000E+1"
},
"Aegis": {
    "enchanted": "False",
    "level": "3.000E+1"
},
"Swamp Gauntlet": {
    "enchanted": "False",
    "level": "3.000E+1"
},
"Infinity Pendulum": {
    "enchanted": "False",
    "level": "2.000E+1"
},
"Glove of Kuma": {
    "enchanted": "False",
    "level": "3.000E+1"
},
"Titan Spear": {
    "enchanted": "False",
    "level": "4.000E+1"
},
"Oak Staff": {
    "enchanted": "False",
    "level": "3.000E+1"
},
"The Arcana Cloak": {
    "enchanted": "False",
    "level": "4.000E+1"
},
"Hunter's Ointment": {
    "enchanted": "False",
    "level": "4.000E+1"
},
"Ambrosia Elixir": {
    "enchanted": "False",
    "level": "4.000E+1"
},
"Mystic Staff": {
    "enchanted": "False",
    "level": "4.000E+1"
},
"Mystical Beans of Senzu": {
    "enchanted": "False",
    "level": "4.000E+1"
},
"Egg of Fortune": {
    "enchanted": "False",
    "level": "4.000E+1"
},
"Divine Chalice": {
    "enchanted": "False",
    "level": "5.000E+1"
},
"Invader's Shield": {
    "enchanted": "False",
    "level": "5.000E+1"
},
"Axe of Muerte": {
    "enchanted": "False",
    "level": "4.000E+1"
},
"Essence of the Kitsune": {
    "enchanted": "False",
    "level": "4.000E+1"
},
"Boots of Hermes": {
    "enchanted": "False",
    "level": "4.000E+1"
},
"Unbound Gauntlet": {
    "enchanted": "False",
    "level": "4.000E+1"
},
"Oberon Pendant": {
    "enchanted": "False",
    "level": "4.000E+1"
},
"Lucky Foot of Al-mi'raj": {
    "enchanted": "False",
    "level": "4.000E+1"
},
"Lost King's Mask": {
    "enchanted": "False",
    "level": "4.000E+1"
},
"Staff of Radiance": {
    "enchanted": "False",
    "level": "4.000E+1"
},
"Morgelai Sword": {
    "enchanted": "False",
    "level": "5.000E+1"
},
"Ringing Stone": {
    "enchanted": "False",
    "level": "5.000E+1"
},
"Quill of Scrolls": {
    "enchanted": "False",
    "level": "5.000E+1"
},
"Old King's Stamp": {
    "enchanted": "False",
    "level": "5.000E+1"
},
"The Master's Sword": {
    "enchanted": "False",
    "level": "4.000E+1"
},
"The Magnifier": {
    "enchanted": "False",
    "level": "4.000E+1"
},
"The Treasure of Fergus": {
    "enchanted": "False",
    "level": "4.000E+1"
},
"The White Dwarf": {
    "enchanted": "False",
    "level": "5.000E+1"
},
"Aram Spear": {
    "enchanted": "False",
    "level": "4.000E+1"
},
"Ward of the Darkness": {
    "enchanted": "False",
    "level": "6.000E+1"
}};
var playerProbabilities = {
    goldEff: .79,
    crit : 100,
    deadly : 100,
    multispawn : 100,
    timeSpentOnBoss: 30,
    TiAdditivePerecent: 0,
    TiMultiplicativePerecent: 0,
    lightningStrikePercent: 2.0,
    lightningStrikeAttempts: 100,
}
var playerSets = {
    "Forsaken Battlemage": true,
    "Ignus, the Volcanic Phoenix": true,
    "Ironheart, the Crackling Tiger": true,
    "Kor, the Whispering Wave": true,
    "Styxsis, the Single Touch": true,
    "Shae, the Radiant Beacon": true,
    "Rygal, the Brilliant Engineer": true
}
const heroSkillsCalced = {
    AllDamage: 37,
    AllHelperDamage: 27,
    ChestAmount: 34,
    ChestChance: 0.020000000000000004,
    CritChance: 0.018000000000000002,
    CritDamage: 22,
    FairyGold: 18,
    GoldAll: 31,
    GoldBoss: 30,
    Goldx10Chance: 0.016000000000000004,
    ManaPoolCap: 135,
    ManaRegen: 3.2000000000000006,
    MeleeHelperDamage: 21,
    RangedHelperDamage: 21,
    ShadowCloneSkillAmount: 4,
    SpellHelperDamage: 21,
    TapDamage: 28,
    TapDamageFromHelpers: 0.0001
}
var typeConversions = {
    ActiveAllHelperDamage: Types.hero,
    TapDamageFromHelpersMult: Types.chivOrder,
    BurstDamageSkillManaMult: Types.utility,
    FairyGold: Types.Gold.Fairy,
    EquipmentPetEffect: Types.calisto,
    PetBonusBoost: Types.summoner,
    DualPetAmount: Types.pet,
    DualPetSkillStacksBonus: Types.pet,
    MultiMonstersGold: Types.Gold.MultiSpawn,
    ActiveTapDamage: Types.tap,
    AllHelperDamage: Types.hero,
    BurstDamageSkillAmount: Types.hs,
    BurstDamageSkillStacksBonus: Types.hs,
    ChestAmount: Types.Gold.Chesterson,
    ClanShipDamage: Types.ship,
    ClanShipStunDamage: Types.all,
    CloakedSkipChance: Types.utility,
    CritBoostSkillAmount: Types.ds,
    CritBoostSkillStacksBonus: Types.ds,
    CritMaxDamage: Types.crit,
    DeadlyDamageCompanion: Types.ds,
    FairySpawnChance: Types.utility,
    ForbiddenContractMaxDamage: Types.all,
    GoldAll: Types.Gold.All,
    GoldBoss: Types.Gold.pHoM,
    GuidedBladeDeadlyStrikeBoost: Types.rogueDS,
    HandOfMidasSkillAmount: Types.Gold.HoM,
    HelperBoostSkillStacksBonus: Types.hero,
    HelperMultiplicativeSkillBoost: Types.utility,
    HelperQTEDamage: Types.hero,
    InspiredHelperDamage: Types.hero,
    InspiredHelperWeaken: Types.hero,
    LightningStrikeDamage: Types.all,
    ManaMonsterAmount: Types.manaUtil,
    ManaPoolCap: Types.manaUtil,
    ManaTapRegen: Types.manaUtil,
    MultiMonstersMaxCount: Types.Gold.MultiSpawn,
    PetAttackQTEDamage: Types.pet,
    PetBossQTEDamage: Types.pet,
    PetDamage: Types.pet,
    ShadowCloneAllSkillBoost: Types.dimshift,
    ShadowCloneSkillAmount: Types.sc,
    ShadowCloneSkillDuration: Types.utility,
    ShadowCloneSkillStacksBonus: Types.sc,
    TapBoostSkillAmount:  Types.tap,
    TapBoostSkillStacksBonus:  Types.tap,
    TapDamage:  Types.tap,
    TapDamageFromHelpers: Types.tap,
    UltraDaggerDamage: Types.dagger,
    UltraDaggerPoisonBoost: Types.all,
    ThunderVolleySkillAmount: Types.ship,
    StreamOfBladesSkillAmount: Types.dagger,
    UltraDaggerTargetDamage: Types.dagger,
    StreamOfBladesSkillStacksBonus: Types.dagger,
    GoldGunDamage: Types.goldGun,
    UnskilledGold: Types.Gold.UnskilledGold,
    SpecialTitanSpawnChance: Types.manaUtil,
    HandOfMidasSkillStacksBonus: Types.Gold.HoM,
    RoyalContractMaxGold: Types.Gold.All,
    AlchemistBonusBoost: Types.alchemist,
    MagnumOpusDamage: Types.goldGun,
    TwilightFairySkillAmount: Types.twilight,
    TwilightBoost: Types.twilight,
    ShadowCloneSkillSpecialDamage: Types.sc,
    StreamOfBladesSkillAmount: Types.dagger,
    CannonDamage: Types.goldGun,
    DualPetAmount: Types.pet,
    KratosMonsterBonusAmount: Types.all,
    ManaTapRegenAmount: Types.manaUtil
}
var nameConversions = {
    'Inspired Shot': "Searing Light",
    "Guided Blade": "Deadly Focus",
    "Soul Blade": "Dagger Storm",
    "Ultra Dagger": "Summon Dagger",
    "Phantom Vengeance" : "Phantom Control",
    "Divine Blessing" : "Divine Surpremacy",
    "Coin Galore": "Midas Overflow",
    "Chesterson Insense": "Chesterson Incense",
    "High Voltage": "Voltaic Sails",
    "Puppet Master": "Nightmare Puppeteer",
    "Stroke Of Luck": "Stroke of Luck",
    "Heart Of Gold": "Heart of Midas"
}
var artifactImageUrls = {
    "Book of Shadows": "https://vignette.wikia.nocookie.net/tap-titans-2/images/1/18/Book_of_Shadows.png/revision/latest?cb=20171024224110",
    "Charged Card": "https://i.imgur.com/YRDoZ5d.png",
    "Stone of the Valrunes": "https://vignette.wikia.nocookie.net/tap-titans-2/images/0/06/Stone_of_the_Valrunes.png/revision/latest?cb=20171024225037",
    "Chest of Contentment": "https://vignette.wikia.nocookie.net/tap-titans-2/images/c/c5/Chest_of_Contentment.png/revision/latest?cb=20171024225305",
    "Heroic Shield": "https://vignette.wikia.nocookie.net/tap-titans-2/images/e/ee/Heroic_Shield.png/revision/latest?cb=20170927231600",
    "Book of Prophecy": "https://vignette.wikia.nocookie.net/tap-titans-2/images/2/2a/Book_of_Prophecy.png/revision/latest?cb=20171024224837",
    "Khrysos Bowl": "https://vignette.wikia.nocookie.net/tap-titans-2/images/0/01/Khrysos_Bowl.png/revision/latest?cb=20180406183745",
    "Zakynthos Coin": "https://vignette.wikia.nocookie.net/tap-titans-2/images/8/81/Zakynthos_Coin.png/revision/latest?cb=20171024231542",
    "Great Fay Medallion": "https://vignette.wikia.nocookie.net/tap-titans-2/images/8/8e/Great_Fay_Medallion.png/revision/latest?cb=20171024221832",
    "Neko Sculpture": "https://vignette.wikia.nocookie.net/tap-titans-2/images/3/32/Neko_Sculpture.png/revision/latest?cb=20180904201919",
    "Coins of Ebizu": "https://vignette.wikia.nocookie.net/tap-titans-2/images/6/66/Coins_of_Ebizu.png/revision/latest?cb=20171024231637",
    "The Bronzed Compass": "https://i.imgur.com/XHVF7sG.png",
    "Evergrowing Stack": "https://i.imgur.com/hU2lu6U.png",
    "Flute of the Soloist": "https://i.imgur.com/VcBvaQ6.png",
    "Heavenly Sword": "https://vignette.wikia.nocookie.net/tap-titans-2/images/e/e6/Heavenly_Sword.png/revision/latest?cb=20171024233710",
    "Divine Retribution": "https://vignette.wikia.nocookie.net/tap-titans-2/images/3/38/Divine_Retribution.png/revision/latest?cb=20171024233639",
    "Drunken Hammer": "https://vignette.wikia.nocookie.net/tap-titans-2/images/e/e8/Drunken_Hammer.png/revision/latest?cb=20171024233643",
    "Samosek Sword": "https://vignette.wikia.nocookie.net/tap-titans-2/images/a/a2/Samosek_Sword.png/revision/latest?cb=20171024223128",
    "The Retaliator": "https://vignette.wikia.nocookie.net/tap-titans-2/images/a/ae/The_Retaliator.png/revision/latest?cb=20171117220555",
    "Stryfe's Peace": "https://i.imgur.com/OEc7gTc.png",
    "Hero's Blade": "https://vignette.wikia.nocookie.net/tap-titans-2/images/5/5e/Hero%27s_Blade.png/revision/latest?cb=20170927233654",
    "The Sword of Storms": "https://vignette.wikia.nocookie.net/tap-titans-2/images/5/5a/The_Sword_of_Storms.png/revision/latest?cb=20171024234124",
    "Furies Bow": "https://vignette.wikia.nocookie.net/tap-titans-2/images/9/9f/Furies_Bow.png/revision/latest?cb=20171024233706",
    "Charm of the Ancient": "https://vignette.wikia.nocookie.net/tap-titans-2/images/e/e9/Charm_of_the_Ancient.png/revision/latest?cb=20171024233634",
    "Tiny Titan Tree": "https://vignette.wikia.nocookie.net/tap-titans-2/images/a/ac/Tiny_Titan_Tree.png/revision/latest?cb=20171206185815",
    "Helm of Hermes": "https://vignette.wikia.nocookie.net/tap-titans-2/images/a/a6/Helm_of_Hermes.png/revision/latest?cb=20171206185744",
    "Fruit of Eden": "https://vignette.wikia.nocookie.net/tap-titans-2/images/0/00/Fruit_of_Eden.png/revision/latest?cb=20171024233701",
    "Influential Elixir": "https://vignette.wikia.nocookie.net/tap-titans-2/images/8/82/Influential_Elixir.png/revision/latest?cb=20171024233723",
    "Shimmering Oil": "https://i.imgur.com/WsgicAa.png",
    "O'Ryan's Charm": "https://vignette.wikia.nocookie.net/tap-titans-2/images/c/cf/O%27Ryan%27s_Charm.png/revision/latest?cb=20171206185808",
    "Heart of Storms": "https://vignette.wikia.nocookie.net/tap-titans-2/images/7/7b/Heart_of_Storms.png/revision/latest?cb=20171024223024",
    "Apollo Orb": "https://vignette.wikia.nocookie.net/tap-titans-2/images/7/74/Apollo_Orb.png/revision/latest?cb=20171117220833",
    "Sticky Fruit": "https://i.imgur.com/lJFAQZQ.png",
    "Hades Orb": "https://i.imgur.com/kxhZrE8.png",
    "Earrings of Portara": "https://vignette.wikia.nocookie.net/tap-titans-2/images/1/12/Earrings_of_Portara.png/revision/latest?cb=20180406183721",
    "Avian Feather": "https://vignette.wikia.nocookie.net/tap-titans-2/images/1/10/Avian_Feather.png/revision/latest?cb=20171024233625",
    "Corrupted Rune Heart": "https://vignette.wikia.nocookie.net/tap-titans-2/images/e/ed/Corrupted_Rune_Heart.png/revision/latest?cb=20171117212027",
    "Durendal Sword": "https://vignette.wikia.nocookie.net/tap-titans-2/images/2/24/Durendal_Sword.png/revision/latest?cb=20171117220636",
    "Helheim Skull": "https://vignette.wikia.nocookie.net/tap-titans-2/images/3/3d/Helheim_Skull.png/revision/latest?cb=20171117215841",
    "Oath's Burden": "https://i.imgur.com/1ea8UXR.png",
    "Crown of the Constellation": "https://i.imgur.com/zzZXk82.png",
    "Titania's Sceptre": "https://i.imgur.com/cI4MhAI.png",
    "Fagin's Grip": "https://i.imgur.com/UgBikYr.png",
    "Ring of Calisto": "https://vignette.wikia.nocookie.net/tap-titans-2/images/3/3e/Ring_of_Calisto.png/revision/latest?cb=20171117220740",
    "Blade of Damocles": "https://vignette.wikia.nocookie.net/tap-titans-2/images/8/85/Blade_of_Damocles.png/revision/latest?cb=20171025224428",
    "Helmet of Madness": "https://vignette.wikia.nocookie.net/tap-titans-2/images/6/6f/Helmet_of_Madness.png/revision/latest?cb=20170927235000",
    "Titanium Plating": "https://vignette.wikia.nocookie.net/tap-titans-2/images/7/73/Titanium_Plating.png/revision/latest?cb=20171024233750",
    "Moonlight Bracelet": "https://vignette.wikia.nocookie.net/tap-titans-2/images/1/1a/Moonlight_Bracelet.png/revision/latest?cb=20180525170728",
    "Amethyst Staff": "https://vignette.wikia.nocookie.net/tap-titans-2/images/a/a1/Amethyst_Staff.png/revision/latest?cb=20171024233619",
    "Sword of the Royals": "https://i.imgur.com/3NS2n1f.png",
    "Spearit's Vigil": "https://i.imgur.com/aNB2Tkf.png",
    "The Cobalt Plate": "https://i.imgur.com/wlGgng8.png",
    "Sigils of Judgement": "https://i.imgur.com/DG62EYb.png",
    "Foliage of the Keeper": "https://i.imgur.com/HcX3zXP.png",
    "Invader's Gjallarhorn": "https://vignette.wikia.nocookie.net/tap-titans-2/images/6/69/Invader%27s_Gjalarhorn.png/revision/latest?cb=20171024223345",
    "Titan's Mask": "https://vignette.wikia.nocookie.net/tap-titans-2/images/5/55/Titan%27s_Mask.png/revision/latest?cb=20171024233742",
    "Royal Toxin": "https://vignette.wikia.nocookie.net/tap-titans-2/images/1/1a/Royal_Toxin.png/revision/latest?cb=20171024234318",
    "Laborer's Pendant": "https://vignette.wikia.nocookie.net/tap-titans-2/images/5/5a/Laborer%27s_Pendant.png/revision/latest?cb=20171024233729",
    "Bringer of Ragnarok": "https://vignette.wikia.nocookie.net/tap-titans-2/images/0/07/Bringer_of_Ragnarok.png/revision/latest?cb=20171024225626",
    "Parchment of Foresight": "https://vignette.wikia.nocookie.net/tap-titans-2/images/9/92/Parchment_of_Foresight.png/revision/latest?cb=20171024233735",
    "Elixir of Eden": "https://vignette.wikia.nocookie.net/tap-titans-2/images/a/a6/Elixir_of_Eden.png/revision/latest?cb=20171024233648",
    "Hourglass of the Impatient": "https://vignette.wikia.nocookie.net/tap-titans-2/images/1/16/Hourglass_of_the_Impatient.png/revision/latest?cb=20171206185750",
    "Phantom Timepiece": "https://vignette.wikia.nocookie.net/tap-titans-2/images/7/75/Phantom_Timepiece.png/revision/latest?cb=20171024223340",
    "Forbidden Scroll": "https://vignette.wikia.nocookie.net/tap-titans-2/images/5/5a/Forbidden_Scroll.png/revision/latest?cb=20171024232056",
    "Ring of Fealty": "https://vignette.wikia.nocookie.net/tap-titans-2/images/7/74/Ring_of_Fealty.png/revision/latest?cb=20170927231949",
    "Glacial Axe": "https://vignette.wikia.nocookie.net/tap-titans-2/images/9/9c/Glacial_Axe.png/revision/latest?cb=20171024232136",
    "Aegis": "https://vignette.wikia.nocookie.net/tap-titans-2/images/e/e5/Aegis.png/revision/latest?cb=20171024230411",
    "Swamp Gauntlet": "https://vignette.wikia.nocookie.net/tap-titans-2/images/d/d5/Swamp_Gauntlet.png/revision/latest?cb=20171024225727",
    "Infinity Pendulum": "https://vignette.wikia.nocookie.net/tap-titans-2/images/2/2e/Infinity_Pendulum.png/revision/latest?cb=20171024232242",
    "Glove of Kuma": "https://vignette.wikia.nocookie.net/tap-titans-2/images/a/a2/Glove_of_Kuma.png/revision/latest?cb=20171024232333",
    "Titan Spear": "https://vignette.wikia.nocookie.net/tap-titans-2/images/4/4f/Titan_Spear.png/revision/latest?cb=20171024233755",
    "Oak Staff": "https://vignette.wikia.nocookie.net/tap-titans-2/images/f/f1/Oak_Staff.png/revision/latest?cb=20171024230310",
    "The Arcana Cloak": "https://vignette.wikia.nocookie.net/tap-titans-2/images/a/a0/The_Arcana_Cloak.png/revision/latest?cb=20171024233611",
    "Hunter's Ointment": "https://vignette.wikia.nocookie.net/tap-titans-2/images/a/a6/Hunter%27s_Ointment.png/revision/latest?cb=20170927233819",
    "Ambrosia Elixir": "https://vignette.wikia.nocookie.net/tap-titans-2/images/5/5c/Ambrosia_Elixir.png/revision/latest?cb=20180522002003",
    "Mystic Staff": "https://vignette.wikia.nocookie.net/tap-titans-2/images/7/76/Mystic_Staff.png/revision/latest?cb=20171117220503",
    "Mystical Beans of Senzu": "https://vignette.wikia.nocookie.net/tap-titans-2/images/6/6a/Mystical_Beans_of_Senzu.png/revision/latest?cb=20180406183735",
    "Egg of Fortune": "https://vignette.wikia.nocookie.net/tap-titans-2/images/9/9d/Egg_of_Fortune.png/revision/latest?cb=20171024225228",
    "Divine Chalice": "https://vignette.wikia.nocookie.net/tap-titans-2/images/e/e3/Divine_Chalice.png/revision/latest?cb=20171024225516",
    "Invader's Shield": "https://vignette.wikia.nocookie.net/tap-titans-2/images/5/5b/Invader%27s_Shield.png/revision/latest?cb=20171024225419",
    "Axe of Muerte": "https://vignette.wikia.nocookie.net/tap-titans-2/images/e/ea/Axe_of_Muerte.png/revision/latest?cb=20171024233630",
    "Essence of the Kitsune": "https://vignette.wikia.nocookie.net/tap-titans-2/images/9/99/Essence_of_the_Kitsune.png/revision/latest?cb=20171117221122",
    "Boots of Hermes": "https://vignette.wikia.nocookie.net/tap-titans-2/images/6/64/Boots_of_Hermes.png/revision/latest?cb=20180406183716",
    "Unbound Gauntlet": "https://vignette.wikia.nocookie.net/tap-titans-2/images/8/81/Unbound_Gauntlet.png/revision/latest?cb=20180803145551",
    "Oberon Pendant": "https://vignette.wikia.nocookie.net/tap-titans-2/images/1/1c/Oberon_Pendant.png/revision/latest?cb=20180525170733",
    "Lucky Foot of Al-Mi-Raj": "https://vignette.wikia.nocookie.net/tap-titans-2/images/e/ef/Lucky_Foot_of_Al-mi%27raj.png/revision/latest?cb=20180406183730",
    "Lost King's Mask": "https://vignette.wikia.nocookie.net/tap-titans-2/images/c/cc/Lost_King%27s_Mask.png/revision/latest?cb=20171206185759",
    "Staff of Radiance": "https://vignette.wikia.nocookie.net/tap-titans-2/images/c/cb/Staff_of_Radiance.png/revision/latest?cb=20171024224732",
    "Morgelai Sword": "https://vignette.wikia.nocookie.net/tap-titans-2/images/6/61/Morgelai_Sword.png/revision/latest?cb=20180525170635",
    "Ringing Stone": "https://i.imgur.com/0JRvSL8.png",
    "Quill of Scrolls": "https://i.imgur.com/fbNpi0j.png",
    "Old King's Stamp": "https://i.imgur.com/MurgmAg.png",
    "The Master's Sword": "https://vignette.wikia.nocookie.net/tap-titans-2/images/b/bf/The_Master%27s_Sword.png/revision/latest?cb=20171024221847",
    "The Magnifier": "https://i.imgur.com/dE9Ir8h.png",
    "The Treasure of Fergus": "https://i.imgur.com/raUqgFI.png",
    "The White Dwarf": "https://i.imgur.com/6CaFG99.png",
    "Aram Spear": "https://vignette.wikia.nocookie.net/tap-titans-2/images/8/88/Aram_Spear.png/revision/latest?cb=20171117220101",
    "Ward of the Darkness": "https://vignette.wikia.nocookie.net/tap-titans-2/images/3/3b/Ward_of_the_Darkness.png/revision/latest?cb=20171117220020",
    "Pearl of Oblivion": "https://i.imgur.com/NV6iZSU.png",
    "Endless Bandolier": "https://i.imgur.com/PILt28Q.png",
    "Cosmic Sextant": "https://i.imgur.com/CzFrWAx.png",
    "Twin Bracers": "https://i.imgur.com/jsAgcOf.png",
    "Golden Scope": "https://i.imgur.com/LIYxCds.png"
};
const activeSpCsv = "../tt2/assets/SkillTreeInfo4-23-22.csv";
const activeArtifactCsv = "../tt2/assets/ArtifactInfo4-23-22.csv";