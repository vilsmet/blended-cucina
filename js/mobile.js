(() => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const openIcon = document.querySelector(".header__icon-menu");
  const closeIcon = document.querySelector(".header__icon-close");
  const closeMenuBtn = document.querySelector(".js-close-menu");
  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    openIcon.classList.toggle("is-open");
    closeIcon.classList.toggle("is-open");
    mobileMenu.classList.toggle("is-open");
    const scrollLockMethod = !isMenuOpen
      ? "disableBodyScroll"
      : "enableBodyScroll";
    bodyScrollLock[scrollLockMethod](document.body);
  };
  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
