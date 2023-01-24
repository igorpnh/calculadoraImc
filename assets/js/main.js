//capturar evento de submit do formulário
const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  //previnir o evendo de submit
  e.preventDefault();

  //capturando o input como um todo
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  //caputurando o valor do input, convertendo para um Number
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  //verificação para caso os valores retornarem como NaN (false)
  if (!peso) {
    setResultado("Peso inválido", false);
    //para parar o código caso o peso volte como false
    return;
  }

  if (!altura) {
    setResultado("Altura inválida", false);
    //para parar o código caso o peso volte como false
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);
  const msg = `Seu IMC é ${imc} (${nivelImc})`;
  setResultado(msg, true);
});

function getNivelImc(imc) {
  const nivel = [
    "Magreza",
    "Normal",
    "Sobrepeso",
    "Obesidade grau I",
    "Obesidade grau II",
    "Obesidade grau III",
  ];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

//calcula o IMC
function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function createParagrafo() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";

  const p = createParagrafo();
  if (isValid) {
    p.classList.add('paragrafo-resultado-valido')
  } else {
    p.classList.add('paragrafo-resultado-invalido')
  }
  p.innerHTML = msg;
  resultado.appendChild(p);
}
