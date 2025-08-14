// script.js

const navbar = document.getElementById('navbar');
const body = document.body;

// Define colors for each section
const sectionColors = {
  home: '#1abc9c',      // teal
  about: '#3498db',     // blue
  services: '#9b59b6',  // purple
  contact: '#e67e22'    // orange
};

// Observe sections
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        const color = sectionColors[sectionId];
        navbar.style.backgroundColor = color;
      }
    });
  },
  { threshold: 0.6 } // Trigger when 60% of section is visible
);

// Attach observer to each section
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Optional: body background color based on scroll depth
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = scrollY / maxScroll;

  const red = Math.floor(255 - scrollPercent * 100);
  const green = Math.floor(255 - scrollPercent * 150);
  const blue = Math.floor(255 - scrollPercent * 200);

  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
