const side = document.querySelector(".ham");
const sidebar = document.querySelector(".sidebar");
const close = document.querySelector(".close");
side.addEventListener("click", () => {
  sidebar.classList.add('show');
});
close.addEventListener("click", () => {
  sidebar.classList.remove('show');
});