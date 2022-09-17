import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

galleryRef.insertAdjacentHTML('afterbegin', greateMarcup(galleryItems));

galleryRef.addEventListener('click', onImageClick);

function greateMarcup(items) {
  return items
    .map(
      item => ` <li><a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a></li>`
    )
    .join('');
}

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;
  imageOpenClose(event);
}

function imageOpenClose(evt) {
  new SimpleLightbox('.gallery__item', {
    captionsData: 'alt',
    captionDelay: 250,
    // navText: ['prev', 'next'],
  });
}
