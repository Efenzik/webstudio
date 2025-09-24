const modalOpenBtn = document.querySelector("[data-modal-open]");
const modalCloseBtn = document.querySelector("[data-modal-close]");
const modalBackdrop = document.querySelector("[data-modal]");

const openModal = () => {
  modalBackdrop.classList.add("active");
};

const closeModal = () => {
  const modal = modalBackdrop.querySelector(".modal");

  modal.style.transform = "translate(-50%, -50%) scale(0)";
  modal.style.opacity = "0";
  modalBackdrop.style.opacity = "0";

  setTimeout(() => {
    modalBackdrop.classList.remove("active");
    modal.style.transform = "";
    modal.style.opacity = "";
    modalBackdrop.style.opacity = "";
  }, 2000);
};

modalOpenBtn.addEventListener("click", openModal);
modalCloseBtn.addEventListener("click", closeModal);

modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
