// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

function creaTimer(numero) {
  return function () {
    setTimeout(() => console.log("tempo scaduto!"), numero);
  };
}
const timer5 = creaTimer(3000);
timer5();
