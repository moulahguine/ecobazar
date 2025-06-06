const searchForm: any = document.querySelector<HTMLFormElement>("#search_form");
const searchInputIcon: any = document.querySelector<HTMLElement>(
  ".search_btn_sscreen i"
);
const searchInput = document.querySelector<HTMLInputElement>("#search_input");
const searchButton = document.querySelector<HTMLButtonElement>("#search_btn");

const isSmallScreen = () => window.innerWidth <= 768;

searchInputIcon.addEventListener("click", () => {
  searchForm.style.display = "flex";
});

// if (searchForm && searchInputIcon) {
//   searchForm.addEventListener(
//     "focusout",
//     (e) => {
//       const relatedTarget = e.relatedTarget as HTMLElement | null;
//       if (!searchForm.contains(relatedTarget)) {
//         if (isSmallScreen()) {
//           Object.assign(searchForm.style, {
//             display: "block",
//           });
//         }
//       }
//     },
//     true
//   );
//   document.addEventListener("click", (e) => {
//     if (
//       isSmallScreen() &&
//       searchForm &&
//       !searchForm.contains(e.target as Node)
//     ) {
//       searchForm.removeAttribute("style");
//     }
//   });
// }
