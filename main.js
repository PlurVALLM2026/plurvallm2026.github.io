(function () {
  var toggle = document.querySelector(".nav-toggle");
  var panel = document.getElementById("nav-panel");
  if (!toggle || !panel) return;

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    panel.hidden = !open;
  }

  toggle.addEventListener("click", function () {
    setOpen(panel.hidden);
  });

  panel.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  window.matchMedia("(min-width: 880px)").addEventListener("change", function (e) {
    if (e.matches) setOpen(false);
  });
})();
