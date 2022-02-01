// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galeryListEl = document.querySelector('.gallery');

const makeGalery = makeGaleryList(galleryItems);

function makeGaleryList(array) {
  return array
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href='${original}'>
        <img
          class="gallery__image"
          src='${preview}'
          alt='${description}'
          
        />
      </a>
    `;
    })
    .join('');
}

galeryListEl.insertAdjacentHTML('beforeend', makeGalery);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: `alt`,
  captionDelay: 250,
});
