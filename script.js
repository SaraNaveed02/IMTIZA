// slider
let slideIndex = 0;
const slides = document.querySelectorAll(".mysliders");
const dots = document.querySelectorAll(".dot");
const slideTime = 3000;

function showslides() {
    slides.forEach((slide) => (slide.style.display = "none"));
    dots.forEach((dot) => dot.classList.remove("active"));
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
    setTimeout(showslides, slideTime);
}
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        slideIndex - index;
        showslides();
    });
});

showslides();

// navbar scrolled

window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".nav-section");
    const hero = document.getElementById("hero");
    const heroHeight = hero.offsetTop;
    if (window.scrollY > heroHeight / 2) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// our pontentials
function countUp(element, start, end, speed, addPlus = false) {
    let current = start;
    const timer = setInterval(() => {
        const formatted = current.toLocaleString();
        element.textContent = addPlus ? formatted + "+" : formatted;
        if (current >= end) {
            clearInterval(timer);
        }
        current++;
    }, speed);
}

window.addEventListener("DOMContentLoaded", () => {
    // year :40 to 68
    const yearSpan = document.querySelector("#year span");
    countUp(yearSpan, 40, 68, 45, true);

    // stories: 15 to 32
    const storiesSpan = document.querySelector("#stories span");
    countUp(storiesSpan, 15, 32, 60);

    // brand 9000 to 10000
    const brandSpa = document.querySelector("#brand span");
    countUp(brandSpa, 9950, 10000, 30, true);

    // employees 13000 to 14000
    const employeesSpan = document.querySelector("#employees span");
    countUp(employeesSpan, 13950, 14000, 30, true);

    // cities 4 to 14
    const citiesSpan = document.querySelector("#cities span");
    countUp(citiesSpan, 4, 14, 70);

    // loyal customers

    const customersSpan = document.querySelector("#customers span");
    countUp(customersSpan, 999950, 1000000, 20, true);
});

document.querySelectorAll(".our-brand").forEach((section) => {
    const leftArrow = section.querySelector(".left-arrow");
    const rightArrow = section.querySelector(".right-arrow");
    const scrollContainer = section.querySelector(".brands");

    const scrollAmount = 300;

    leftArrow.addEventListener("click", () => {
        scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    rightArrow.addEventListener("click", () => {
        scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    // ⬇️ add auto scroll here:
    let direction = 1; // 1 = forward, -1 = backward
    setInterval(() => {
        // when we reach the end, reverse direction
        if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
            direction = -1;
        } else if (scrollContainer.scrollLeft <= 0) {
            direction = 1;
        }
        scrollContainer.scrollBy({ left: scrollAmount * direction, behavior: "smooth" });
    }, 3000); // every 3 seconds scroll
});



document.querySelectorAll(".gallery-section").forEach((section) => {
    const leftArrow = section.querySelector(".left-arrow");
    const rightArrow = section.querySelector(".right-arrow");
    const scrollContainer = section.querySelector(".gallery-wrapper"); // gallery container

    const scrollAmount = 300;

    leftArrow.addEventListener("click", () => {
        scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    rightArrow.addEventListener("click", () => {
        scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
});

  document.querySelectorAll('.dropdown').forEach(drop => {
    drop.addEventListener('mouseenter', () => {
      drop.classList.add('open');
    });
    drop.addEventListener('mouseleave', () => {
      drop.classList.remove('open');
    });
  });
