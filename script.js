//initialisation des variables
var tabDe = new Array;
var tabHaut = new Array;
var choixValeurAnnonce;
var tabNomLig = ['1','2','3','4','5','6','full','suite', 'moins','plus','carre','yams'];
var tabNomTab = ['D1','M1','L1','S1','A1','D2','M2','L2','S2','A2','D3','M3','L3','S3','A3',
                 'D4','M4','L4','S4','A4','D5','M5','L5','S5','A5','D6','M6','L6','S6','A6'];

//intit boutons
var btnLancer = document.getElementById('lancer');
btnLancer.onclick = lancer;

var btnNouveau = document.getElementById('nouveau');
btnNouveau.onclick = nouvellePartie;

var btnTour = document.getElementById('tour');
btnTour.disabled = true;
btnTour.value = 0;
btnTour.innerHTML = btnTour.value;

var btnSec = document.getElementById('btnSec');
var btnAnnonce = document.getElementById('btnAnnonce');
btnAnnonce.onclick = choixAnnonce;
//création tableau des dés
for(var i = 1; i<6; i++){
    tabDe.push(document.getElementById('de'+i));
}

initialisation();


//gestion bouton dés
for(var i = 0; i<tabDe.length; i++){
    var j = tabDe[i];
        j.onclick = faceDe;
}
//création tableau tabHaut
for(var a = 0; a<tabNomTab.length; a++){
    tabHaut.push(document.getElementById(tabNomTab[a]));
}

//gestion bouton tabHaut
for(var a = 0; a<tabHaut.length; a++){
    var b = tabHaut[a];
        b.onclick = tableauHaut;
}

//FONCTIONS
function initialisation(){

    for(let i = 0 ; i < 6 ; i++ ){
        let a = document.createElement("span");
        a.textContent = tabNomLig[i];
        document.getElementById('colHaut').appendChild(a);
    }
    for(let i = 0 ; i < 30 ; i++ ){
        let a = document.createElement("button");
        a.id = tabNomTab[i];
        document.getElementById('tabHaut').appendChild(a);
    }

    // if(btnAnnonce.style.backgroundColor == 'green'){
        for(let i=0;i<tabNomLig.length;i++){
            let b = document.createElement("option");
            b.id = 'opt'+tabNomLig[i];
            b.textContent = tabNomLig[i];
            document.getElementById('selectAnn').appendChild(b);
        }
   // }
}

function nouvellePartie(){
    reinitialiser();
}

function lancer(){
    if(btnTour.value < 3){
        for(let i = 0 ; i < tabDe.length ; i++ ){
            if(tabDe[i].style.backgroundColor == ''){
                let tmp = Math.random()*(7 - 1) + 1;
                tmp = parseInt(tmp);
                tabDe[i].innerHTML = tmp;
                tabDe[i].value = tmp;
            }
        }
        btnTour.value ++;
        btnTour.innerHTML = btnTour.value;

        if(btnTour.value == 1){
            btnSec.style.backgroundColor = 'green';
            btnAnnonce.style.backgroundColor = 'green';
        }else{
            btnSec.style.backgroundColor = 'red';
            btnAnnonce.style.backgroundColor = 'red';
        }
    }
    if(btnTour.value > 1){
        document.getElementById('selectAnn').disabled = true;
    }
}


//selectionner l'annonce
function choixAnnonce(){
document.getElementById('selectAnn').disabled = true;

//création du select
    // if(btnAnnonce.style.backgroundColor == 'green'){
    //     for(let i=0;i<tabNomLig.length;i++){
    //         let b = document.createElement("option");
    //         b.id = 'opt'+tabNomLig[i];
    //         b.textContent = tabNomLig[i];
    //         document.getElementById('selectAnn').appendChild(b);
    //     }
    // }


}

function reinitialiser(){
    for(let i = 0 ; i < tabDe.length ; i ++){
        tabDe[i].innerHTML = '';
        tabDe[i].disabled = false;
        tabDe[i].style.backgroundColor = '';
        tabDe[i].style.color = '';
        btnTour.value = 0;
        btnTour.innerHTML = btnTour.value;
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

function tableauHaut() {
    var lettre = this.id.substring(0,1);
    var chiffre = this.id.substring(1,2);
    let pos;
    chiffre = parseInt(chiffre);
    pos = tabHaut.indexOf(this);

    choixValeurAnnonce = document.getElementById('selectAnn');

    switch(lettre){
        case 'D':
            if(chiffre == 1 || tabHaut[pos-5].disabled == true ){
                remplissageHaut(pos,chiffre)
                reinitialiser()
                           }
            break;
        case 'M':
            pos = tabHaut.indexOf(this);
            if(chiffre == 6 || tabHaut[pos+5].disabled == true ){
            remplissageHaut(pos,chiffre)
                           }
            break;
        case 'L':
            remplissageHaut(pos,chiffre);
       
            break;
        case 'S':
            if(btnSec.style.backgroundColor == 'green'){
                remplissageHaut(pos,chiffre);
            }
            break;
        case 'A':
            if(chiffre == choixValeurAnnonce.value){
                remplissageHaut(pos,chiffre);
            }

            break;
        default:
            alert('pas dans la boucle');
            break;
    }

}

function remplissageHaut(pos,chiffre){
    let sco = 0;
    for(let i = 0 ; i < tabDe.length ; i++){
         if(tabDe[i].value == chiffre){
             sco = sco + chiffre;
        }
     }
        tabHaut[pos].innerHTML = sco;
        tabHaut[pos].disabled = true;
        tabHaut[pos].style.backgroundColor = 'aqua';
}