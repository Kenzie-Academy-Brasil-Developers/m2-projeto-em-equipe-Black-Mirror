import { modalBg } from "./modal.js";
import { updateProfile, deleteProfile } from "./requests.js";

const profileCardsSection = document.querySelector(".section-petsList-profile");
const userData = JSON.parse(localStorage.getItem("user"));

const renderProfileData = () => {
  const section = document.createElement("section");
  section.classList = "profile flex column align-center";

  const span = document.createElement("span");
  span.classList = "profile-banner flex column";

  const div = document.createElement("div");
  div.classList = "purple-profile-div";

  const figure = document.createElement("figure");
  figure.classList = "profile-picture-container flex align-center";

  const img = document.createElement("img");
  img.classList = "profile-picture";
  img.src = userData.avatar_url;

  const personal = document.createElement("span");
  personal.classList = "profile-personal-data flex column";

  const title = document.createElement("h2");
  title.classList = "profile-title";
  title.innerText = "Dados pessoais";

  const name = document.createElement("div");
  name.classList = "name-container flex";

  const nameDesc = document.createElement("p");
  nameDesc.innerText = "Nome: ";
  nameDesc.classList = "profile-desc";

  const userName = document.createElement("p");
  userName.innerText = userData.name;

  const email = document.createElement("div");
  email.classList = "email-container flex";

  const emailDesc = document.createElement("p");
  emailDesc.innerText = "E-mail:";
  emailDesc.classList = "profile-desc";

  const userEmail = document.createElement("p");
  userEmail.innerText = userData.email;

  const buttons = document.createElement("span");
  buttons.classList = "profile-buttons-container flex";

  const updateInfoBtn = document.createElement("button");
  updateInfoBtn.classList = "update-info-btn button-brand";
  updateInfoBtn.innerText = "Atualizar Informações";
  updateInfoBtn.addEventListener("click", () => {
    modalBg(alterateUserData());
  });

  const deleteAccBtn = document.createElement("button");
  deleteAccBtn.classList = "delete-acc-btn button-red";
  deleteAccBtn.innerText = "Deletar conta";
  deleteAccBtn.addEventListener("click", () => {
    modalBg(modalDeleteAcc());
  });

  figure.append(img);

  span.append(div, figure);

  name.append(nameDesc, userName);

  email.append(emailDesc, userEmail);

  buttons.append(updateInfoBtn, deleteAccBtn);

  personal.append(title, name, email, buttons);

  section.append(span, personal);

  profileCardsSection.insertAdjacentElement("beforebegin", section);
};

function alterateUserData() {
  const form = document.createElement("form");
  form.classList = "flex column form-general";

  const title = document.createElement("h2");
  title.innerText = "Atualizar perfil";
  title.classList = "flex align-center justify-center";

  const userName = document.createElement("input");
  userName.name = "name";
  userName.placeholder = "Nome";

  const email = document.createElement("input");
  email.name = "email";
  email.type = "email";
  email.placeholder = "E-mail";

  const password = document.createElement("input");
  password.name = "password";
  password.type = "password";
  password.placeholder = "Senha";

  const userAvatar = document.createElement("input");
  userAvatar.name = "avatar_url";
  userAvatar.placeholder = "Avatar";

  const alterate = document.createElement("button");
  alterate.classList = "text-center button-brand";
  alterate.innerText = "Atualizar";
  alterate.type = "submit";

  form.append(title, userName, userAvatar, alterate);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let avatarReq = userAvatar.value;
    let userNameReq = userName.value;
    let token = JSON.parse(localStorage.getItem("token"));

    if (avatarReq !== "" && userNameReq !== "") {
      const updateProfileReq = await updateProfile(
        avatarReq,
        userNameReq,
        token
      );
      if (!updateProfileReq.message) {
        let body = {
          email: updateProfileReq.email,
          name: updateProfileReq.name,
          avatar_url: updateProfileReq.avatar_url,
        };

        localStorage.setItem("user", JSON.stringify(body));
        window.location.reload();
      }
    }
  });

  return form;
}

function modalDeleteAcc() {
  const section = document.createElement("section");
  section.classList = "flex column form-general";

  const title = document.createElement("h2");
  title.innerText = "Deseja mesmo deletar sua conta?";
  title.classList = "text-center";

  const cancel = document.createElement("button");
  cancel.classList = "text-center button-brand";
  cancel.innerText = "Não desejo deletar minha conta";
  cancel.type = "button";
  cancel.addEventListener("click", (e) => {
    document.querySelector(".modal-bg").remove();
  });

  const deleteAcc = document.createElement("button");
  deleteAcc.classList = "button-white";
  deleteAcc.innerText = "Quero deletar minha conta";
  deleteAcc.addEventListener("click", async () => {
    let token = JSON.parse(localStorage.getItem("token"));
    await deleteProfile(token);
    localStorage.clear()
    window.location.replace("/")
  });

  section.append(title, cancel, deleteAcc);

  return section;
}

export { renderProfileData };
