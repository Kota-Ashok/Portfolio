// Emerald Theme Scripts

const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Mobile Menu Toggle
menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Change icon logic could go here
});

// Close menu when link clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Glitch Effect randomizer (Optional)
const glitchText = document.querySelector('.highlight');
if (glitchText) {
    setInterval(() => {
        // Randomly adjust text shadow for glitch effect
        const r1 = Math.random() * 4 - 2;
        const r2 = Math.random() * 4 - 2;
        glitchText.style.textShadow = `${r1}px ${r2}px 0px rgba(0, 255, 65, 0.7)`;
    }, 200);
}
