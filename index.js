// Getting Elements
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const aboutMe = document.querySelector(".about");
const contactMe = document.querySelector(".contact");
const portfolio = document.querySelector(".portfolio");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

aboutMe.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

contactMe.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

portfolio.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
