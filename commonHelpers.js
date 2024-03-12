import{s as d,i}from"./assets/vendor-8ce50246.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h="42822558-20d699dce07778b8a952c17c9",c=document.querySelector(".loader");function u(a){const r="https://pixabay.com/api/",s=new URLSearchParams({key:h,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}),o=`${r}?${s}`;return fetch(o).then(e=>{if(!e.ok)throw new Error("Failed to fetch images");return e.json()}).then(e=>e.hits).catch(e=>{throw new Error("Failed to fetch images")})}function m(){c.classList.remove("hidden")}function f(){c.classList.add("hidden")}const l=document.querySelector(".gallery"),p=new d(".gallery a",{captionsData:"alt",captionDelay:250});function g(){l.innerHTML=""}function y(a){a.forEach(r=>{const s=`
    <div class="image-card">
        <a href="${r.largeImageURL}" data-lightbox="gallery-item" data-title="${r.tags}">
            <img src="${r.webformatURL}" alt="${r.tags}">
        </a>
        <div class="image-info">
        <div class ="image-desc">
        <h2 class = "image-header">Likes:</h2>
        <p class="header-value"> ${r.likes}</p>
        </div>
         <div class ="image-desc">
        <h2 class = "image-header">Views:</h2>
        <p class="header-value"> ${r.views}</p>
        </div>
         <div class ="image-desc">
        <h2 class = "image-header">Comments:</h2>
        <p class="header-value"> ${r.comments}</p>
        </div>
         <div class ="image-desc">
        <h2 class = "image-header">${r.downloads}</h2>
        <p class="header-value"> ${r.downloads}</p>
        </div>
        </div>
    </div>
`;l.insertAdjacentHTML("beforeend",s)}),p.refresh()}const v=document.querySelector("#search-form"),L=document.querySelector("#search-input");i.settings({timeout:2e3,position:"topRight",transitionIn:"fadeInUp",transitionOut:"fadeOutDown"});v.addEventListener("submit",a=>{a.preventDefault();const r=L.value.trim();if(r===""){i.error({title:"Error",message:" Please enter image name"});return}m(),g(),u(r).then(s=>{s.length===0?i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):y(s),f()}).catch(s=>{i.error({title:"Error",message:"Failed to fetch images"})})});
//# sourceMappingURL=commonHelpers.js.map
