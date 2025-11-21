const searchHotelButton = document.querySelector(".cta-btn");
const modalContainer = document.querySelector(".modal-container");
const modalEscButton = document.querySelector(".modal-close-button");

searchHotelButton.addEventListener("click", () => {
  modalContainer.classList.add("modal-container-opened");
});

modalEscButton.addEventListener("click", () => {
  modalContainer.classList.remove("modal-container-opened");
});

modalContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-container")) {
    modalContainer.classList.remove("modal-container-opened");
  }
})

document.addEventListener("keydown", (evt) => {
  if (evt.key == "Escape") {
    modalContainer.classList.remove("modal-container-opened");
  }
});
