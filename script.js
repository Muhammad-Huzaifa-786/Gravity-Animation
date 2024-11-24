// script.js

document.addEventListener('DOMContentLoaded', () => {
    const gravityText = document.querySelector('.gravity-text');
    const icons = document.querySelectorAll('.icon');
  
    // Function to simulate fire-like gravity on elements
    function applyFireEffect(element) {
      const speed = Math.random() * 3 + 1; // Speed of fall
      const direction = Math.random() * 2 * Math.PI; // Random direction
      const offsetX = Math.cos(direction) * Math.random() * 100; // X axis movement
      const offsetY = Math.sin(direction) * Math.random() * 100; // Y axis movement
  
      element.style.transition = `transform ${speed}s ease, opacity 0.5s ease`;
      element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      element.style.opacity = '0.7';
    }
  
    // Apply fire effect to the text and icons
    gravityText.addEventListener('click', () => {
      applyFireEffect(gravityText);
    });
  
    icons.forEach(icon => {
      icon.addEventListener('click', () => {
        applyFireEffect(icon);
      });
    });
  });
  