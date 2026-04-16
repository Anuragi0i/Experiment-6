// ===============================
// Navbar Active Link Highlight
// ===============================
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", function () {
    navLinks.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// ===============================
// Smooth Scrolling
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// ===============================
// Scroll to Top Button
// ===============================
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.background = "#007bff";
scrollBtn.style.color = "#fff";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ===============================
// Blog Search Filter
// ===============================
const searchInput = document.createElement("input");
searchInput.placeholder = "Search posts...";
searchInput.classList.add("form-control", "mb-3");

const blogContainer = document.querySelector(".col-lg-8");
blogContainer.prepend(searchInput);

searchInput.addEventListener("keyup", function () {
  const value = this.value.toLowerCase();
  const posts = document.querySelectorAll(".card");

  posts.forEach(post => {
    const text = post.innerText.toLowerCase();
    post.style.display = text.includes(value) ? "block" : "none";
  });
});

// ===============================
// Dynamic Footer Year
// ===============================
const footer = document.querySelector("footer p");
const year = new Date().getFullYear();
footer.innerHTML = `&copy; ${year} MyBlog | All Rights Reserved`;

// ===============================
// Simple Scroll Animation
// ===============================
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const boxTop = card.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
      card.style.transition = "0.5s ease";
    } else {
      card.style.opacity = "0";
      card.style.transform = "translateY(50px)";
    }
  });
});

// ===============================
// Initial Animation Setup
// ===============================
cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
});
