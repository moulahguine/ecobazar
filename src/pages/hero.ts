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
  }, 5000);
}

//==================================

class Features {
  icon: string;
  title: string;
  subtitle: string;
  constructor(icon: string, title: string, subtitle: string) {
    this.icon = icon;
    this.title = title;
    this.subtitle = subtitle;
  }
  createElement(): HTMLElement {
    const div = document.createElement("div");
    div.className = "feature_item";
    div.innerHTML = `
      <span class="icon">${this.icon}</span>
      <div class="text">
        <strong>${this.title}</strong>
        <p>${this.subtitle}</p>
      </div>
    `;
    return div;
  }
}

const features = [
  new Features(
    '<img src="/icons/feature icons/deliveryTruck.png" alt="delivery truck" />',
    "Free Shipping",
    "Free shipping on all your order"
  ),
  new Features(
    '<img src="/icons/feature icons/headphones.png" alt="head phone" />',
    "Customer Support 24/7",
    "Instant access to Support"
  ),
  new Features(
    '<img src="/icons/feature icons/package.png" alt="package" />',
    "100% Secure Payment",
    "We ensure your money is save"
  ),
  new Features(
    '<img src="/icons/feature icons/shoppingBag.png" alt="shoppung bag" />',
    "Money-Back Guarantee",
    "30 Days Money-Back Guarantee"
  ),
];

const container = document.querySelector<HTMLDivElement>(".hero_features");
if (container) {
  features.forEach((feature) => {
    container.appendChild(feature.createElement());
  });
}
