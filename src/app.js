document.querySelectorAll(".list-head").forEach((ul) => {
  ul.addEventListener("click", (e) => {
    e.currentTarget.parentElement.classList.toggle("active");
  });
});

document.querySelector(".hamburger").addEventListener("click", (e) => {
  e.currentTarget.previousElementSibling.classList.toggle("active");
  e.currentTarget.classList.toggle("active");
});
