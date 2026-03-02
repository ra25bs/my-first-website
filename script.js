document.addEventListener("DOMContentLoaded", () => {

  // ============================
  // NAVIGATION SECTION
  // ============================

  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  const dropdownLinks = document.querySelectorAll(".has-dropdown > a");

  // Hamburger toggle
  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      menu.classList.toggle("active");

      // Close all dropdowns if menu is closed
      if (!menu.classList.contains("active")) {
        document.querySelectorAll(".has-dropdown").forEach(li => li.classList.remove("open"));
      }
    });
  }

  // Mobile dropdown toggle
  dropdownLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        const parent = link.parentElement;

        // Close other dropdowns
        document.querySelectorAll(".has-dropdown").forEach(li => {
          if (li !== parent) li.classList.remove("open");
        });

        // Toggle this dropdown
        parent.classList.toggle("open");

        // Prevent default only if has dropdown
        if (parent.querySelector(".dropdown")) e.preventDefault();
      }
    });
  });

  // Auto-close menu & dropdowns on desktop resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      menu.classList.remove("active");
      hamburger.classList.remove("active");
      document.querySelectorAll(".has-dropdown").forEach(li => li.classList.remove("open"));
    }
  });

  // ============================
  // MODAL SECTION (SAFE)
  // ============================

  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("bigImage");
  const closeBtn = document.querySelector(".closeBtn");
  const nextBtn = document.querySelector(".nextBtn");
  const prevBtn = document.querySelector(".prevBtn");
  const images = document.querySelectorAll(".media-gallery img");

  let currentIndex = 0;

  if (modal && modalImg && images.length > 0) {
    images.forEach((img, index) => {
      img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
        currentIndex = index;
      });
    });

    if (closeBtn) closeBtn.addEventListener("click", () => modal.style.display = "none");
    if (nextBtn) nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      modalImg.src = images[currentIndex].src;
    });
    if (prevBtn) prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      modalImg.src = images[currentIndex].src;
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });
  }

});