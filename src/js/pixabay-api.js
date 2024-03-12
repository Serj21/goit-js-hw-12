import Axios from 'axios';

const axios = Axios.create({
  BASE_URL: `https://pixabay.com/api/`,
  params: {
    key: '42822558-20d699dce07778b8a952c17c9',
  },
});

// const apiKey = '42822558-20d699dce07778b8a952c17c9';
const loadElem = document.querySelector('.loader');

export async function fetchImages(query, userPage) {
  //   const BASE_URL = `https://pixabay.com/api/`;
  const params = {
    // key: apiKey,
    q: query,
    per_page: 15,
    page: userPage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  //   const url = `${BASE_URL}?${params}`;

  //   return fetch(url)
  //     .then(res => {
  //       if (!res.ok) {
  //         throw new Error('Failed to fetch images');
  //       }
  //       return res.json();
  //     })
  //     .then(data => data.hits)
  //     .catch(error => {
  //       throw new Error('Failed to fetch images');
  //     });

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
// export async function getArticles(query, userPage) {
//   const params = {
//     q: query,
//     per_page: 10,
//     page: userPage,
//   };

//   const response = await axios.get('', { params });
//   return response.data;

// }
