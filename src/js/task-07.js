/**
 * Напиши скрипт, который реагирует на изменение значения input#font-size-control
 * (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size.
 * В результате при перетаскивании ползунка будет меняться размер текста.
 */

const fontSizeControl = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

fontSizeControl.addEventListener('input', onInputChange)


function onInputChange(event) {
  const fontSizeValue = event.currentTarget.value
  textRef.style.fontSize = `${fontSizeValue}px`;
}