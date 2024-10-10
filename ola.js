// <!-- um select que cria opções com os dados e coloca eles em um vetor e depois faz operações com os dados do array -->
const inputNum = document.querySelector("#num");
const button = document.querySelector("button");
const button2 = document.querySelector("#btnfim");
const select = document.querySelector("select");
function poeNoSelect() {
  let num = Number(inputNum.value);
  let opt = document.createElement("option");
  opt.innerText = num;
  select.appendChild(opt);
  inputNum.value = "";
}
button.addEventListener("click", poeNoSelect);
