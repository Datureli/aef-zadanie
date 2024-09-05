document.addEventListener("DOMContentLoaded", function () {
    const sliderImagesContainer = document.querySelector('.slider-images');
    const dotsContainer = document.querySelector('.dots');
  
    const images = [
      './public/images/slide1.png',
      './public/images/slide2.png',
      './public/images/slide3.png',
      './public/images/slide4.png'
    ];
  
    // Dodajemy obrazy do kontenera
    images.forEach((image, index) => {
      const imgElement = document.createElement('img');
      imgElement.src = image;
      imgElement.alt = `Obraz ${index + 1}`;
      imgElement.classList.add('slider-image');
      sliderImagesContainer.appendChild(imgElement);
  
      // Tworzymy kropki
      const dotElement = document.createElement('div');
      dotElement.classList.add('dot');
      dotElement.dataset.index = index;
  
      if (index === 0) {
        dotElement.classList.add('active');
      }
  
      dotsContainer.appendChild(dotElement);
    });
  
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
  
    function updateSlider(index) {
      if (index < 0 || index >= dots.length) return;
  
      sliderImagesContainer.style.transform = `translateX(-${index * 103}%)`;
      dots.forEach((dot) => dot.classList.remove('active'));
      dots[index].classList.add('active');
      currentIndex = index;
    }
  
    // Dodaj event listener do kropek
    dots.forEach((dot) => {
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
  