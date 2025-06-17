"use strict";
var _a;
const searchForm = document.querySelector("#search_form");
const searchInputIcon = document.querySelector(".search_btn_sscreen i");
const searchInput = document.querySelector("#search_input");
const searchButton = document.querySelector("#search_btn");
const mainApp = document.querySelector(".app");
const logoName = document.querySelector(".app header .logo h3");
const originalText = (_a = logoName === null || logoName === void 0 ? void 0 : logoName.textContent) !== null && _a !== void 0 ? _a : "";
const isSmallScreen = () => window.innerWidth <= 1090;
const isPhoneScreen = () => window.innerWidth <= 767;
let listenersAdded = false;
// for search to show and hide
const showSearchForm = (e) => {
    e.stopPropagation();
    if (searchForm)
        searchForm.style.display = "flex";
    mainApp === null || mainApp === void 0 ? void 0 : mainApp.classList.add("search_layout");
    searchInput === null || searchInput === void 0 ? void 0 : searchInput.focus();
};
const hideSearchForm = (e) => {
    const target = e.target;
    if (searchForm &&
        !searchForm.contains(target) &&
        searchInputIcon &&
        !searchInputIcon.contains(target)) {
        searchForm.style.display = "none";
        mainApp === null || mainApp === void 0 ? void 0 : mainApp.classList.remove("search_layout");
    }
};
const updateSearch = () => {
    if (isSmallScreen()) {
        if (!listenersAdded && searchInputIcon && mainApp) {
            searchInputIcon.addEventListener("click", showSearchForm);
            mainApp.addEventListener("click", hideSearchForm);
            listenersAdded = true;
        }
    }
    else {
        if (listenersAdded) {
            searchInputIcon === null || searchInputIcon === void 0 ? void 0 : searchInputIcon.removeEventListener("click", showSearchForm);
            mainApp === null || mainApp === void 0 ? void 0 : mainApp.removeEventListener("click", hideSearchForm);
            listenersAdded = false;
        }
        if (searchForm)
            searchForm.style.display = "";
        mainApp === null || mainApp === void 0 ? void 0 : mainApp.classList.remove("search_layout");
    }
};
updateSearch();
window.addEventListener("resize", () => {
    updateSearch();
});
