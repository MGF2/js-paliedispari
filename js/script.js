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
var parola = prompt("Inserisci una parola");
var stringaNor = parola.toLowerCase();
palindroma(stringaNor);


function palindroma(scelta) {
  var stringaRev = " ";

  for ( i = stringaNor.length - 1; i >= 0; i--) {
    stringaRev += stringaNor[i];
  }

  if (stringaRev == stringaNor) {
    console.log("La parola è palindroma");
  } else {
    console.log("La parola non è palindroma");
  }

}
