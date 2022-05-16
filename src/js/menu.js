
(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };
  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    document.body.classList.toggle('no-scroll');
    refs.menu.classList.toggle('is-open');
  }
  refs.menu.addEventListener('click', e => {
    if (e.target.classList.contains('mobile-nav__item-link')) {
      toggleModal();
    }
  });
})();