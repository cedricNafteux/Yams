//initialisation des variables
var tabDe = new Array;
var tabHaut = new Array;
var tabScoreInter = new Array;
var tabScoreFinal = new Array;
var scoreInter = [0,0,0,0,0];
var scoreFinal = [0,0,0,0,0];

var barrer = false;

var choixValeurAnnonce;
var tabNomLig = ['1','2','3','4','5','6','full','suite', 'moins','plus','carre','yams'];
var tabNomTab = ['D1','M1','L1','S1','A1','D2','M2','L2','S2','A2','D3','M3','L3','S3','A3',
                 'D4','M4','L4','S4','A4','D5','M5','L5','S5','A5','D6','M6','L6','S6','A6'];

//intit boutons
var btnLancer = document.getElementById('lancer');
btnLancer.onclick = lancer;
var btnBarrer = document.getElementById('barrer');
btnBarrer.onclick = ftnBarrer;
var btnPtsTotal = document.getElementById('ptsTotal');
btnPtsTotal.textContent = 0;


var btnNouveau = document.getElementById('nouveau');
btnNouveau.onclick = nouvellePartie;

var btnTour = document.getElementById('tour');
btnTour.disabled = true;
btnTour.value = 0;
btnTour.textContent = btnTour.value;

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

//création tableau scoreIntermediaire
for(var a = 0; a<5; a++){
    tabScoreInter.push(document.getElementById('scoreInter'+a));
}
//création tableau scoreFinaux
for(var a = 0; a<5; a++){
    tabScoreFinal.push(document.getElementById('scoreFinal'+a));
}


//FONCTIONS
function initialisation(){

    for(let i = 0 ; i < 6 ; i++ ){
        let a = document.createElement("span");
        a.textContent = tabNomLig[i];
        document.getElementById('colHaut').appendChild(a);
    }
    for(let j = 0 ; j < 30 ; j++ ){
        let b = document.createElement("button");
        b.id = tabNomTab[j];
        document.getElementById('tabHaut').appendChild(b);
    }
    for(let k=0;k<tabNomLig.length;k++){
        let c = document.createElement("option");
        c.id = 'opt'+tabNomLig[k];
        c.textContent = tabNomLig[k];
        document.getElementById('selectAnn').appendChild(c);
    }
    for(let l=0;l<5;l++){
        let d = document.createElement("button");
        d.id = 'scoreInter'+l;
        d.textContent = scoreInter[l];
        document.getElementById('interButton').appendChild(d);
    }
    for(let m=0;m<5;m++){
        let d = document.createElement("button");
        d.id = 'scoreFinal'+m;
        d.textContent = scoreFinal[m];
        document.getElementById('finalScore').appendChild(d);
    }
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
                tabDe[i].textContent = tmp;
                tabDe[i].value = tmp;
            }
        }
        btnTour.value ++;
        btnTour.textContent = btnTour.value;

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


}

function reinitialiser(){
    for(let i = 0 ; i < tabDe.length ; i ++){
        tabDe[i].textContent = '';
        tabDe[i].disabled = false;
        tabDe[i].style.backgroundColor = '';
        tabDe[i].style.color = '';
        btnTour.value = 0;
        btnTour.textContent = btnTour.value;
    }
}
function faceDe() {
    if(btnTour.value > 0){
        if(this.style.backgroundColor == ''){
            this.style.backgroundColor = 'green';
            this.style.color = 'white';
        }else{
            this.style.backgroundColor = '';
            this.style.color = '';
        }
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
            if(chiffre == 1 || tabHaut[pos-5].disabled == true || barrer == true ){
                remplissageHaut(pos,chiffre)
                reinitialiser()
                           }
            break;
        case 'M':
            pos = tabHaut.indexOf(this);
            if(chiffre == 6 || tabHaut[pos+5].disabled == true || barrer == true  ){
            remplissageHaut(pos,chiffre)
                           }
            break;
        case 'L':
            remplissageHaut(pos,chiffre);
       
            break;
        case 'S':
            if(btnSec.style.backgroundColor == 'green' || barrer == true ){
                remplissageHaut(pos,chiffre);
            }
            break;
        case 'A':
            if(chiffre == choixValeurAnnonce.value || barrer == true ){
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
    let yamsHaut = 0;

    if(barrer == true){
        tabHaut[pos].style.backgroundColor = 'red';
        ftnBarrer();
    }else{
        for(let i = 0 ; i < tabDe.length ; i++){
            if(tabDe[i].value == chiffre){
                yamsHaut += 1
                sco = sco + chiffre;
           }
        }
           if(yamsHaut == 5){
               tabHaut[pos].style.backgroundColor = 'green';
           }else{
               tabHaut[pos].style.backgroundColor = 'aqua';
           }
    }



        tabHaut[pos].value = sco;
        tabHaut[pos].textContent = sco;
        tabHaut[pos].disabled = true;





        compteScore();

        reinitialiser()
}

function compteScore(){
    let tab = new Array;
    let tab2 = new Array;
    let yamsTotal = 0;
    let scoreTmp = 0;
    for(let h = 0;h<tabHaut.length;h++){
       tab[h] = tabHaut[h].value;
       if(tab[h]==''){
        tab[h]=0;
       }
       if(tabHaut[h].style.backgroundColor == 'green'){
           yamsTotal++;
       }
       tab[h] = parseInt(tab[h]);
    }

    tab2[0] = tab[0] + tab[5]+ tab[10]+tab[15] + tab[20]+ tab[25];
    tab2[1] = tab[1] + tab[6]+ tab[11]+tab[16] + tab[21]+ tab[26];
    tab2[2] = tab[2] + tab[7]+ tab[12]+tab[17] + tab[22]+ tab[27];
    tab2[3] = tab[3] + tab[8]+ tab[13]+tab[18] + tab[23]+ tab[28];
    tab2[4] = tab[4] + tab[9]+ tab[14]+tab[19] + tab[24]+ tab[29];

    for(let m = 0;m<5;m++){
        if(tab2[m] >= 63){
            tabScoreInter[m].textContent = tabScoreInter[m].value = tab2[m]+60;
        }else{
            tabScoreInter[m].textContent = tabScoreInter[m].value = tab2[m];
        }
    }

    for(let n = 0;n<5;n++){
        tabScoreFinal[n].textContent = tabScoreFinal[n].value = tabScoreInter[n].value;
        let tmp = parseInt(tabScoreFinal[n].value);
        scoreTmp = scoreTmp + tmp;
    }
    scoreTmp = scoreTmp + (yamsTotal*100);

    btnPtsTotal.textContent = scoreTmp;

}










function ftnBarrer(){
    if(barrer == false){
        barrer = true;
        btnBarrer.style.backgroundColor = 'hotpink';
    }else{
        barrer = false;
        btnBarrer.style.backgroundColor = 'darkred';
    }
}
