import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createImageItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);

function createImageItemsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>
        `;
        })
        .join('');
}
    //    console.log(createImageItemsMarkup(galleryItems));


function onGalleryContainerClick(event) {
    event.preventDefault();
    const isGalleryItemEl = event.target.classList.contains('gallery__image');
    if (!isGalleryItemEl) {
        return;
    }
    const instance = basicLightbox.create(`
    <img src = "${event.target.dataset.source}" width="1280" height="720">
`)

instance.show()
    // console.log(event.target.dataset.source);
    
}