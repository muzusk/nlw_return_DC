const nav = document.getElementById("nav");
const backButton = document.getElementById("backToHome");
const body = document.body;

const Menu = (n) => {
  if (n == 1) {
    body.classList.add("menu-expanded");
  } else {
    body.classList.remove("menu-expanded");
  }
};

const scroll = () => {
  showBtnToHome();
  showNav();

  activeMenu(home);
  activeMenu(services);
  activeMenu(about);
  activeMenu(contact);
};

const showBtnToHome = () => {
  if (scrollY > 1000) {
    backButton.classList.add("show");
  } else {
    backButton.classList.remove("show");
  }
};

const showNav = () => {
  if (scrollY > 0) {
    nav.classList.add("scl");
  } else if (scrollY == 0) {
    nav.classList.remove("scl");
  }
};

const activeMenu = (section) => {
  const line = scrollY + innerHeight / 2;

  // dados
  const secTop = section.offsetTop;
  const secHeight = section.offsetHeight;
  const verifyTop = line >= secTop;

  const secEnd = secTop + secHeight;
  const verifyBottom = secEnd <= line;

  const passed = verifyTop && !verifyBottom;

  // elements
  const menuElements = document.querySelector(
    `.menu a[href*=${section.getAttribute("id")}]`
  );

  if (passed) {
    menuElements.classList.add("active");
  } else {
    menuElements.classList.remove("active");
  }

  console.log(passed);
};
