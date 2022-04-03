let Pari = document.querySelector('.pari');
let Dispari = document.querySelector('.dispari');
// function VerificationNumber(NumeroUtente){
//     if (NumeroUtente<1 || NumeroUtente>5){
//         alert('inserisci un numero valido');
//     }
// }

function VerificationPari(){
    let NumeroUtente = prompt('inserisci un numero da 1 a 5');
    if (NumeroUtente<1 || NumeroUtente>5){
        alert('inserisci un numero valido');
    }else{
    let NumeroComputer = Math.floor(Math.random() * 5);
    let Somma = NumeroUtente + NumeroComputer;
    if (Somma % 2 === 0 ){
        alert('hai vinto');
    } else {
        alert('hai perso');
    }
}
}

Pari.addEventListener('click', VerificationPari);

function VerificationDispari(){
    let NumeroUtente = prompt('inserisci un numero da 1 a 5');
    if (NumeroUtente<1 || NumeroUtente>5){
        alert('inserisci un numero valido');
    }else{
    let NumeroComputer = Math.floor(Math.random() * 5);
    let Somma = NumeroUtente + NumeroComputer;
    if (Somma % 2 === 0 ){
        alert('hai vinto');
    } else {
        alert('hai perso');
    }
}
}

Dispari.addEventListener('click', VerificationDispari);