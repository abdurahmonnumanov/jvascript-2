const steps = +promptVar('Введите число', /^\d+$/);
const indentSymbol = promptVar('Введите символ отступа', /^\S$/);
const finalSumbol = promptVar('Введите конечный символ', /^\S+$/);

for (let i=0; i<steps; i++) {
  const row = indentSymbol.repeat(i) + finalSumbol;
  output(row);
}

function output(str) {
  console.log(str);
  out.textContent += str + '\n';
}

function promptVar(title, regexp) {
  let val = null;
  do {
  	val = prompt(title);
  } while (!regexp.test(val));
  return val;
}