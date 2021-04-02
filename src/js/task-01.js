/* 
Напиши скрипт, который выполнит следующие операции.
Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов
li.item. Получится 'В списке 3 категории.'.


Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль
текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных
в него элементов li).
Например для первой категории получится:
Категория: Животные
Количество элементов: 4
*/

const categoriesList = document.querySelector('#categories');
const categoriesItems = document.querySelectorAll('.item');

const listDescription = () => {
  console.log(`В списке ${categoriesItems.length} категории.`)

  for (const item of categoriesItems) {

    const itemTitle = item.querySelector('h2');
    const itemLength = item.querySelectorAll('li');

    console.log(`Категория: ${itemTitle.textContent}\nКоличество элементов: ${itemLength.length}`);
  }
}

listDescription(categoriesList);


