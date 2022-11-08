export const modalBg = (content) => {
  const body = document.querySelector("body");

  const modalBackGround = document.createElement("section");
  modalBackGround.classList = "modal-bg";

  const modal = document.createElement("div");
  modal.classList = "modal flex justify-center column";

  const modalHeader = document.createElement("div");
  modalHeader.classList = "modal-header";

  const figure = document.createElement("figure");
  figure.classList = "flex flex-end close-button";

  const closeModal = document.createElement("img");
  closeModal.src = "../../assets/img/icon-X.svg";
  closeModal.addEventListener("click", () => modalBackGround.remove());

  figure.appendChild(closeModal);

  modalHeader.append(figure);

  const modalContent = document.createElement("div");
  modalContent.classList = "modal-content flex column align-cente";

  modalContent.appendChild(content);

  const modalFooter = document.createElement("div");
  modalFooter.classList = "modal-footer";

  modal.append(modalHeader, modalContent, modalFooter);

  modalBackGround.appendChild(modal);
  
  body.insertAdjacentElement("afterbegin", modalBackGround);
};
