  let currentSlide = 0;
  const slides = document.querySelectorAll(".slides img");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Initialize first image
  showSlide(currentSlide);

  // Change every 2 seconds
  setInterval(nextSlide, 2000);

