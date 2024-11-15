//Alerta de boas vindas ao jogo do numero secreto
alert("Seja bem vindo ao jogo do número secreto");

let numeroMaximo = parseInt(Math.random() * 50 + 1);

//Número secreto
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

let chute = 0;
let tentativas = 1;
alert(numeroSecreto);
while (chute != numeroSecreto) {
  //Pede ao usuario um chute do numero secreto
  chute = prompt(`digite um numero de 1 a ${numeroMaximo}`);
  
  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O numero secreto é menor que ${chute}`);
    } else {
      alert(`O numero secreto é maior que ${chute}`);
    }
    //tentativas = tentativas + 1
    tentativas++;
  }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(
    `Isso ai, você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`
  );

