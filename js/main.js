//console.log("ciao");

const utentiApprovati = ["lucia@libero.it","marco@gmail.com","beatrice@outlook.it","federica@libero.it"];

let x = prompt ("inserisci la tua mail");
console.log(x);
for (let num = 0 ; num < 5; num ++){
    const utentiOk = utentiApprovati[num];
    if (x==utentiOk){
        console.log(x+ "Sei dentro!");
        
    }else if( x!=utentiOk ){
        console.log("Non puoi accedere!" +x);
    
    }
}