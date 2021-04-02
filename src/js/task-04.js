/**
 * Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
 */

const counterEl = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')
let counterValue = 0;

decrementBtn.addEventListener('click', onDecrBtnClick);
incrementBtn.addEventListener('click', onIncrBtnClick);

function onDecrBtnClick(event) {
  event.preventDefault()
  counterValue -= 1
  counterEl.textContent = counterValue;
}

function onIncrBtnClick(event) {
  event.preventDefault()
  counterValue += 1
  counterEl.textContent = counterValue;
}

