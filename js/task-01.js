const list = document.querySelector("#categories");
console.log(`Number of categories: ${[...list.children].length}`);
[...list.children].forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${[...category.lastElementChild.children].length}`);
});

