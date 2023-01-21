
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-2]'),
    closeModalBtn: document.querySelector('[data-modal-close-2]'),
    modal: document.querySelector('[data-modal-2]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle('modal__backdrop--is-hidden');
  }
})();

// (() => {
//     const refs = {
//         openModalBtn: document.querySelector("[data-open-modal]"),
//         closeModalBtn: document.querySelector("[data-close-modal]"),
//         backdrop: document.querySelector("[data-backdrop]"),
//     };
//     refs.openModalBtn.addEventListener("click", toggleModal);
//     refs.closeModalBtn.addEventListener("click", toggleModal);
//     refs.backdrop.addEventListener("click", logBackdropClick);

//     function toggleModal () {
//         refs.backdrop.classList.toggle("is-hidden");
//     }

//     function logBackdropClick() {
//         console.log("click to backdrop")
//     }
// })();
