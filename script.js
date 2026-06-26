// Stack Hack 2026 — small interactions

// FAQ accordion
document.querySelectorAll(".faq-trigger").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var item = btn.closest(".faq-item");
    item.classList.toggle("open");
  });
});

// Scroll-reveal: fade + rise sections/cards into view as they enter the viewport
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Tag content wrappers + cards for reveal (skip the hero so it shows immediately).
  var targets = document.querySelectorAll(
    "section:not(#home) > div, #about article, #prizes article, " +
      "#sponsors .grid > div, #faq .faq-item, #contact a, footer > div"
  );

  if (reduce || !("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("reveal", "in"); });
    return;
  }

  // Stagger siblings slightly for a cascading feel.
  targets.forEach(function (el) {
    el.classList.add("reveal");
    var parent = el.parentElement;
    var i = Array.prototype.indexOf.call(parent.children, el);
    el.style.transitionDelay = Math.min(i, 6) * 70 + "ms";
  });

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  targets.forEach(function (el) { io.observe(el); });
})();
