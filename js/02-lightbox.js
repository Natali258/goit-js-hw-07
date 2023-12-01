import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" /></a></li>`;
  })
  .join("");

const galleryUl = document.querySelector(".gallery");
galleryUl.insertAdjacentHTML("beforeend", list);

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
