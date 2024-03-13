import{A as E,s as b,i as a}from"./assets/vendor-f41429aa.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const w=E.create({baseURL:"https://pixabay.com/api/",params:{key:"42822558-20d699dce07778b8a952c17c9"}}),f=document.querySelector(".loader");async function g(s,e){const o={q:s,per_page:15,page:e,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await w.get("",{params:o})).data}catch{throw new Error("Failed to fetch images")}}function p(){f.classList.remove("hidden")}function y(){f.classList.add("hidden")}const l=document.querySelector(".gallery"),q=new b(".gallery a",{captionsData:"alt",captionDelay:250});function M(){l.innerHTML=""}function v(s){s.forEach(e=>{const o=`
    <div class="image-card">
        <a href="${e.largeImageURL}" data-lightbox="gallery-item" data-title="${e.tags}">
            <img src="${e.webformatURL}" alt="${e.tags}">
        </a>
        <div class="image-info">
        <div class ="image-desc">
        <h2 class = "image-header">Likes:</h2>
        <p class="header-value"> ${e.likes}</p>
        </div>
         <div class ="image-desc">
        <h2 class = "image-header">Views:</h2>
        <p class="header-value"> ${e.views}</p>
        </div>
         <div class ="image-desc">
        <h2 class = "image-header">Comments:</h2>
        <p class="header-value"> ${e.comments}</p>
        </div>
         <div class ="image-desc">
        <h2 class = "image-header">${e.downloads}</h2>
        <p class="header-value"> ${e.downloads}</p>
        </div>
        </div>
    </div>
`;l.insertAdjacentHTML("beforeend",o)}),q.refresh()}console.log(5);const $=document.querySelector("#search-form"),O=document.querySelector("#search-input"),h=document.querySelector(".js-btn-load");let i,c,u;const S=15;h.addEventListener("click",P);a.settings({timeout:2e3,position:"topRight",transitionIn:"fadeInUp",transitionOut:"fadeOutDown"});$.addEventListener("submit",async s=>{if(s.preventDefault(),i=1,c=O.value.trim(),l.innerHTML="",m(),c===""){a.error({title:"Error",message:" Please enter image name"});return}p(),M();try{const e=await g(c,i);e.hits.length===0?(u=0,a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})):(v(e.hits),u=Math.ceil(e.totalHits/S)),y(),L()}catch{a.error({title:"Error",message:"Failed to fetch images"})}});async function P(s){i+=1,m(),p();try{const e=await g(c,i);v(e.hits),I()}catch{a.error({title:"Error",message:"Failed to fetch images"})}y(),L()}function L(){i>=u?(m(),a.error({title:"Error",message:"We're sorry, but you've reached the end of search results."})):x()}function m(){h.classList.add("hidden")}function x(){h.classList.remove("hidden")}function I(){const e=l.firstElementChild.getBoundingClientRect().height*2;scrollBy({behavior:"smooth",top:e})}
//# sourceMappingURL=commonHelpers.js.map
