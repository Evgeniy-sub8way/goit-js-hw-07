const numberCategory = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${numberCategory.length}`);



const categories = Array.from(numberCategory);
categories.forEach(el => {
    const title = el.querySelector('h2').textContent;
    const numberLiCategory = el.querySelectorAll('ul > li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${numberLiCategory}`);
});

