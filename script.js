// Stack Hack 2026 — small interactions

// FAQ accordion
document.querySelectorAll(".faq-trigger").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var item = btn.closest(".faq-item");
    item.classList.toggle("open");
  });
});
