import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

const gallery = new simpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function renderImages(images) {
  images.forEach(image => {
    const markup = `
    <div class="image-card">
        <a href="${image.largeImageURL}" data-lightbox="gallery-item" data-title="${image.tags}">
            <img src="${image.webformatURL}" alt="${image.tags}">
        </a>
        <div class="image-info">
        <div class ="image-desc">
        <h2 class = "image-header">Likes:</h2>
        <p class="header-value"> ${image.likes}</p>
        </div>
         <div class ="image-desc">
        <h2 class = "image-header">Views:</h2>
        <p class="header-value"> ${image.views}</p>
        </div>
         <div class ="image-desc">
        <h2 class = "image-header">Comments:</h2>
        <p class="header-value"> ${image.comments}</p>
        </div>
         <div class ="image-desc">
        <h2 class = "image-header">${image.downloads}</h2>
        <p class="header-value"> ${image.downloads}</p>
        </div>
        </div>
    </div>
`;
    galleryEl.insertAdjacentHTML('beforeend', markup);
  });
  gallery.refresh();
}
