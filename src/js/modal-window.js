(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-window-open]"),
    closeModalBtn: document.querySelector("[data-modal-window-close]"),
    modal: document.querySelector("[data-modal-window]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle('no-scroll');
    refs.modal.classList.toggle("is-hidden");
  }
})();