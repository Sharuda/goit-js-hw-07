import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const galleryContainerEl = document.querySelector('.gallery');

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainerEl.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href=${original}" target="_blank">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
</a></li>`;
    })
    .join('');
}


