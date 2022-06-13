let custoTaxaEntrada = 2;
let custoTotal = 0;
let custoPrimeiraHora = 3;
let custoPorHora = 4;

//formatar o tempo de estadia
let diaPorSegundos = 24 * 60 * 60;
let horaPorSegundos = 60 * 60;
let minutosPorSegundos = 60;

function converteDataHoraParaMs(horas) {
  const today = new Date();
  const dia = today.getDate();
  const mes = today.getMonth() + 1;
  const ano = today.getFullYear();
  const [hora, minutos, segundos] = horas.split(":");
  const novaData = new Date(ano, mes, dia, hora, minutos, segundos);
  return novaData.getTime();
}

function setCalculoTempoEstadia() {
  const tempo_inicio = document.querySelector("#tempo_inicio").value;
  const tempo_fim = document.querySelector("#tempo_fim").value;
  custoTotal = 0;

  if (
    converteDataHoraParaMs(tempo_inicio) > converteDataHoraParaMs(tempo_fim)
  ) {
    alert("Tempo início é maior que o tempo de saída");
    return false;
  }

  if (tempo_inicio !== "" && tempo_fim !== "") {
    const tempoPorHoraEmsegundos =
      (converteDataHoraParaMs(tempo_fim) -
        converteDataHoraParaMs(tempo_inicio)) /
      1000;

    const dia = Math.floor(tempoPorHoraEmsegundos / diaPorSegundos);
    const hora = Math.floor(tempoPorHoraEmsegundos / horaPorSegundos) % 24;
    const minutos =
      Math.floor(tempoPorHoraEmsegundos / minutosPorSegundos) % 60;
    const segundos = tempoPorHoraEmsegundos % 60;

    //Pegando a primeira hora
    if (hora === 0 && minutos > 0 && minutos <= 60) {
      console.log("Minutos");
      custoTotal = custoPrimeiraHora;
    }

    //Pegando o custo total de horas
    if (hora > 0) {
      //Se no periodo das horas for maior que zero e minutos estiver maior que 0 e menor igual a 60
      // deve - se adicionar mais uma hora para o calculo final
      let custoExtraminutos = 0;
      let custoHoras = 0;
      if (minutos > 0 && minutos <= 60) {
        console.log("calculo valor extra de minutos");
        custoExtraminutos = custoPorHora;
      }

      custoHoras = custoPorHora * hora;
      custoTotal = custoHoras + custoExtraminutos;
    }

    document.querySelector(".custo_total").innerHTML = formaValorMoeda(
      custoTotal + custoTaxaEntrada
    );
  }
}

function formaValorMoeda(value) {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}
