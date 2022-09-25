// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css"
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markupGallery = galleryItems
  .map(
    (el) => `<a class="gallery__item" href=${el.original}>
      <img
        class="gallery__image"
        src="${el.preview}"
        data-source=${el.original}
        alt=${el.description}
      />
    </a>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markupGallery);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});