// Lazy Loading, gallery discover page

let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }

/*number of visits*/
const visitsCount = document.querySelector("#visits");

// get the stored value in localStorage
let visits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (visits !== 0) {
	visitsCount.textContent = visits;
} else {
	visitsCount.textContent = `This is your first visit!`;
}

// increment the number of visits.
visits++;
// store the new number of visits value
localStorage.setItem("visits-ls", visits);

