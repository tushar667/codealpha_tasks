const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const boxImg = document.getElementById("boxImg");

function filterImages(category) {
  images.forEach(img => {
    if (category === "all" || img.dataset.category === category) {
      img.style.display = "inline";
    } else {
      img.style.display = "none";
    }
  });
}

function openBox(img) {
  boxImg.src = img.src;
  lightbox.style.display = "block";
}

function closeBox() {
  lightbox.style.display = "none";
}
