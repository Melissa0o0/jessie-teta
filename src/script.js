document.querySelectorAll(".gallery .grid a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // prevents navigation
  });
});
