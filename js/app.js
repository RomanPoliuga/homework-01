const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg",
    description: "Tulips",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2012/03/01/00/55/mountains-19948__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2012/03/01/00/55/mountains-19948_1280.jpg",
    description: "Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg",
    description: "Flowers",
  },
];
const galleryContainer = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".js-lightbox");
const lightboxImage = document.querySelector(".lightbox__image");
const closeBtn = document.querySelector('[data-action="close-lightbox"]');
const overlay = document.querySelector(".lightbox__overlay");

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
    )
    .join("");
}


galleryContainer.insertAdjacentHTML(
  "beforeend",
  createGalleryMarkup(galleryItems)
);


function openModal(src, alt) {
  lightbox.classList.add("is-open");
  lightboxImage.src = src;
  lightboxImage.alt = alt;
}


function closeModal() {
  lightbox.classList.remove("is-open");
  lightboxImage.src = "";
  lightboxImage.alt = "";
}


galleryContainer.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;

  const largeImageURL = e.target.dataset.source;
  const altText = e.target.alt;
  openModal(largeImageURL, altText);
});


closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);


window.addEventListener("keydown", (e) => {
  if (e.code === "Escape") closeModal();
});
