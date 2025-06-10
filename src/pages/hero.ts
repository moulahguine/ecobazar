const heroImages = document.querySelector(".hero_images");

if (heroImages) {
  let scrollPosition = 0;

  setInterval(() => {
    if (!heroImages) return;

    scrollPosition += heroImages.clientWidth;

    if (scrollPosition >= heroImages.scrollWidth) {
      scrollPosition = 0;
    }

    heroImages.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  }, 2000);
}
