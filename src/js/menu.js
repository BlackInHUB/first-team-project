(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    modalWindowOpen: document.querySelector('.consultation-btn-mobile'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-modal-window]'),
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
  refs.modalWindowOpen.addEventListener('click', e => {
    console.log(1111);
    toggleModal();
    document.body.classList.toggle('no-scroll');
    refs.modal.classList.toggle('is-hidden');
  });
})();