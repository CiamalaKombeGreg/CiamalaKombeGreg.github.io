"use strict";

var tabLancer = [];
var tabreinit = [];
var de1,de2;

function lancerGenerale(){
    let lancer = [];
    let double = comparaisonLancer();
    lancer[0] = de1;
    lancer[1] = de2;
    lancer[2] = double;
    tabLancer[tabLancer.length] = lancer.slice();
    if(!(double > 0)){
        alert("Vous avez obtenu le chiffre "+de1+" et "+de2);
    }else{
        alert("Vous avez obtenu le chiffre "+de1+" et "+de2+". Vous avez fait "+double+" avant d'arrivez a ce resultat.");
    }
}

function comparaisonLancer(){
    let db = 0;
    lancerDe();
    while(de1 === de2){
        lancerDe();
        db++;
    }
    return db;
}

function lancerDe(){
    for(let i = 0; i<2; i++){
        if(i == 0){
            de1 = Math.ceil(Math.random()*6);
        }else{
            de2 = Math.ceil(Math.random()*6);
        }
    }
}

function sommeFinal(){
    let somme = 0;
    let sommeDb = 0;
    if(!(tabLancer.length == 0)){
        for(let h = 0; h<tabLancer.length; h++){
            for(let j = 0; j<2; j++){
                somme += tabLancer[h][j]
            }
            sommeDb += tabLancer[h][2]
        }
    }else{
        alert("Aucun lancer pour l\'instant");
        return 0;
    }
    alert("La somme total de tout les lancers finaux est egale a "+somme+" et "+sommeDb+" doubles ont ete fait.");
}

function lancerdata(){
    let r = +prompt("Donner le numero du lancer a connaitre (de 1 a n).");
    if(isNaN(r) || r === 0){
        alert("Ce numero ne correspond pas");
        return 0;
    }else if(r > tabLancer.length){
        alert("Ce lancer n\'a pas encore ete fait.");
        return 0;
    }else{
        alert("Le lancer "+r+" a obtenu "+tabLancer[r-1][0]+" et "+tabLancer[r-1][1]+" comme chiffre finaux,"+tabLancer[r-1][2]+" double ont ete fait pour y arriver.");
    }
}

function compDeuxLancer(){
    let r1 = +prompt("Donner le premier numero de lancer a comparer (de 1 a n).");
    if((isNaN(r1) || r1 === 0) || r1 > tabLancer.length){
        alert("Ce numero ne correspond pas");
        return 0;
    }
    let r2 = +prompt("Donner le deuxieme numero de lancer a comparer (de 1 a n).");
    if((isNaN(r2) || r2 === 0) || r2 > tabLancer.length){
        alert("Ce numero ne correspond pas");
        return 0;
    }
    let t1 = tabLancer[r1-1][0] + tabLancer[r1-1][1];
    let t2 = tabLancer[r2-1][0] + tabLancer[r2-1][1];
    if(t1 > t2){
        alert("Le lancer "+r1+" a donne un total de "+t1+" qui est plus grand que le total du lancer "+r2+" qui a donne "+t2+".");
    }else if(t2 > t1){
        alert("Le lancer "+r2+" a donne un total de "+t2+" qui est plus grand que le total du lancer "+r1+" qui a donne "+t1+".");
    }else if(tabLancer[r1-1][2] > tabLancer[r2-1][2]){
        alert("Les sommes des deux lancer sont équivaux mais le lancer "+r1+" a plus de double.");
    }else if(tabLancer[r1-1][2] < tabLancer[r2-1][2]){
        alert("Les sommes des deux lancer sont équivaux mais le lancer "+r2+" a plus de double.");
    }else{
        alert("Les deux lancer sont egaux en somme et en double, ce qui est tres rare.");
    }
}

function reinit(){
    let supSur = prompt("Voulez vous vraiment reinitialiser les lancers? Tapez YES ou NO.");
    while((supSur == "YES" || supSur != "NO") && (supSur == "NO" || supSur != "YES")){
        supSur = prompt("Encodage errone, reessayez.");
    }
    if(supSur === "YES"){
        tabLancer = tabreinit.slice();
        alert("Lancers reinitialiser.")
    }else{
        alert("Arret de la reinitialisation.")
    }
}