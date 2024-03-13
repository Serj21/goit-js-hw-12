import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages, showLoader, hideLoader } from './js/pixabay-api';
import { clearGallery, renderImages, galleryEl } from './js/render-functions';
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
  page = 1;
  query = inputEl.value.trim();
  galleryEl.innerHTML = '';
  hideLoadMoreBtn();
  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: ' Please enter image name',
    });
    return;
  }

  showLoader();
  clearGallery();

  try {
    const data = await fetchImages(query, page);
    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      renderImages(data.hits);
      maxPage = Math.ceil(data.totalHits / 15);
    }
    hideLoader();
    updateBtnStatus();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images',
    });
  }
});

async function onLoadMoreClick(e) {
  page += 1;
  hideLoadMoreBtn();
  showLoader();

  try {
    const data = await fetchImages(query, page);
    renderImages(data.hits);
    scroll();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images',
    });
  }
  hideLoader();
  updateBtnStatus();
}

function updateBtnStatus() {
  if (page >= maxPage) {
    hideLoadMoreBtn();
    iziToast.error({
      title: 'Error',
      message: "We're sorry, but you've reached the end of search results.",
    });
  } else {
    showLoadMoreBtn();
  }
}

function hideLoadMoreBtn() {
  btnLoadMore.classList.add('hidden');
}
function showLoadMoreBtn() {
  btnLoadMore.classList.remove('hidden');
}

function scroll() {
  const cardElem = galleryEl.firstElementChild;
  const height = cardElem.getBoundingClientRect().height * 2;
  scrollBy({
    behavior: 'smooth',
    top: height,
  });
}
