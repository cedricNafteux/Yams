//initialisation des variables
var tabDe = new Array;
var tabHaut = new Array;
var tabBas = new Array;
var tabScoreInter = new Array;
var tabScoreFinal = new Array;
var scoreInter = [0,0,0,0,0];
var scoreFinal = [0,0,0,0,0];

var barrer = false;

var choixValeurAnnonce;
var tabNomLig = ['1','2','3','4','5','6','full','suite', '-','+','carre','yams'];
var tabNomTabHaut = ['D01','M01','L01','S01','A01','D02','M02','L02','S02','A02','D03','M03','L03','S03','A03',
                 'D04','M04','L04','S04','A04','D05','M05','L05','S05','A05','D06','M06','L06','S06','A06'];
var tabNomTabBas = ['D07','M07','L07','S07','A07','D08','M08','L08','S08','A08','D09','M09','L09','S09','A09',
                'D10','M10','L10','S10','A10','D11','M11','L11','S11','A11','D12','M12','L12','S12','A12'];
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
for(var u = 1; u<6; u++){
    tabDe.push(document.getElementById('de'+u));
}

initialisation();

//gestion bouton dés
for(var v = 0; v<tabDe.length; v++){
    var de = tabDe[v];
        de.onclick = faceDe;
}
//création tableau tabHaut
for(var x = 0; x<tabNomTabHaut.length; x++){
    tabHaut.push(document.getElementById(tabNomTabHaut[x]));
}
//gestion bouton tabHaut
for(var y = 0; y<tabHaut.length; y++){
    var th = tabHaut[y];
        th.onclick = tableauHaut;
}

//création tableau scoreIntermediaire
for(var w = 0; w<5; w++){
    tabScoreInter.push(document.getElementById('scoreInter'+w));
}
//création tableau scoreFinaux
for(let z = 0; z<5; z++){
    tabScoreFinal.push(document.getElementById('scoreFinal'+z));
}
//création tableau tabBas
for(let a = 0; a<tabNomTabBas.length; a++){
    tabBas.push(document.getElementById(tabNomTabBas[a]));
}

//gestion bouton tabBas
for(let a1 = 0; a1<tabBas.length; a1++){
    let z1 = tabBas[a1];
        z1.onclick = tableauBas;
}

//FONCTIONS
function initialisation(){
//init colonne tabHaut
    for(let a = 0 ; a < 6 ; a++ ){
        let b = document.createElement("span");
        b.textContent = tabNomLig[a];
        document.getElementById('colHaut').appendChild(b);
    }
//init boutton tab haut
    for(let c = 0 ; c < 30 ; c++ ){
        let d = document.createElement("button");
        d.id = tabNomTabHaut[c];
        document.getElementById('tabHaut').appendChild(d);
    }
 //init colonne tabBas   
    for(let e = 6 ; e < 12 ; e++ ){
        let f = document.createElement("span");
        f.textContent = tabNomLig[e];
        document.getElementById('colBas').appendChild(f);
    }
//init boutton tab bas
    for(let g = 0 ; g < 30 ; g++ ){
        let h = document.createElement("button");
        h.id = tabNomTabBas[g];
        document.getElementById('tabBas').appendChild(h);
    }
//init menu deroulant annonce   
    for(let i=0;i<tabNomLig.length;i++){
        let j = document.createElement("option");
        j.id = 'opt'+tabNomLig[i];
        j.textContent = tabNomLig[i];
        document.getElementById('selectAnn').appendChild(j);
    }
//init bouton score intermediaire     
    for(let k=0;k<5;k++){
        let l = document.createElement("button");
        l.id = 'scoreInter'+k;
        l.textContent = scoreInter[k];
        document.getElementById('interButton').appendChild(l);
    }
//init bouton score final 
    for(let m=0;m<5;m++){
        let n = document.createElement("button");
        n.id = 'scoreFinal'+m;
        n.textContent = scoreFinal[m];
        document.getElementById('finalScore').appendChild(n);
    }
}

function nouvellePartie(){
    reinitialiser();
}

