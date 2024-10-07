 // Add some interactivity to the bubbles
 document.querySelectorAll('.bubble').forEach(bubble => {
    bubble.addEventListener('mouseover', () => {
        bubble.style.transform = 'scale(1.2)';
        bubble.style.transition = 'transform 0.3s ease';
    });
    bubble.addEventListener('mouseout', () => {
        bubble.style.transform = 'scale(1)';
    });
});

// Simple carousel functionality for the dots
let currentDot = 0;
const dots = document.querySelectorAll('.dot');
setInterval(() => {
    dots[currentDot].classList.remove('active');
    currentDot = (currentDot + 1) % dots.length;
    dots[currentDot].classList.add('active');
}, 5000);
