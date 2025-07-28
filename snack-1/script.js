// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.

function somma(numero1, numero2) {
  return numero1 + numero2;
}
console.log(somma(5, 8));

// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile

function sommaAnom(numero1) {
  return function (nuemro2) {
    return numero1 + nuemro2;
  };
}

const Add2 = sommaAnom(2);
const Add4 = sommaAnom(4);

console.log(Add2(5));
console.log(Add4(5));

// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

const sommaArrow = (numero1, numero2) => {
  return numero1 + numero2;
};

console.log(sommaArrow(5, 10));
