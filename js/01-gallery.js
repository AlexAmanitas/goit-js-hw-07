import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const instanceOptions ={
  onShow: (instance) => {
    document.onkeydown = function(evt) {
           console.log(evt.code)
       if (evt.code === 'Escape') instance.close();
    };
  },
}

galleryRef.insertAdjacentHTML('afterbegin', greateMarcup(galleryItems));

galleryRef.addEventListener('click', onImageClick);

function greateMarcup(items) {
  return items
    .map(
      item =>
        `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
    )
    .join('');
}

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;
  imageOpenClose(event);
}

function imageOpenClose(evt) {
  const instance = basicLightbox.create(`
	<img class= "original-img" src = '${evt.target.dataset.source}' width = '1280'>`,instanceOptions );
  instance.show();
 }
