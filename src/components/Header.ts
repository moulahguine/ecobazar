const searchForm = document.querySelector<HTMLFormElement>("#search_form");
const searchInputIcon = document.querySelector<HTMLElement>(
  ".search_btn_sscreen i"
);
const searchInput = document.querySelector<HTMLInputElement>("#search_input");
const searchButton = document.querySelector<HTMLButtonElement>("#search_btn");
const mainApp = document.querySelector<HTMLElement>(".app");
const logoName = document.querySelector<HTMLElement>(".app header .logo h3");
const originalText = logoName?.textContent ?? "";

const isSmallScreen = () => window.innerWidth <= 1090;
const isPhoneScreen = () => window.innerWidth <= 767;

let listenersAdded = false;

// for search to show and hide
const showSearchForm = (e: Event) => {
  e.stopPropagation();
  if (searchForm) searchForm.style.display = "flex";
  mainApp?.classList.add("search_layout");
  searchInput?.focus();
};

const hideSearchForm = (e: Event) => {
  const target = e.target as Node;
  if (
    searchForm &&
    !searchForm.contains(target) &&
    searchInputIcon &&
    !searchInputIcon.contains(target)
  ) {
    searchForm.style.display = "none";
    mainApp?.classList.remove("search_layout");
  }
};

const updateSearch = () => {
  if (isSmallScreen()) {
    if (!listenersAdded && searchInputIcon && mainApp) {
      searchInputIcon.addEventListener("click", showSearchForm);
      mainApp.addEventListener("click", hideSearchForm);
      listenersAdded = true;
    }
  } else {
    if (listenersAdded) {
      searchInputIcon?.removeEventListener("click", showSearchForm);
      mainApp?.removeEventListener("click", hideSearchForm);
      listenersAdded = false;
    }
    if (searchForm) searchForm.style.display = "";
    mainApp?.classList.remove("search_layout");
  }
};

// for logo name update
const updateLogoName = () => {
  if (!logoName) return;
  if (isPhoneScreen()) {
    logoName.textContent = "bazar";
  } else {
    logoName.textContent = originalText;
  }
};

updateSearch();
updateLogoName();

window.addEventListener("resize", () => {
  updateSearch();
  updateLogoName();
});
