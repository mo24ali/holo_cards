
const topCard = document.querySelector('.top-card');

document.querySelector('.deck').addEventListener('mouseenter', () => {
    topCard.style.transform = 'translateX(60px) rotate(10deg) scale(1.05)';
});

document.querySelector('.deck').addEventListener('mouseleave', () => {
    topCard.style.transform = 'translateX(0) rotate(0deg) scale(1)';
});



new Swiper('.featured-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
    pagination: {
        el: '.featured-swiper .swiper-pagination',
        clickable: true,
    },
});

