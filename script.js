// Select elements
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('nav ul.menu');
const dropdownItems = document.querySelectorAll('.has-dropdown > a');

// Hamburger toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('open');
});

// Mobile dropdown toggle
dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            const parentLi = item.parentElement;

            // Close other active dropdowns
            document.querySelectorAll('nav ul.menu li.has-dropdown').forEach(li => {
                if (li !== parentLi) li.classList.remove('active');
            });

            // Toggle current dropdown
            parentLi.classList.toggle('active');

            // Prevent default link behavior if it has a dropdown
            if (parentLi.querySelector('.dropdown')) {
                e.preventDefault();
            }
        }
    });
});

// Auto-close menu and dropdowns when resizing to desktop
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        menu.classList.remove("open");
        hamburger.classList.remove("active");

        document.querySelectorAll("nav ul.menu li.has-dropdown").forEach(item => {
            item.classList.remove("active");
        });
    }
});// Select elements
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("bigImage");
const closeBtn = document.querySelector(".closeBtn");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

// Get ALL gallery images
const images = document.querySelectorAll(".media-gallery img");

let currentIndex = 0;

// Open modal when image is clicked
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
    currentIndex = index;
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Next image
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex].src;
});

// Previous image
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
});

// Close when clicking outside image
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
  
});



