import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");

const galleryMarcup = galleryItems.map(({ preview, original, description }) => {
  return `<div class="gallery__item">
    <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
  </div>`
}).join("");

galleryEl.insertAdjacentHTML("afterbegin", galleryMarcup);

const galleryHandler = (event) => {
  event.preventDefault(); 
  if (event.target.nodeName !== "IMG") return;
   const originalUrl = event.target.dataset.source; 
  const instance = basicLightbox.create(`
            <img src="${originalUrl}" >
    `)
  instance.show((event) => {
    document.addEventListener("keydown", (event) => {
      if (event.code !== "Escape") return;
      instance.close()    
})
  });  
};
document.removeEventListener("keydown",()=>{});


galleryEl.addEventListener("click", galleryHandler);

