// Reveal animation on scroll
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const revealSection = () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", revealSection);
  revealSection(); // Trigger on load
});

// You can add smooth scroll or form handling logic here if needed.
