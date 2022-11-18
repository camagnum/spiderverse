function handleMouseEnter() {
    this.classList.add('card__hovered');
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
    this.classList.remove('card__hovered');
    document.body.id = '';
}

function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName('card');
    
    for (let index = 0; index < cardElements.length; index++) {
        const card = cardElements[index];
        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave",handleMouseLeave);
    }
}

function addEventListenerToChevrons(selectedChevron) {
    
    let newActiveButtonIndex;
    const selectedItems = document.getElementsByClassName('controller__button');
    const activeButton = document.querySelector('.controller__button--active');
    
    const chevronLeft = selectedChevron.classList.contains('left');
    const onLeft = (activeButton.id === '1');
    const onRight = (activeButton.id === '4');
    
    if (chevronLeft && !onLeft) {

        newActiveButtonIndex = Number(activeButton.id) - 2;
        const selectedItem = selectedItems[newActiveButtonIndex];
        activeButton.classList.remove('controller__button--active');
        selectedItems[newActiveButtonIndex].classList.add('controller__button--active');

        carouselSpin(selectedItem.id);

    } else if (!chevronLeft && !onRight) {
    
        newActiveButtonIndex = Number(activeButton.id);
        const selectedItem = selectedItems[newActiveButtonIndex];
        activeButton.classList.remove('controller__button--active');
        selectedItems[newActiveButtonIndex].classList.add('controller__button--active');

        carouselSpin(selectedItem.id);
    }
}


function selectCarouselItem (e) {
    
    const selectedItems = document.getElementsByClassName('controller__button');
    
    for (let i = 0; i < selectedItems.length; i++) {
        
        const selectedItem = selectedItems[i];
        selectedItem.addEventListener('click',function() {
            const activeButton = document.querySelector('.controller__button--active');
            activeButton.classList.remove('controller__button--active');
            selectedItem.classList.add('controller__button--active');

            carouselSpin(selectedItem.id);
        })
    }
}

function carouselSpin(selectedItemId) {

    const carousel = document.querySelector('.cards-carousel');
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYDeg = -90 * (Number(selectedItemId) - 1);
    const newTransform = transform.replace(rotateY[1],`${rotateYDeg}deg`);
    carousel.style.transform = newTransform;

}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);
document.addEventListener("DOMContentLoaded",selectCarouselItem);