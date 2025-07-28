// Crea una funzione che ferma un timer dopo un certo tempo
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.
function eseguiEferma(messaggio, avvio, stop) {
  return () => {
    setTimeout(() => {
      const intervallo = setInterval(() => console.log(messaggio), 2000);
      setTimeout(() => clearInterval(intervallo), stop);
    }, avvio);
  };
}

// Esempio di utilizzo

const intervalloTemp = eseguiEferma("adesso", 5000, 20000);

intervalloTemp();
