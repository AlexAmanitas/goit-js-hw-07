import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
galleryRef.insertAdjacentHTML('afterbegin', greateMarcup(galleryItems));

new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});

function greateMarcup(items) {
  return items
    .map(
      item => ` <li><a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a></li>`
    )
    .join('');
}
