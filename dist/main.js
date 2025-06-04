"use strict";
const searchForm = document.querySelector("#search_form");
const searchInputIcon = document.querySelector("#search_input_icon");
const searchInput = document.querySelector("#search_input");
const searchButton = document.querySelector("#search_btn");
// Function to check if it's a small screen
const isSmallScreen = () => window.matchMedia("(max-width: 768px)").matches;
if (searchForm && searchInputIcon && searchInput && searchButton) {
    searchInputIcon.addEventListener("click", () => {
        if (!isSmallScreen())
            return;
        searchInput.style.display = "block";
        searchButton.style.display = "block";
        Object.assign(searchForm.style, {
            backgroundColor: "white",
            width: "300px",
            right: "250px",
            zIndex: "15",
            border: "1px solid #eee",
        });
        searchInput.focus();
    });
    searchForm.addEventListener("blur", () => {
        if (!isSmallScreen())
            return;
        searchInput.style.display = "none";
        searchButton.style.display = "none";
        Object.assign(searchForm.style, {
            backgroundColor: "transparent",
            width: "300px",
            right: "-10px",
            zIndex: "-1",
            border: "0",
        });
    }, true);
}
