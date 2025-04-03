document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelectorAll(".cause-hero__image").forEach((img) => {
      img.classList.add("show");
    });
  }, 300);

  document.querySelectorAll(".nav__links a").forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.add("nav__link--active");
    }
  });
});
