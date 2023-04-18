console.log("ciao");

const utentiApprovati = ["Lucia","Marco","Beatrice","Federica"];

let x = prompt("inserisci il tuo nome");

for(let num = 0 ; num<utentiApprovati.length; num++ ){
    let utentiOk = utentiApprovati[num];

    if(x==utentiOk) {
    prompt ("scrivi la tua mail");
    alert ("sei dei nostri!")
    }else if( x !==utentiOk){
    alert("non sei dei nostri");
    }
}