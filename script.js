//initialisation des tableaux
var tabDe = new Array;

//intit boutons
var btnLancer = document.getElementById('lancer');
btnLancer.onclick = lancer;
var btnNouveau = document.getElementById('nouveau');
btnNouveau.onclick = nouvellePartie;

//création tableau des dés
for(var i = 1; i<6; i++){
    tabDe.push(document.getElementById('de'+i));
}

//gestion bouton dés
for(var i = 0; i<tabDe.length; i++){
    var j = tabDe[i];
    if(j){
        j.onclick = faceDe;
    }
}

//FONCTIONS
function nouvellePartie(){
    reinitialiser();
}

function lancer(){
    for(let i = 0 ; i < tabDe.length ; i++ ){
        if(tabDe[i].style.backgroundColor == ''){
            let tmp = Math.random()*(7 - 1) + 1;
            tmp = parseInt(tmp);
            tabDe[i].innerHTML = tmp;
            tabDe[i].value = tmp;
        }
    }
}

function reinitialiser(){
    for(let i = 0 ; i < tabDe.length ; i ++){
        tabDe[i].innerHTML = '';
        tabDe[i].disabled = false;
        tabDe[i].style.backgroundColor = '';
        tabDe[i].style.color = '';
    }
}
function faceDe() {
    if(this.style.backgroundColor == ''){
        this.style.backgroundColor = 'green';
        this.style.color = 'white';
    }else{
        this.style.backgroundColor = '';
        this.style.color = '';
    }
}
// function total() {
//     for(let j = 0 ; j < tabDe.length ; j++ ){
//         tabDe[j] = parseInt(tabDe[j].value, 10);
//         scoreTotal = scoreTotal + tabDe[j];
//     }
// test.innerHTML = scoreTotal;
// }