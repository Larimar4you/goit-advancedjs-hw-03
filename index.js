import{a as d,S as f,i}from"./assets/vendor-CIF6YjI2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",y=void 0;async function g(s){return(await d.get(m,{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const r=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:a,comments:u,downloads:p})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${n}">
              <img
                class="gallery-image"
                src="${o}"
                alt="${e}"
              />
            </a>
            <div class="info">
              <p><b>Likes</b><span>${t}</span></p>
              <p><b>Views</b><span>${a}</span></p>
              <p><b>Comments</b><span>${u}</span></p>
              <p><b>Downloads</b><span>${p}</span></p>
            </div>
          </li>
        `).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){c.innerHTML=""}function w(){l.classList.remove("is-hidden")}function S(){l.classList.add("is-hidden")}const P=document.querySelector(".form");P.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r){i.error({message:"Please enter your request",position:"topRight"});return}L(),w();try{const o=await g(r);if(o.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o.hits)}catch(o){console.error(o),i.error({message:"Something went wrong. Please try again!",position:"topRight"})}finally{S()}});
//# sourceMappingURL=index.js.map
