// const UtentInputWord = document.getElementById('word');
let giraparola ="";
let parola ='ciao';
let verifica = document.getElementById("verifica").addEventListener('click',WordPalindormaVerification);
function WordPalindormaVerification(parola){
let letters = parola.split("");
 for(let i = letters.length - 1; i>0 ;i--) {
     giraparola+=letters[i];
 }
 return giraparola;
}
console.log(giraparola)