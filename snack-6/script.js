// Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

function creaContatoreAutomatico(intervallo) {
  let incremento = 0;
  return () => {
    setInterval(() => console.log(incremento++), intervallo);
  };
}

const contatore = creaContatoreAutomatico(1000);

// contatore();