function lancer(){
    if(btnTour.value < 3){
        for(let o = 0 ; o < tabDe.length ; o++ ){
            if(tabDe[o].style.backgroundColor == ''){
                let tmp = Math.random()*(7 - 1) + 1;
                tmp = parseInt(tmp);
                tabDe[o].textContent = tmp;
                tabDe[o].value = tmp;
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
    for(let p = 0 ; p < tabDe.length ; p ++){
        tabDe[p].textContent = '';
        tabDe[p].disabled = false;
        tabDe[p].style.backgroundColor = '';
        tabDe[p].style.color = '';
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
    var chiffre = this.id.substring(1,3);

    let pos;
    chiffre = parseInt(chiffre);
    pos = tabHaut.indexOf(this);

    choixValeurAnnonce = document.getElementById('selectAnn');

    switch(lettre){
        case 'D':
            if(chiffre == 1 || tabHaut[pos-5].disabled == true || barrer == true ){
                remplissageHaut(pos,chiffre)
                //reinitialiser()
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
        for(let q = 0 ; q < tabDe.length ; q++){
            if(tabDe[q].value == chiffre){
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

// ###################################################################################### GESTION TABLEAU BAS
function tableauBas() {
    var lettre = this.id.substring(0,1);
    var chiffre = this.id.substring(1,3);

    let pos;
    chiffre = parseInt(chiffre);
    pos = tabBas.indexOf(this);

    choixValeurAnnonce = document.getElementById('selectAnn');

    switch(lettre){
        case 'D':
            if(chiffre == 7 || tabBas[pos-5].disabled == true || barrer == true ){
                remplissageBas(pos,chiffre)
                //reinitialiser()
                           }
            break;
        case 'M':
            pos = tabBas.indexOf(this);
            if(chiffre == 12 || tabBas[pos+5].disabled == true || barrer == true  ){
            remplissageBas(pos,chiffre)
                           }
            break;
        case 'L':
            remplissageBas(pos,chiffre);
       
            break;
        case 'S':
            if(btnSec.style.backgroundColor == 'green' || barrer == true ){
                remplissageBas(pos,chiffre);
            }
            break;
        case 'A':
            if(chiffre == choixValeurAnnonce.value || barrer == true ){
                remplissageBas(pos,chiffre);
            }

            break;
        default:
            alert('pas dans la boucle');
            break;
    }
}
function remplissageBas(pos,chiffre){
    let sco = 0;
    let yamsBas = false;
    let tabDe2 = new Array;
    let valide = false;

    if(barrer == true){
        tabHaut[pos].style.backgroundColor = 'red';
        ftnBarrer();

    }else{

        for(let aa = 0;aa < 5; aa++){
            tabDe2[aa] = parseInt(tabDe[aa].value);
        }
    }
    tabDe2.sort(function(a, b) {
        return a - b;
    });
    if(tabDe2[0]==tabDe2[4]){
        yamsBas = true;
    }

    let totalDe = tabDe2.reduce((sum, current) => sum + current);

    switch(chiffre){
        case 7://full ok
            if(tabDe2[0]==tabDe2[1] && tabDe2[0]==tabDe2[2] && tabDe2[3]==tabDe2[4] && tabDe2[2] != tabDe2[3] ||
                tabDe2[0]==tabDe2[1] && tabDe2[2]==tabDe2[3] && tabDe2[2]==tabDe2[4] && tabDe2[1] != tabDe2[2]){
                sco = 20;
                valide = true;
            }
            break;

        case 8://suite ok
            if(tabDe2[0]==(tabDe2[1]-1) && tabDe2[1]==(tabDe2[2]-1)&& tabDe2[2]==(tabDe2[3]-1)&& tabDe2[3]==(tabDe2[4]-1)){
                sco = 30;
                valide = true;
            }
            break;

        case 9://moins ok
            if(tabBas[pos+5].value == '' || totalDe < tabBas[pos+5].value){
                valide = true;
            }
            break;

        case 10://plus ok
            if(tabBas[pos-5].value == '' || totalDe > tabBas[pos-5].value){
                valide = true
            }
            break;

        case 11://carre ok
            if(tabDe2[0]==tabDe2[1] && tabDe2[0]==tabDe2[2] && tabDe2[0]==tabDe2[3] ||
                tabDe2[1]==tabDe2[2] && tabDe2[1]==tabDe2[3] && tabDe2[1]==tabDe2[4] ){
                sco = 40;
                valide = true;
            }
            break;

        case 12://yams ok
            if(tabDe2[0]==tabDe2[1] && tabDe2[0]==tabDe2[2] && tabDe2[0]==tabDe2[3] && tabDe2[0]==tabDe2[4]){
                sco = 50;
                valide = true;
            }
            break;

        default:
            alert('pas dans la boucle');
            break;
    }

    if(valide == true){

        for(let q2 = 0 ; q2 < tabDe.length ; q2++){
            sco = sco + tabDe2[q2];
        }

        if(yamsBas == true){
            tabBas[pos].style.backgroundColor = 'green';
            tabBas[pos].style.color = 'white';
        }else{
            tabBas[pos].style.backgroundColor = 'aqua';
        }

        tabBas[pos].value = sco;
        tabBas[pos].textContent = sco;
        tabBas[pos].disabled = true;

        compteScore();
        reinitialiser()
    }

}

function compteScore(){
    let tab = new Array;
    let tab2 = new Array;
    let tabBasGen = new Array;
    let tabBasScore = new Array;
    let yamsTotal = 0;
    let scoreTmp = 0;

    //score tabHaut par colonne
   for(let r = 0;r<tabHaut.length;r++){
       tab[r] = tabHaut[r].value;
       if(tab[r]==''){
        tab[r]=0;
       }
       if(tabHaut[r].style.backgroundColor == 'green'){
           yamsTotal++;
       }
       tab[r] = parseInt(tab[r]);
    }

    tab2[0] = tab[0] + tab[5]+ tab[10]+tab[15] + tab[20]+ tab[25];
    tab2[1] = tab[1] + tab[6]+ tab[11]+tab[16] + tab[21]+ tab[26];
    tab2[2] = tab[2] + tab[7]+ tab[12]+tab[17] + tab[22]+ tab[27];
    tab2[3] = tab[3] + tab[8]+ tab[13]+tab[18] + tab[23]+ tab[28];
    tab2[4] = tab[4] + tab[9]+ tab[14]+tab[19] + tab[24]+ tab[29];

    for(let s = 0; s<5 ; s++ ){

        if(tab2[s] >= 63){
            tabScoreInter[s].textContent = tabScoreInter[s].value = tab2[s]+60;
        }else{
            tabScoreInter[s].textContent = tabScoreInter[s].value = tab2[s];
        }
    }



   //score tabBas par colonne
   for(let r = 0;r<tabBas.length;r++){
    tabBasGen[r] = tabBas[r].value;
    if(tabBasGen[r]==''){
        tabBasGen[r]=0;
    }
    if(tabBas[r].style.backgroundColor == 'green'){
        yamsTotal++;
    }
    tabBasGen[r] = parseInt(tabBasGen[r]);
 }

 tabBasScore[0] = tabBasGen[0] + tabBasGen[5]+ tabBasGen[10]+tabBasGen[15] + tabBasGen[20]+ tabBasGen[25];
 tabBasScore[1] = tabBasGen[1] + tabBasGen[6]+ tabBasGen[11]+tabBasGen[16] + tabBasGen[21]+ tabBasGen[26];
 tabBasScore[2] = tabBasGen[2] + tabBasGen[7]+ tabBasGen[12]+tabBasGen[17] + tabBasGen[22]+ tabBasGen[27];
 tabBasScore[3] = tabBasGen[3] + tabBasGen[8]+ tabBasGen[13]+tabBasGen[18] + tabBasGen[23]+ tabBasGen[28];
 tabBasScore[4] = tabBasGen[4] + tabBasGen[9]+ tabBasGen[14]+tabBasGen[19] + tabBasGen[24]+ tabBasGen[29];




// score par colonne
    for(let t1 = 0 ; t1 < 5 ; t1++) {

        let tmp1 = 0;
        tmp1 = parseInt(tabScoreInter[t1].value);
        tmp1 = tmp1 + tabBasScore[t1];
        tabScoreFinal[t1].textContent = tabScoreFinal[t1].value = tmp1;

        let tmp2 = parseInt(tabScoreFinal[t1].value);
        scoreTmp = scoreTmp + tmp2;
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
