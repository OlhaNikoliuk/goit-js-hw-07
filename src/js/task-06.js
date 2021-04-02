/**
 * Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
 * на правильное количество символов.
 * Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
 * Если введено подходящее количество, то border инпута становится зеленым, если
 * неправильное - красным.
 * Для добавления стилей, используй CSS-классы valid и invalid.
 */

const inputEl = document.querySelector('#validation-input')
inputEl.classList.add('invalid');

inputEl.addEventListener('blur', onInputSymbolNumbers);

function onInputSymbolNumbers(event) {
  const inputCurrentLength = Number(inputEl.dataset.length);
  event.currentTarget.value.length === inputCurrentLength ? inputEl.classList.replace('invalid', 'valid') : inputEl.classList.replace('valid', 'invalid')
}


