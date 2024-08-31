// slider.js
document.addEventListener("DOMContentLoaded", function () {
    const sliderImages = document.querySelector('.slider-images');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function updateSlider(index) {
        if (index < 0 || index >= dots.length) return;

        sliderImages.style.transform = `translateX(-${index * 103}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        currentIndex = index;
    }

    // Dodaj event listener do kropek
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'));
            updateSlider(index);
        });
    });

    // Automatyczne przesuwanie co 5 sekund
    setInterval(() => {
        const nextIndex = (currentIndex + 1) % dots.length;
        updateSlider(nextIndex);
    }, 5000);

    // Inicjalna aktualizacja slidera
    updateSlider(currentIndex);
});
