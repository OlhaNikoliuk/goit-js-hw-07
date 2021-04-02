/**
 * Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
 * подставляет его текущее значение в span#name-output. Если инпут пустой, в спане
 * должна отображаться строка 'незнакомец'.
 */


const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output')


input.addEventListener('input', onInputChange)

function onInputChange(event) {

  if (event.currentTarget.value === '') {
    nameOutput.textContent = 'незнакомец'
  } else {
    nameOutput.textContent = event.currentTarget.value;
  }

  console.log(event.currentTarget.value)
}
