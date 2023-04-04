import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Create image frame
const smallImg = galleryItems
  .map((image) => `<div class="gallery__item">
      <a class="gallery__link" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" 
          data-source="${image.original}"
          alt="${image.description}"></a></div>`)
  .join("");

// Add images to div
const galleryList = document.querySelector("div");
console.log(galleryList);
galleryList.insertAdjacentHTML('afterbegin', smallImg);

// List items
const galleryDivs = galleryList.children;
console.log(galleryDivs);

// Add classes to item and lightbox modal
for (const galleryItem of galleryDivs) {
  galleryItem.addEventListener('click', (event) => {
    event.preventDefault();
    
    const lightbox = basicLightbox.create(`
      <img src="${event.target.dataset.source}">
    `);
    lightbox.show();

    // Add event listener for "keydown" event on document object
    const closeLightboxOnEscape = (event) => {
      if (event.key === "Escape") {
        lightbox.close();
        document.removeEventListener("keydown", closeLightboxOnEscape);
      }
    };
    document.addEventListener("keydown", closeLightboxOnEscape);
  });
}

