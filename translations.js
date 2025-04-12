const translations = {
  ar: {
    title: "كنوز اليمن",
    subtitle: "متجر للعسل والبخور واللبان اليمني",
    addToCart: "إضافة إلى السلة",
    products: "المنتجات",
    cart: "سلة المشتريات"
  },
  en: {
    title: "Kenooz Yemen",
    subtitle: "A store for Yemeni honey, incense, and frankincense",
    addToCart: "Add to Cart",
    products: "Products",
    cart: "Shopping Cart"
  },
  de: {
    title: "Kenooz Jemen",
    subtitle: "Ein Laden für jemenitischen Honig, Weihrauch und Luban",
    addToCart: "In den Warenkorb",
    products: "Produkte",
    cart: "Einkaufswagen"
  }
};

function setLanguage(lang) {
  document.getElementById("site-title").innerText = translations[lang].title;
  document.getElementById("site-subtitle").innerText = translations[lang].subtitle;
  document.querySelectorAll(".add-to-cart").forEach(el => el.innerText = translations[lang].addToCart);
  document.getElementById("products-title").innerText = translations[lang].products;
  document.getElementById("cart-title").innerText = translations[lang].cart;
}
