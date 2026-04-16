(function () {
  var toggle = document.querySelector(".nav-toggle");
  var panel = document.getElementById("nav-panel");
  var header = document.querySelector(".site-header");
  if (!toggle || !panel || !header) return;

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    panel.hidden = !open;
  }

  setOpen(false);

  toggle.addEventListener("click", function () {
    setOpen(panel.hidden);
  });

  panel.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  document.addEventListener("click", function (event) {
    if (!panel.hidden && !header.contains(event.target)) {
      setOpen(false);
    }
  });

  var mq = window.matchMedia("(min-width: 880px)");
  function onWidthChange(e) {
    if (e.matches) setOpen(false);
  }
  if (typeof mq.addEventListener === "function") {
    mq.addEventListener("change", onWidthChange);
  } else if (typeof mq.addListener === "function") {
    mq.addListener(onWidthChange);
  }
})();
