var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 5,
        stretch: 10,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    }
});
