// <!-- um select que cria opções com os dados e coloca eles em um vetor e depois faz operações com os dados do array -->
const inputNum = document.querySelector("#num");
const button = document.querySelector("button");
const button2 = document.querySelector("#btnfim");
const select = document.querySelector("select");
const main = document.querySelector("main");
let vetor = [];
const txt = document.createElement("div");
function validNum(l) {
  if (l.value.length !== 0 && !isNaN(l.value)) {
    return true;
  }
}
function poeNoSelect() {
  if (!validNum(inputNum)) {
    window.alert("Digite um numero");
  } else {
    let num = Number(inputNum.value);
    vetor.push(num);
    let opt = document.createElement("option");
    opt.innerText = `valor ${num} adicionado`;
    select.appendChild(opt);
    inputNum.value = "";
  }
}
function operacoesVetor() {
  if (select.options.length == 0) {
    window.alert("Nenhuma lista adicionada");
  } else {
    txt.innerHTML = `<p>a lista tem ${vetor.length} numeros</p>`;
    vetor.sort((a, b) => a - b);
    txt.innerHTML += `<p>o menor numero é: ${vetor[0]}</p>`;
    txt.innerHTML += `<p>o maior numero é: ${vetor[vetor.length - 1]}</p>`;
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
      soma += vetor[i];
    }
    txt.innerHTML += `<p>a soma dos numeros é ${soma} </p>`;
    txt.innerHTML += `<p>a média ponderada dos numeros é ${
      soma / vetor.length
    } </p>`;
    txt.innerHTML += "<p> " + vetor.join(", ") + "</p>";
    main.appendChild(txt);
  }
}

button.addEventListener("click", poeNoSelect);
button2.addEventListener("click", operacoesVetor);
// ao clicar no botao 2 mostrar o tamanho do vetor o menor valor e o maior valor
// a soma e a média
// 1° preciso colocar os dados em um array
