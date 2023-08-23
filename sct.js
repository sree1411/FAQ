const toggle = document.querySelectorAll(".toggle");
toggle.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});