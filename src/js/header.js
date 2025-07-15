document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");

  const headerNavItems = document.querySelectorAll(".header-nav-item");
  const mobileNavItems = document.querySelectorAll(".mobile-menu-nav-item");

  const allNavItems = [...headerNavItems, ...mobileNavItems];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;

          allNavItems.forEach((item) => {
            item.classList.remove("current");
            const link = item.querySelector("a");
            if (link && link.getAttribute("href") === `#${id}`) {
              item.classList.add("current");
            }
          });
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});