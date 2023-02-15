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
console.log(createImageItemsMarkup(galleryItems));

function onGalleryContainerClick(event) {
    if (!event.target.classList.contains('gallery__item')) {
        return;
    }
    console.log(event.target);
    
}