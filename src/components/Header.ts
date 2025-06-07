const searchForm: any = document.querySelector<HTMLFormElement>("#search_form");
const searchInputIcon: any = document.querySelector<HTMLElement>(
  ".search_btn_sscreen i"
);
const searchInput = document.querySelector<HTMLInputElement>("#search_input");
const searchButton = document.querySelector<HTMLButtonElement>("#search_btn");
const mainApp = document.querySelector(".app");

const isSmallScreen = () => window.innerWidth <= 768;

if (searchForm && searchInputIcon) {
  if (isSmallScreen()) {
    searchInputIcon.addEventListener("click", () => {
      searchForm.style.display = "flex";
      mainApp?.classList.toggle("changeDisplay");
    });
  }
}
