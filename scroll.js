const container = document.querySelector('.photo-gallery');
const content = document.querySelector('.scroll-container');

container.addEventListener('scroll', () => {
  const scrollPercentage = (container.scrollLeft / (content.offsetWidth - container.offsetWidth)) * 100;
  content.style.transform = `translateX(-${scrollPercentage}%)`;

  const images = Array.from(content.querySelectorAll('img'));
  images.forEach((img) => {
    const imgOffset = img.offsetLeft - container.scrollLeft;
    const imgOpacity = 1 - Math.abs(imgOffset) / container.offsetWidth;
    img.style.opacity = imgOpacity;
  });
});