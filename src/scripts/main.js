AOS.init();
const contador = document.querySelector("#contador");
const dataDoEvento = new Date("Jun 29, 2024 20:00:00");
const TimeStampDoEvento = dataDoEvento.getTime();
const inputMusica = document.querySelector("#music");

const contaAsHoras = setInterval(() => {
  const agora = new Date();
  const TimeStampAtual = agora.getTime();
  const distanciaAteOEvento = TimeStampDoEvento - TimeStampAtual;

  const diasAteOEvento = Math.floor(
    distanciaAteOEvento / (1000 * 60 * 60 * 24)
  );

  const horasAteOEvento = Math.floor(
    (distanciaAteOEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  const minutosAteOEvento = Math.floor(
    (distanciaAteOEvento % (1000 * 60 * 60)) / (1000 * 60)
  );

  const segundosAteOEvento = Math.floor(
    (distanciaAteOEvento % (1000 * 60)) / 1000
  );

  contador.innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

  if (distanciaAteOEvento < 0) {
    clearInterval(contaAsHoras);
    contador.style.color = "red";
    contador.innerHTML = "Evento expirado";
  }
}, 1000);

const botaoEnviar = document.querySelector("#enviar-musica");

botaoEnviar.addEventListener("click", () => {
  const musica = inputMusica.value;
  alert(`Obrigado por enviar a sua sugestão: ${musica}`);
});
