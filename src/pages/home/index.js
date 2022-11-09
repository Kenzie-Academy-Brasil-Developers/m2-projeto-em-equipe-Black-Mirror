import { btnChange } from "../../scripts/btnChange.js";
import { modalBg } from "../../scripts/modal.js";
import { modalLogin } from "../../scripts/modalLogin.js";
import { renderCard } from "../../scripts/renderCardHome.js";
import { creatUser, loginUser } from "../../scripts/requests.js";
import { toast } from "../../scripts/toastfy.js";

const menuIcon = document.querySelector("#menuIcon");
const headerBtnsMobile = document.querySelector("#headerBtnsMobile");
menuIcon.addEventListener("click", () =>
  headerBtnsMobile.classList.toggle("hide")
);

const token = JSON.parse(localStorage.getItem("token"));



function modRender() {
  const register = [...document.querySelectorAll(".button1")];

  register.forEach((element) => {
    if (!token) {
      element.addEventListener("click", () => {
        modalBg(modalRegister());
      });
    }
  });

  const login = [...document.querySelectorAll(".button2")];
  login.forEach((element) => {
  if (!token) {
    element.addEventListener("click", () => {
      modalBg(modalLogin());
    });
  }
  });
}



function modalRegister() {
  const form = document.createElement("form");
  form.classList = "flex column form-general";

  const title = document.createElement("h2");
  title.innerText = "Cadastrar";
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
  userAvatar.placeholder = "Avatar?";

  const register = document.createElement("button");
  register.classList = "text-center button-brand";
  register.innerText = "Cadastrar";
  register.type = "submit";

  const link = document.createElement("a");
  link.innerText = "Clique aqui";
  link.classList = "link";
  link.addEventListener("click", () => {
    const modBg = document.querySelector(".modal-bg");
    modBg.remove();

    modalBg(modalLogin());
  });

  const p2 = document.createElement("span");
  p2.innerText = ` para fazer Login`;

  const p = document.createElement("p");

  p.innerText = "Já tem cadastro? ";
  p.append(link, p2);
  form.append(title, userName, email, password, userAvatar, register, p);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (userName.value !== "" && email.value !== "" && password.value !== "") {
      let name = userName.value;
      let emailReq = email.value;
      let passwordReq = password.value;
      let avatarUrl = userAvatar.value;

      await creatUser(name, emailReq, passwordReq, avatarUrl);
    }
  });

  return form;
}

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

  form.append(title, userName, email, userAvatar, alterate);

  form.addEventListener("submit", () => {});

  return form;
}

renderCard();
modRender();
btnChange();
