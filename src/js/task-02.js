/*
 * Напиши скрипт, который для каждого элемента массива ingredients 
 * создаст отдельный li, после чего вставит все li за одну операцию в 
 * список ul.ingredients. Для создания DOM-узлов используй document.createElement().
 */


const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

// ingredients.map(element => {
//   const elementsList = document.createElement('li');
//   elementsList.textContent = element;
//   ingredientsList.appendChild(elementsList);
// });


function createIngredientsList(ingredients) {
  return ingredients.map(ingredient => {
    const ingredientEl = document.createElement('li');
    ingredientEl.textContent = ingredient;

    return ingredientEl;
  });
}

const ingredientList = createIngredientsList(ingredients);
ingredientsList.append(...ingredientList);
