import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages, showLoader, hideLoader } from './js/pixabay-api';
import { clearGallery, renderImages } from './js/render-functions';
console.log(5);
const searchForm = document.querySelector('#search-form');
const inputEl = document.querySelector('#search-input');
const btnLoadMore = document.querySelector('.js-btn-load');

let page;
let query;
let maxPage;

btnLoadMore.addEventListener('click', onLoadMoreClick);

iziToast.settings({
  timeout: 2000,
  position: 'topRight',
  transitionIn: 'fadeInUp',
  transitionOut: 'fadeOutDown',
});

searchForm.addEventListener('submit', async e => {
  e.preventDefault();

  const searchTerm = inputEl.value.trim();
  if (searchTerm === '') {
    iziToast.error({
      title: 'Error',
      message: ' Please enter image name',
    });
    return;
  }

  showLoader();
  clearGallery();

  try {
    const data = await fetchImages(searchTerm);
    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      renderImages(data.hits);
    }
    hideLoader();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images',
    });
  }
});

async function onLoadMoreClick(e) {
  page += 1;
  showLoader();
  // try {
  //     const data = await
  // }
}
