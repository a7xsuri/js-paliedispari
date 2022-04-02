let parola =prompt("inserisci parola");

function WordPalindormaVerification(parola){
let letters = parola.split("");
let giraparola="";
let parolagira="";

for(let i = letters.length - 1; i>=0 ;i--) {
     giraparola+=letters[i];
 }

for(let i = 0 ; i <=letters.length - 1 ;i++) {
     parolagira+=letters[i];
 }

 if (parolagira==giraparola){
    document.write('la parola inserita è palindroma')
}else{
    document.write('la parola inserita non è palindroma')
}

 return parolagira, giraparola;
}
