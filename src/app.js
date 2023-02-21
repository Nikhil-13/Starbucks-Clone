const list = document.querySelectorAll(".toggle-icon");
list.forEach((ul) => {
  ul.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.parentElement.classList.toggle("active");
  });
});
