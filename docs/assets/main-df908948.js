(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();(()=>{const n=document.querySelector(".hamburger-js"),t=document.querySelector(".header__menu");function s(){n.classList.toggle("hamburger--active"),t.classList.toggle("header__menu--active"),t.classList.add("header__menu--close"),setTimeout(()=>{t.classList.remove("header__menu--close")},2e3)}function r(){n.classList.remove("hamburger--active"),t.classList.remove("header__menu--active"),setTimeout(()=>{t.classList.remove("header__menu--close")},600)}function e(c){c.target.classList.contains("menu__link")&&s()}function o(c){c.target!==n&&r()}t.addEventListener("click",e),n.addEventListener("click",s),document.addEventListener("click",o)})();document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".contacts-js"),t=n.querySelector(".contacts__description");n.addEventListener("click",()=>{t.style.display==="none"||t.style.display===""?(t.style.display="block",t.style.animation="fadeIn .3s forwards"):(t.style.animation="fadeOut .3s forwards",setTimeout(()=>{t.style.display="none"},1e3))})});document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".header__list--login"),t=document.querySelector(".modal__close-button"),s=document.querySelector(".modal__login"),r=document.querySelector(".modal__content--login"),e=document.body;n.addEventListener("click",()=>{console.log("hello"),s.style.display="block",e.style.overflow="hidden"}),t.addEventListener("click",()=>{s.style.display="none",e.style.overflow=""}),document.addEventListener("click",o=>{!r.contains(o.target)&&!n.contains(o.target)&&(s.style.display="none",e.style.overflow="")})});for(let n=1;n<6;n++)setTimeout(()=>{console.log("Hello")},n*2e3);
