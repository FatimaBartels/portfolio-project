// Get the element - scroll to top
let topBtn = document.querySelector(".top-btn");

topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

window.onscroll = () => (topBtn.style.opacity = window.scrollY > 500 ? 1 : 0);

// Dark theme function

function changeTheme() {
  let body = document.querySelector("body");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}
let themeButton = document.querySelector(".slider");
themeButton.addEventListener("click", changeTheme);
