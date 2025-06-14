"use strict";
const navLinks = document.querySelectorAll(".main_navigation ul li a");
const sections = document.querySelectorAll("section");
navLinks.forEach((link) => {
  if (link.firstElementChild instanceof HTMLElement) {
    link.firstElementChild.style.display = "none";
  }
  link.addEventListener("click", (event) => {
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
const supportNum = document.querySelector(".support_num");
const copyMsg = document.querySelector("#copyMsg");
supportNum === null || supportNum === void 0
  ? void 0
  : supportNum.addEventListener("click", () => {
      const phoneNumber = "(+90)554 882 65 67";
      navigator.clipboard
        .writeText(phoneNumber)
        .then(() => {
          supportNum.classList.add("show_msg");
          setTimeout(() => {
            supportNum.classList.remove("show_msg");
          }, 1000);
        })
        .catch((err) => {
          console.error("Failed to copy phone number:", err);
        });
    });
