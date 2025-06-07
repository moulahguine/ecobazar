const searchForm: any = document.querySelector<HTMLFormElement>("#search_form");
const searchInputIcon: any = document.querySelector<HTMLElement>(
  ".search_btn_sscreen i"
);
const searchInput = document.querySelector<HTMLInputElement>("#search_input");
const searchButton = document.querySelector<HTMLButtonElement>("#search_btn");
const mainApp = document.querySelector<HTMLElement>(".app");

const isSmallScreen = () => window.innerWidth <= 768;

if (searchForm && searchInputIcon && isSmallScreen()) {
  // Show the form
  searchInputIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    searchForm.style.display = "flex";
    mainApp?.classList.add("search_layout"); // ?
    searchInput?.focus();
  });

  // hide the form
  mainApp?.addEventListener("click", (e) => {
    const target = e.target as Node;
    if (!searchForm.contains(target) && !searchInputIcon.contains(target)) {
      searchForm.style.display = "none";
      mainApp?.classList.remove("search_layout");
    }
  });
}
