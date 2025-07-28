// Creare un throttler per limitare l’esecuzione di una funzione
// Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.

// Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi

function creaThrottler(func, limite) {
  let lastExecution = 0;

  return function (controllo) {
    const now = Date.now();
    if (now - lastExecution >= limite) {
      lastExecution = now;
      return func(controllo);
    }
  };
}
// Esempio di utilizzo
const throttledLog = creaThrottler((msg) => console.log(msg), 2000);
throttledLog("Messaggio 1"); // Eseguito
setTimeout(() => throttledLog("Messaggio 2"), 1000); // Non eseguito
setTimeout(() => throttledLog("Messaggio 3"), 3000); // Eseguito dopo 3 secondi
