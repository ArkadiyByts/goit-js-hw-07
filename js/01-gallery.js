import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const smallImg = galleryItems
    .map((image) => `<a href='${image.original}'><img src='${image.preview}' 
    data-source='${image.original}'
    alt='${image.description}'/></a>`)
    .join("  ");

const galleryList = document.querySelector("div");
console.log(galleryList);
galleryList.insertAdjacentHTML('afterbegin', smallImg);

const imgLinksContainers = document.querySelectorAll("div");
for (const container of imgLinksContainers) {
    container.classList
    .add("gallery__item");
};
//below we remove class that was signed to main container earlier
galleryList.classList.remove("gallery__item");

const imgLinks = document.querySelectorAll("a");
for (const link of imgLinks) {
    link.classList
    .add("gallery__link");
};

const images = document.querySelectorAll("img");
for (const image of images) {
    image.classList
    .add("gallery__image");
};




console.log();