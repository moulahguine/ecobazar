const searchForm = document.querySelector<HTMLFormElement>("#search_form");
const searchInputIcon =
  document.querySelector<HTMLElement>("#search_input_icon");
const searchInput = document.querySelector<HTMLInputElement>("#search_input");
const searchButton = document.querySelector<HTMLButtonElement>("#search_btn");

const isSmallScreen = () => window.innerWidth <= 768;

if (searchForm && searchInputIcon && searchInput && searchButton) {
  searchInputIcon.addEventListener("click", () => {
    if (isSmallScreen()) {
      searchInput.style.display = "block";
      searchButton.style.display = "block";
      searchInput.focus();

      Object.assign(searchForm.style, {
        backgroundColor: "white",
        width: "300px",
        position: "absolute",
        right: "250px",
        zIndex: "15",
        border: "1px solid #eee",
      });
    }
  });

  searchForm.addEventListener(
    "focusout",
    (e) => {
      const relatedTarget = e.relatedTarget as HTMLElement | null;
      if (!searchForm.contains(relatedTarget)) {
        if (isSmallScreen()) {
          searchInput.style.display = "";
          searchButton.style.display = "";
          Object.assign(searchForm.style, {
            backgroundColor: "white",
            width: "300px",
            position: "absolute",
            right: "-10px",
            zIndex: "-1",
            border: "0",
          });
        }
      }
    },
    true
  );
  document.addEventListener("click", (e) => {
    if (
      isSmallScreen() &&
      searchForm &&
      !searchForm.contains(e.target as Node)
    ) {
      searchInput.style.display = "";
      searchButton.style.display = "";
      searchForm.removeAttribute("style");
    }
  });
}
