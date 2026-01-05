// Get the element - scroll to top
let topBtn = document.querySelector(".top-btn");

topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

window.onscroll = () => (topBtn.style.opacity = window.scrollY > 500 ? 1 : 0);

// Dark theme function

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

(function (){
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
   }else {
    el.textContent = text;
   }
 }

 type();

})();

/* =========================
   Project TABS
========================= */
const tabs = document.querySelectorAll(".tab");
const cards =  document.querySelectorAll(".project-card");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const filter = tab.dataset.filter;

    cards.forEach((card) => {
      const match =
      filter === "all" || card.dataset.category === filter;
      card.style.display = match ? "block" : "none";
    });
  });
});