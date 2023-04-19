//console.log("ciao");

const utentiApprovati = ["lucia@libero.it","marco@gmail.com","beatrice@outlook.it","federica@libero.it"];

let x = prompt ("inserisci la tua mail");

//console.log(x);
/*parti falso ,se non trova la corrispondenza con true non fa niente va avanti a cercare fino a che non la trova*/
let mailAutorizzata=false;

for (let num = 0 ; num < utentiApprovati.length; num ++){
    const utentiOk = utentiApprovati[num];

    if (x==utentiOk){
        mailAutorizzata= true;
    
    } 
}
if (mailAutorizzata==true){
    
    console.log(x+ "Sei dentro!");
    
}else{
    console.log("non puoi accedere!" +x);

}