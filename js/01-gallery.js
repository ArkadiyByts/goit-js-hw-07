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

//here I have some problems with original image link
for (const galeryItem of galeryItems) {
    galeryItem.classList.add("gallery__item")
    galeryItem.addEventListener('click', (event) => {
    event.preventDefault();
    basicLightbox.create(`<img width="1400" height="900" src='https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg'>`).show();
});
}


const galeryLinks = document.querySelectorAll("div > a");
console.log(galeryLinks);
for (const galeryLink of galeryLinks) {
    galeryLink.classList.add("gallery__link");
}

const galeryImages = document.querySelectorAll('img');
console.log(galeryImages);
for (const galeryImg of galeryImages) {
    galeryImg.classList.add("gallery__image");
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




