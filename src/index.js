/* =========================
   Menu toggle
========================= */
const nav = document.querySelector("nav");
const openBtn = document.getElementById("menu-toggle-open");
const closeBtn = document.querySelector(".close-btn");

function toggleMenu() {
  const isOpen = nav.classList.toggle("open");
  openBtn.setAttribute("aria-expanded", isOpen);
}

openBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    openBtn.setAttribute("aria-expanded", "false");
  });
});


/* =========================
  Scroll top
========================= */
let topBtn = document.querySelector(".top-btn");

topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

window.onscroll = () => (topBtn.style.opacity = window.scrollY > 500 ? 1 : 0);

/* =========================
   Light theme
========================= */

function changeTheme() {
  let body = document.querySelector("body");
  if (body.classList.contains("light")) {
    body.classList.remove("light");
  } else {
    body.classList.add("light");
  }
}
let themeButton = document.querySelector(".slider");
themeButton.addEventListener("click", changeTheme);

/* =========================
   Typewriter (Hero subtitle)
========================= */

(function () {
  const el = document.getElementById("typewriter");
  if (!el) return;

  const text = "Junior Frontend / Full-stack developer";
  const speed = 80;
  let i = 0;

  function type() {
    if (i < text.length) {
      el.textContent = text.slice(0, i) + "|";
      i++;
      setTimeout(type, speed);
    } else {
      el.textContent = text;
    }
  }

  type();
})();

/* =========================
   Project TABS
========================= */

const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".project-card");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const filter = tab.dataset.filter;

    cards.forEach((card) => {
      const match = filter === "all" || card.dataset.category === filter;

      if (match) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

/* =========================
   Read more / less toggle
========================= */

document.querySelectorAll(".read-more-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const wrapper = btn.closest(".app-description");
    const shortText = wrapper.querySelector(".short-text");
    const fullText = wrapper.querySelector(".full-text");

    const isExpanded = btn.getAttribute("aria-expanded") === "true";

    shortText.style.display = isExpanded ? "inline" : "none";
    fullText.style.display = isExpanded ? "none" : "inline";

    btn.textContent = isExpanded ? "Read more" : "Read less";
    btn.setAttribute("aria-expanded", String(!isExpanded));
  });
});

/* =========================
   Scroll reveal
========================= */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => observer.observe(el));
