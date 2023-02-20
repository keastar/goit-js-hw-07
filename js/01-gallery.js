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
function onGalleryContainerClick(event) {
    
    event.preventDefault();

    const isGalleryItemEl = event.target.classList.contains('gallery__image');
    if (!isGalleryItemEl) {
        return;
    }

    openCloseModalWin(event);
    
    // console.log(event.target.dataset.source);    
}
function openCloseModalWin(ev) {
    const instance = basicLightbox.create(
        `<img src = "${ev.target.dataset.source}" width="1280" height="720">
        `)
    instance.show();

    galleryContainer.addEventListener('keydown', (evn) => {
        if (evn.key === 'Escape') {
            instance.close();
        }
    });  
}
