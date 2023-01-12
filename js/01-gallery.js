import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const smallImg = galleryItems
    .map((image) => `<img src='${image.preview}' 
    alt='${image.description}'>`)
    .join("  ");

const galleryList = document.querySelector("div");

galleryList.insertAdjacentHTML('afterbegin', smallImg);

const images = document.querySelector("img");
images.classList.add('gallery__item');
