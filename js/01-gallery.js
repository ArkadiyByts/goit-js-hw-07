import { galleryItems } from './gallery-items.js';
// Change code below this line

 console.log(galleryItems);

const smallImg = galleryItems
    .map((image) => `<div><a href='${image.original}'><img src='${image.preview}' 
    data-source='${image.original}'
    alt='${image.description}'/></a></div>`)
    .join("  ");

const galleryList = document.querySelector("div");
console.log(galleryList);
galleryList.insertAdjacentHTML('afterbegin', smallImg);

const galeryItems = galleryList.children;
console.log(galeryItems);
for (const galeryItem of galeryItems) {
    galeryItem.classList.add("gallery__item")
}

console.log();
// const imgLinks = document.querySelectorAll("a");
// for (const link of imgLinks) {
//     link.classList
//     .add("gallery__link");
// };

// const images = document.querySelectorAll("img");
// for (const image of images) {
//     image.classList
//     .add("gallery__image");
// };




