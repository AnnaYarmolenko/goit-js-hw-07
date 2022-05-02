import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const galleryMarcup = galleryItems.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
}).join("");

galleryEl.insertAdjacentHTML("afterbegin", galleryMarcup);

console.log(document.querySelector(".gallery__image").alt)

let lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt", captionPosition:"bottom", captionDelay:250});