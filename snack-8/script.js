function contoAllaRovescia(numero) {
  let incremento = numero;
  return () => {
    const intervall = setInterval(() => {
      console.log(incremento--);
      if (incremento === 0) {
        clearInterval(intervall);
        return console.log("Tempo Scaduto");
      }
    }, 1000);
  };
}

const contatore = contoAllaRovescia(10);

// contatore();
