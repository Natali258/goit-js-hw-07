import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /></a></li>`;
  })
  .join("");

const galleryUl = document.querySelector(".gallery");
galleryUl.insertAdjacentHTML("beforeend", list);

const galleryActive = (evt) => {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") return;
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="1200" height="auto">
`);

  instance.show();
};

galleryUl.addEventListener("click", galleryActive);
