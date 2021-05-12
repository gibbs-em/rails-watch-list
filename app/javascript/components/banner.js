import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["watch", "love", "laugh at", "learn from"],
    typeSpeed: 80,
    loop: true
  });
}

export { loadDynamicBannerText };
