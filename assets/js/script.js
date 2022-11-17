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

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);



// TESTE

function selectCarouselItem (e) {

    const selectedItens = document.getElementsByClassName('controller__button');
    
    for (let i = 0; i < selectedItens.length; i++) {

        const selectedItem = selectedItens[i];
        selectedItem.addEventListener('click',function() {
            const activeButton = document.querySelector('.controller__button--active');
            activeButton.classList.remove('controller__button--active');
            
            selectedItem.classList.add('controller__button--active');

            const carousel = document.querySelector('.cards-carousel');
            const transform = carousel.style.transform;
            const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
            const rotateYDeg = -120 * (Number(selectedItem.id) - 1);
            const newTransform = transform.replace(rotateY[1],`${rotateYDeg}deg`);
            carousel.style.transform = newTransform;
        })
    }

}

document.addEventListener("DOMContentLoaded",selectCarouselItem);

// FIM TESTE