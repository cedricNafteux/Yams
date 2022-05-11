//initialisation des variables
var tabDe = new Array;
var tabNomCol = ['','Descente', 'Monté', 'Libre', 'Sec', 'Annonce'];
var tabNomLig = ['1','2','3','4','5','6','full','suite', 'moins','plus','carre','yams'];
var tabNomTab = ['D1','M1','L1','S1','A1','D2','M2','L2','S2','A2','D3','M3','L3','S3','A3',
                 'D4','M4','L4','S4','A4','D5','M5','L5','S5','A5','D6','M6','L6','S6','A6'];

//intit boutons
var btnLancer = document.getElementById('lancer');
btnLancer.onclick = lancer;
var btnNouveau = document.getElementById('nouveau');
btnNouveau.onclick = nouvellePartie;

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

//gestion bouton tabHaut
for(var a = 0; a<tabNomTab.length; a++){
    var b = document.getElementById(tabNomTab[a]);
        b.onclick = tableauHaut;
}

//FONCTIONS
function initialisation(){
    for(let i = 0 ; i < 6 ; i++ ){
        let a = document.createElement("span");
        a.textContent = tabNomCol[i];
        document.getElementById('secTitre').appendChild(a);
    }
    for(let i = 0 ; i < 6 ; i++ ){
        let a = document.createElement("span");
        a.textContent = tabNomLig[i];
        document.getElementById('colHaut').appendChild(a);
    }
    for(let i = 0 ; i < 30 ; i++ ){
        let a = document.createElement("button");
        a.id = tabNomTab[i];
       // a.textContent = tabNomTab[i];
        document.getElementById('tabHaut').appendChild(a);
    }
}

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

function tableauHaut() {
    var lettre = this.id.substring(0,1);
    var chiffre = this.id.substring(1,2);
    var sco = 0;
    chiffre = parseInt(chiffre);





    switch(lettre){
        case 'D':
           alert( document.getElementById(lettre+(chiffre-1))) //renvoie un null
            //if(chiffre == 1 || document.getElementById(lettre+(chiffre-1)).disabled == true ){
                                for(let i = 0 ; i < tabDe.length ; i++){
                                    if(tabDe[i].value == chiffre){
                                        sco = sco + chiffre;
                                    }
                                }
                          //  }

            break;
        case 'M':

            break;
        case 'L':

            break;
        case 'S':

            break;
        case 'A':

            break;
    }

    this.innerHTML = sco;
    this.disabled = true;
    this.style.backgroundColor = 'aqua';







    // let sco = 0;
    // for(let i = 0 ; i < tabDe.length ; i++){
    //     if(tabDe[i].value == chiffre){
    //         chiffre = parseInt(chiffre);
    //          sco = sco + chiffre;
    //          alert(sco);
    //     }
    // }
    // this.innerHTML = sco;
    // this.disabled = true;
    // this.style.backgroundColor = 'aqua';


}