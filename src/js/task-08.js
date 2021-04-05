/**
 * Напиши скрипт создания и очистки коллекции элементов. 
 * Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
 * после чего рендерится коллекция. 
 * При нажатии на кнопку Очистить, коллекция элементов очищается.
 * 
 * Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
 * Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
 * 
 * Каждый созданный div:
 * Имеет случайный rgb цвет фона
 * Размеры самого первого div - 30px на 30px
 * Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
 * Создай функцию destroyBoxes(), которая очищает div#boxes.
 */

const inputRef = document.querySelector('input');
const createBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxesContainer)
destroyBtn.addEventListener('click', destroyBoxes);


function randomColorMaker() {
  const r = Math.floor(Math.random() * (256));
  const g = Math.floor(Math.random() * (256));
  const b = Math.floor(Math.random() * (256));
  const randomColor = `rgb(${r}, ${g}, ${b})`
  return randomColor;

}

function createBoxesContainer(amount) {

  amount = inputRef.value;
  let myBoxes = [];

  for (let i = 0; i <= amount - 1; i += 1) {
    const newBox = document.createElement('div');
    const newBoxSize = 30 + 10 * i
    newBox.style.width = `${newBoxSize}px`;
    newBox.style.height = `${newBoxSize}px`;
    newBox.style.backgroundColor = randomColorMaker();

    myBoxes.push(newBox);
  }

  boxesContainer.append(...myBoxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}