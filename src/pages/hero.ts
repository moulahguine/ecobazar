// add autoscroll functionality to hero images every 5 seconds

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

// This class represents a single feature in the hero section

class Feature {
  index: number;
  icon: string;
  title: string;
  subtitle: string;

  constructor(icon: string, title: string, subtitle: string, index: number) {
    this.index = index;
    this.icon = icon;
    this.title = title;
    this.subtitle = subtitle;
  }

  createElement(): HTMLElement {
    const div = document.createElement("div");
    div.className = `feature feature-${this.index}`;
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

const feature = [
  new Feature(
    '<img src="/icons/feature icons/deliveryTruck.png" alt="delivery truck" />',
    "Free Shipping",
    "Free shipping on all your order",

    1
  ),
  new Feature(
    '<img src="/icons/feature icons/headphones.png" alt="head phone" />',
    "Customer Support 24/7",
    "Instant access to Support",
    2
  ),
  new Feature(
    '<img src="/icons/feature icons/package.png" alt="package" />',
    "100% Secure Payment",
    "We ensure your money is save",
    3
  ),
  new Feature(
    '<img src="/icons/feature icons/shoppingBag.png" alt="shoppung bag" />',
    "Money-Back Guarantee",
    "30 Days Money-Back Guarantee",
    4
  ),
];

const container = document.querySelector<HTMLDivElement>(".hero_features");
if (container) {
  feature.forEach((feature, i) => {
    container.appendChild(feature.createElement());
  });
}
