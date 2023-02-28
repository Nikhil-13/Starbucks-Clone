const list = document.querySelectorAll(".toggle-icon");
list.forEach((ul) => {
  ul.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.parentElement.classList.toggle("active");
  });
});

const ham = document.querySelector(".hamburger");
ham.addEventListener("click", (e) => {
  e.target.parentElement.classList.toggle("active");
  document.querySelector(".navbar").classList.toggle("active");
});
