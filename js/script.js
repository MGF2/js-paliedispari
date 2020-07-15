//Palidroma
//Chiedere all'utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

//SENZA FUNZIONE

// //Chiedo la parola
// var parola = prompt("Inserisci una parola");
// //Tolgo le maiuscole e memorizzo in una stringa
// var stringaNor = parola.toLowerCase();
// //Creo una stringa vuota per memorizzare la parola al contrario
// var stringaRev = "";
// //Ciclo per inserire la parola al contrario
// for ( i = stringaNor.length - 1; i >= 0; i--) {
//   stringaRev += stringaNor[i];
// }
// //Confronto le parole
// if (stringaNor == stringaRev) {
//   palidroma = true;
//   console.log("La parola è palindroma");
// } else {
//   palindroma = false;
//   console.log("La parola non è palindroma");
// }
//
//
// console.log("La tua parola è:" + " " + stringaNor);
// console.log("La tua parola al contrario è:" + " " + stringaRev);

//CON LA FUNZIONE

//Chiedo la parola
var parola = prompt("Inserisci una parola");
//Trasformo in minuscolo
var parolalow = parola.toLowerCase();
console.log("La tua parola è:" + " " + parolalow);
//Richiamo la funzione
palindroma(parolalow);


function palindroma(parolalow) {
  //Stringa vuota per parola invertita
  var parolaRev = "";

  //Ciclo per inserire la parola al contrario nella stringa vuota
  for ( i = parolalow.length - 1; i >= 0; i--) {
    parolaRev += parolalow[i];
  }
  console.log("La tua parola al contrario è:" + " " + parolaRev);

  //Confronto le parole
  if (parolaRev == parolalow) {
    console.log("La parola è palindroma");
  } else {
    console.log("La parola non è palindroma");
  }

}
