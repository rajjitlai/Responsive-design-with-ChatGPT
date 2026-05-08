document.addEventListener("DOMContentLoaded", function () {

  /* ===== Mobile Nav Toggle ===== */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const navOverlay = document.getElementById("navOverlay");

  function openNav() {
    navToggle.classList.add("open");
    navLinks.classList.add("open");
    navOverlay.classList.add("active");
    document.body.classList.add("nav-open");
  }

  function closeNav() {
    navToggle.classList.remove("open");
    navLinks.classList.remove("open");
    navOverlay.classList.remove("active");
    document.body.classList.remove("nav-open");
  }

  navToggle.addEventListener("click", function () {
    if (navLinks.classList.contains("open")) {
      closeNav();
    } else {
      openNav();
    }
  });

  navOverlay.addEventListener("click", closeNav);

  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeNav);
  });

  /* ===== Navbar Scroll Effect ===== */
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  /* ===== Read More / Read Less ===== */
  const readMoreBtn = document.getElementById("read-more-btn");
  const moreContent = document.getElementById("more-content");

  readMoreBtn.addEventListener("click", function () {
    const isOpen = moreContent.classList.toggle("open");
    readMoreBtn.textContent = isOpen ? "Read Less" : "Read More";
  });

  /* ===== Image Carousel ===== */
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let current = 0;
  let autoPlay;

  function goToSlide(index) {
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");
    current = (index + slides.length) % slides.length;
    slides[current].classList.add("active");
    dots[current].classList.add("active");
  }

  function nextSlide() {
    goToSlide(current + 1);
  }

  function startAutoPlay() {
    autoPlay = setInterval(nextSlide, 4000);
  }

  function resetAutoPlay() {
    clearInterval(autoPlay);
    startAutoPlay();
  }

  prevBtn.addEventListener("click", function () {
    goToSlide(current - 1);
    resetAutoPlay();
  });

  nextBtn.addEventListener("click", function () {
    goToSlide(current + 1);
    resetAutoPlay();
  });

  dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
      goToSlide(parseInt(this.dataset.index));
      resetAutoPlay();
    });
  });

  const carousel = document.querySelector(".carousel");
  carousel.addEventListener("mouseenter", function () {
    clearInterval(autoPlay);
  });
  carousel.addEventListener("mouseleave", startAutoPlay);

  startAutoPlay();

  /* ===== Touch Swipe for Carousel ===== */
  let touchStartX = 0;
  let touchEndX = 0;
  const swipeThreshold = 50;

  carousel.addEventListener("touchstart", function (e) {
    touchStartX = e.changedTouches[0].screenX;
    clearInterval(autoPlay);
  }, { passive: true });

  carousel.addEventListener("touchend", function (e) {
    touchEndX = e.changedTouches[0].screenX;
    var diff = touchStartX - touchEndX;
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        goToSlide(current + 1);
      } else {
        goToSlide(current - 1);
      }
    }
    resetAutoPlay();
  });

  /* ===== Scroll Reveal ===== */
  const reveals = document.querySelectorAll(".reveal");

  function checkReveal() {
    reveals.forEach(function (el) {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 80) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkReveal);
  checkReveal();

});
