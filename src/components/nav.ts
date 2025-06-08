const navLinks = document.querySelectorAll<HTMLAnchorElement>(
  ".main_navigation ul li a"
);
const sections = document.querySelectorAll<HTMLElement>("section");

navLinks.forEach((link) => {
  if (link.firstElementChild instanceof HTMLElement) {
    link.firstElementChild.style.display = "none";
  }

  link.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();

    const href = link.getAttribute("href");
    if (!href) return;

    const targetId = href.substring(1);

    if (targetId === "home") {
      sections.forEach((section) => {
        section.style.display = "block";
      });
    } else {
      sections.forEach((section) => {
        section.style.display = section.id === targetId ? "block" : "none";
      });
    }

    // Update active class on nav links
    // navLinks.forEach((nav) => nav.classList.remove("active"));
    // link.classList.add("active");
  });
});
