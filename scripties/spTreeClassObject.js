var knightArray = [];
var warlordArray = [];
var sorcererArray = [];
var petArray = [];
var rogueArray = [];
var alchemistArray = [];
function getTreeByClass(classname){
    switch(classname){
        case "Knight":
            return knightArray;
            break;
        case "Warlord":
            return warlordArray;
            break;
        case "Sorcerer":
            return sorcererArray;
            break;
        case "Rogue":
            return rogueArray;
            break;
        case "Pet":
            return petArray;
            break;
        case "Alchemist":
            return alchemistArray;
            break;
        default:
            console.log("Fell off branch")
        break;
    }
}

var rankingBoxRowPet;
var rankingBoxRowKnight;
var rankingBoxRowWarlord;
var rankingBoxRowSorcerer;
var rankingBoxRowRogue;
var rankingBoxRowAlchemist;
function getRowTemplate(Class){
    switch (Class){
        case "Knight":
        return rankingBoxRowKnight;
        case "Warlord":
        return rankingBoxRowWarlord;
        case "Sorcerer":
        return rankingBoxRowSorcerer;
        case "Rogue":
        return rankingBoxRowRogue;
        case "Pet":
        return rankingBoxRowPet;
        case "Alchemist":
        return rankingBoxRowAlchemist;
        default:
            console.log("fell off switch")
            break;
    }
}

var TreeIDTagByClass = Object.freeze({
    Knight: "knightTree",
    Warlord: "warlordTree",
    Sorcerer: "sorcererTree",
    Rogue: "rogueTree",
    Pet: "petTree",
    Alchemist: "alchemistTree"
});
function createTrees(){
    createTree(TreeIDTagByClass.Pet, petArray);
    createTree(TreeIDTagByClass.Knight, knightArray);
    createTree(TreeIDTagByClass.Warlord, warlordArray);
    createTree(TreeIDTagByClass.Sorcerer, sorcererArray);
    createTree(TreeIDTagByClass.Rogue, rogueArray);
    createTree(TreeIDTagByClass.Alchemist, alchemistArray);
}

var treeSp = {
    Knight : 0,
    Warlord : 0,
    Sorcerer : 0,
    Rogue : 0,
    Pet: 0,
    Alchemist: 0
}
function updateTotalSpSpent(){
    var totalSoFar = 0;
    for(var key of Object.keys(treeSp)){
        totalSoFar += treeSp[key];
    }
    document.getElementById('spSpent').value = totalSoFar;
    spSpent = totalSoFar;
}
function getTreeSpTotal(tree, id){
    var totalSpent = document.createElement('div');
    totalSpent.classList = "treeSp";
    totalSpent.id = id+"Sp";
    var totalSoFar = 0;
    for(var i = 0; i < tree.length; i++){
        totalSoFar += Number(tree[i]["CummulativeSP"]);
    };
    totalSpent.textContent = totalSoFar;
    treeSp[tree[0]['Class']] = totalSoFar;
    return totalSpent;
}
