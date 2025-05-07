// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Gallery image zoom modal
document.querySelectorAll(".gallery-images img").forEach(img => {
  img.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100vw";
    modal.style.height = "100vh";
    modal.style.backgroundColor = "rgba(0,0,0,0.8)";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.zIndex = "1000";
    modal.style.cursor = "pointer";

    const modalImg = document.createElement("img");
    modalImg.src = img.src;
    modalImg.style.maxWidth = "90%";
    modalImg.style.maxHeight = "90%";
    modalImg.style.borderRadius = "10px";
    modal.appendChild(modalImg);

    document.body.appendChild(modal);

    modal.addEventListener("click", () => {
      modal.remove();
    });
  });
});

// Join Us button functionality
const joinBtn = document.querySelector(".join button");
if (joinBtn) {
  joinBtn.addEventListener("click", () => {
    alert("Thank you for your interest in joining Namrata Social Group! We will contact you soon.");
    // Optional redirect:
    // window.location.href = "join-form.html";
  });
}

// Scroll to top on logo click
const logo = document.querySelector(".logo");
if (logo) {
  logo.style.cursor = "pointer";
  logo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Toggle navbar on small devices (hamburger menu)
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

if (menuIcon && navLinks) {
  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');

    // Optional: change hamburger icon to "X"
    if (navLinks.classList.contains('show')) {
      menuIcon.innerHTML = '&times;'; // X symbol
    } else {
      menuIcon.innerHTML = '&#9776;'; // ☰ symbol
    }
  });
}
