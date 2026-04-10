<script>
document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".testimonial-carousel");
    const items = document.querySelectorAll(".testimonial-square");

    // Clonar elementos para efecto infinito
    items.forEach(item => {
        const clone = item.cloneNode(true);
        carousel.appendChild(clone);
    });

    // Pausar animación al pasar el mouse
    carousel.addEventListener("mouseenter", () => {
        carousel.style.animationPlayState = "paused";
    });

    carousel.addEventListener("mouseleave", () => {
        carousel.style.animationPlayState = "running";
    });
});
</script>