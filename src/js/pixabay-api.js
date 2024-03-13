import Axios from 'axios';

const axios = Axios.create({
  baseURL: `https://pixabay.com/api/`,
  params: {
    key: '42822558-20d699dce07778b8a952c17c9',
  },
});

const loadElem = document.querySelector('.loader');

export async function fetchImages(query, userPage) {
  const params = {
    q: query,
    per_page: 15,
    page: userPage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  try {
    const res = await axios.get('', { params });
    return res.data;
  } catch (error) {
    throw new Error('Failed to fetch images');
  }
}

export function showLoader() {
  loadElem.classList.remove('hidden');
}

export function hideLoader() {
  loadElem.classList.add('hidden');
}
