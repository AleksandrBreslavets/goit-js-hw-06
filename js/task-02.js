const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listOfIngredients = document.querySelector("#ingredients");
const createElements = ingredients => {
   return ingredients.map(ingredient=> {
    const element = document.createElement("li");
    element.classList.add("item");
     element.textContent = ingredient;
     return element;
  }
  )
}
const listOfItems = createElements(ingredients);
listOfIngredients.append(...listOfItems)