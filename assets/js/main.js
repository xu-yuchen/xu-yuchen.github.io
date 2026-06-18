// Progressive enhancement only: the site works fully without JavaScript.
// Highlights the nav link whose section is currently in view.
(function () {
  "use strict";

  var links = Array.prototype.slice.call(
    document.querySelectorAll(".nav-links a")
  );
  if (!links.length || !("IntersectionObserver" in window)) return;

  var byId = {};
  links.forEach(function (a) {
    var id = (a.getAttribute("href") || "").replace(/^#/, "");
    if (id) byId[id] = a;
  });

  var sections = Object.keys(byId)
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) { a.classList.remove("active"); });
        var link = byId[entry.target.id];
        if (link) link.classList.add("active");
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );

  sections.forEach(function (s) { observer.observe(s); });
})();
