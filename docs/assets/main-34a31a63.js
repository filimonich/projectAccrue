(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();(()=>{const o=document.querySelector(".hamburger-js"),r=document.querySelector(".header__menu");function n(){o.classList.toggle("hamburger--active"),r.classList.toggle("header__menu--active"),r.classList.add("header__menu--close"),setTimeout(()=>{r.classList.remove("header__menu--close")},2e3)}function i(){o.classList.remove("hamburger--active"),r.classList.remove("header__menu--active"),setTimeout(()=>{r.classList.remove("header__menu--close")},600)}function e(s){s.target.classList.contains("menu__link")&&n()}function t(s){s.target!==o&&i()}r.addEventListener("click",e),o.addEventListener("click",n),document.addEventListener("click",t)})();for(let o=1;o<6;o++)setTimeout(()=>{console.log("Hello")},o*2e3);