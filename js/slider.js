document.addEventListener("DOMContentLoaded", function () {
    const slides = [
      "./public/images/slide1.png",
      "./public/images/slide2.png",
      "./public/images/slide3.png",
      "./public/images/slide4.png"
    ];
    
    const sliderImagesContainer = document.querySelector('.slider-images');
    const dotsContainer = document.querySelector('.dots');
  
    // Funkcja generująca slajdy i kropki
    function generateSlidesAndDots() {
      slides.forEach((slide, index) => {
        // Tworzymy elementy slajdów
        const img = document.createElement('img');
        img.src = slide;
        img.alt = `Obraz ${index + 1}`;
        img.classList.add('slider-image');
        sliderImagesContainer.appendChild(img);
        
        // Tworzymy kropki
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.setAttribute('data-index', index);
        dotsContainer.appendChild(dot);
      });
    }
  
    let currentIndex = 0;
  
    function updateSlider(index) {
      if (index < 0 || index >= slides.length) return;
  
      sliderImagesContainer.style.transform = `translateX(-${index * 103}%)`;
      const dots = document.querySelectorAll('.dot');
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
      currentIndex = index;
    }
  
    function showPrevSlide() {
      const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider(prevIndex);
    }
  
    function showNextSlide() {
      const nextIndex = (currentIndex + 1) % slides.length;
      updateSlider(nextIndex);
    }
  
    // Generowanie slajdów i kropek
    generateSlidesAndDots();
  
    // Obsługa kliknięć na kropki
    dotsContainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('dot')) {
        const index = parseInt(event.target.getAttribute('data-index'));
        updateSlider(index);
      }
    });
  
    // Obsługa automatycznego przesuwania
    setInterval(() => {
      showNextSlide();
    }, 5000);
  
    // Obsługa strzałek na klawiaturze
    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        showPrevSlide();
      } else if (event.key === 'ArrowRight') {
        showNextSlide();
      }
    });
  
    // Inicjalizacja slidera
    updateSlider(currentIndex);
  });
  