const champ1 = document.getElementById("champ1");
const champ2 = document.getElementById("champ2");

const calcul = document.getElementById("calcul");
const result = document.getElementById("result");

console.log(champ1);
console.log(operator);
console.log(calcul);
console.log(champ2);
console.log(result);

calcul.addEventListener("click", function() {
  const number1 = parseFloat(champ1.value);

  const number2 = parseFloat(champ2.value);

  const operator = document.getElementById("operator").value;
  
  if (operator === '+') {
    result.textContent = number1 + number2
  } else if (operator === '-') {
    result.textContent = number1 - number2
  } else if (operator === '*') {
    result.textContent = number1 * number2
  } else if (operator === '/') {
    result.textContent = number1 / number2
  }
});

