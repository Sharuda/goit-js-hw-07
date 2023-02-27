import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainerEl = document.querySelector('.gallery');

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainerEl.addEventListener('click', handlerClickImgGallery);

galleryContainerEl.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}" target="_blank">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

function handlerClickImgGallery(event) {
  event.preventDefault();

  const valueImgLarge = event.target.dataset.source;
  if (!valueImgLarge) {
    return;
  }
  const instance = basicLightbox.create(
    `
		<img src="${valueImgLarge}" width="1280" height="auto"/>
        `,
    {
      onShow: instance => {
        window.addEventListener('keydown', handlerKeyEsc);
      },
      onClose: instance => {
        window.removeEventListener('keydown', handlerKeyEsc);
      },
    },
  );

  instance.show();

  function handlerKeyEsc(event) {
    if (event.code !== 'Escape') {
      return;
    }
    instance.close();
  }
}
