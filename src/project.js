const carousel = document.getElementById("carousel");
const dots = document.querySelectorAll(".dot");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const likes = document.querySelectorAll(".like");

likes.forEach((like) => {
    like.addEventListener("click", () => {
        like.classList.toggle('text-white')
        like.classList.toggle('text-[#e0aa0f]')
    });
}
)

let index = 0;
const size = carousel.children.length;

let autoSlide;

function updateCarousel() {
    restartTimer()
    carousel.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot, i) => {
        dot.classList.toggle("bg-white", i === index);
        dot.classList.toggle("bg-gray-400", i !== index);
    });
}

function restartTimer() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        index = (index + 1) % size;
        updateCarousel();
    }, 5000);
}

next.addEventListener("click", () => {
    index = (index + 1) % size;
    updateCarousel();
});

prev.addEventListener("click", () => {
    index = (index - 1 + size) % size;
    updateCarousel();
});

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        index = i;
        updateCarousel();
    });
});

updateCarousel()


