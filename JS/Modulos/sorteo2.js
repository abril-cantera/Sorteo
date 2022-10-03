const d = document;

export default function sorteodos(input, agregar, ganador, jugadores) {
  const $input = d.getElementById(input),
    $agregar = d.getElementById(agregar),
    $ganador = d.getElementById(ganador),
    $jugadores = d.getElementById(jugadores);

  let jugadoresArray = [];

  const agregarJugadores = () => {
    const inputValue = $input.value;
    if (inputValue === "" || inputValue.length === 0) {
      swal("No has ingresado participante");
    } else {
      jugadoresArray.push(inputValue);

      $jugadores.insertAdjacentHTML("beforeend", `<li>${inputValue}</li>`);

      $input.value = "";
    }
  };
  const ganadorSorteo = () => {
    $input.focus();
    const random = Math.floor(Math.random() * jugadoresArray.length);
    const jugadorGanador = jugadoresArray[random];
    jugadoresArray = [];
    setTimeout(() => {
      $jugadores.innerHTML = [];
    }, 2000);
    swal(`El ganador es ${jugadorGanador}`);
  };

  $agregar.addEventListener("click", () => {
    agregarJugadores();
  });
  $ganador.addEventListener("click", () => {
    if (jugadoresArray.length === 0) {
      swal("No has ingresado participantes");
    } else {
      ganadorSorteo();
    }
  });
}
