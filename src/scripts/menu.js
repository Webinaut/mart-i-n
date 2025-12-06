const menuToggle = document.getElementById("button-open");
const menuClose = document.getElementById("button-close");

const mobileMenu = document.getElementById("mobileMenu");
const menuLinks = document.querySelectorAll(".menu-link");

function openMenu() {
  mobileMenu.classList.add("open");
}

function closeMenu() {
  mobileMenu.classList.remove("open");
}

function toggleMenu() {
  if (mobileMenu.classList.contains("open")) {
    closeMenu();
  } else {
    openMenu();
  }
}

menuToggle.addEventListener("click", toggleMenu);
menuClose.addEventListener("click", toggleMenu);

mobileMenu.addEventListener("click", (event) => {
  if (event.target.closest(".menu-link")) {
    closeMenu();
  }
});
