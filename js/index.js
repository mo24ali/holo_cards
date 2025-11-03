
const topCard = document.querySelector('.top-card');

document.querySelector('.deck').addEventListener('mouseenter', () => {
    topCard.style.transform = 'translateX(60px) rotate(10deg) scale(1.05)';
});

document.querySelector('.deck').addEventListener('mouseleave', () => {
    topCard.style.transform = 'translateX(0) rotate(0deg) scale(1)';
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
