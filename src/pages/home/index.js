const menuIcon = document.querySelector('#menuIcon')
const headerBtnsMobile = document.querySelector('#headerBtnsMobile')
menuIcon.addEventListener('click', ()=> headerBtnsMobile.classList.toggle('hide'))

import { modalBg } from "../../scripts/modal.js";
import {creatUser} from "../../scripts/requests.js"

function modRender() {
  const register = document.querySelector(".button-white");
  register.addEventListener("click", () => {
    modalBg(modalRegister());
  });

  const login = document.querySelector(".button-brand");
  login.addEventListener("click", () => {
    modalBg(modalLogin());
  });

  
}

function modalLogin() {
  const form = document.createElement("form");
  form.classList = "flex column form-general";

  const title = document.createElement("h2");
  title.innerText = "Login";
  title.classList = "flex align-center justify-center";

  const email = document.createElement("input");
  email.name = "email";
  email.type = "email";
  email.placeholder = "E-mail";

  const password = document.createElement("input");
  password.name = "password";
  password.type = "password";
  password.placeholder = "Senha";

  const login = document.createElement("button");
  login.classList = "text-center button-brand";
  login.innerText = "Entrar";
  login.type = "submit";

  const link = document.createElement("a");
  link.innerText = `Clique aqui  `;
  link.classList = "link";

  const p = document.createElement("p");

  const p2 = document.createElement("span");
  p2.innerText = `para se cadastrar`;

  p.innerText = "Não tem cadastro? ";
  link.appendChild(p2);
  p.appendChild(link);
  form.append(title, email, password, login, p);

  link.addEventListener("click", () => {
    const modBg = document.querySelector(".modal-bg");
    modBg.remove();

    modalBg(modalRegister());
  });

  

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (email.value !== "" && password.value !== "") {
      
        // email: email.value,
        // password: password.value,
     
      console.log(body);
    } else {
      console.log("erro");
    }
  });

  return form;
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

  const p = document.createElement("p");

  p.innerText = "Já tem cadastro? ";
  p.appendChild(link);
  form.append(title, userName, email, password, userAvatar, register, p);

  form.addEventListener("submit",  async (e) => {
    e.preventDefault();
    if (userName.value !== "" && email.value !== "" && password.value !== "") {
        let name = userName.value
        let emailReq = email.value
        let passwordReq = password.value
        let avatarUrl = userAvatar.value

        await creatUser(name, emailReq, passwordReq, avatarUrl)
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
  deleteAcc.classList = "button-white"
  deleteAcc.innerText = "Quero deletar minha conta";
  deleteAcc.addEventListener("click", () => {
    // requisição
  });

  section.append(title, cancel, deleteAcc);

  return section;
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

function registerNewPet() {
  const form = document.createElement("form");
  form.classList = "flex column form-general";

  const title = document.createElement("h2");
  title.innerText = "Cadastrar pet";
  title.classList = "flex align-center justify-center";

  const petName = document.createElement("input");
  petName.name = "name";
  petName.placeholder = "Nome";

  const breed = document.createElement("select");
  breed.name = "breed";
  breed.classList = "select-breed"
  breed.placeholder = "Raça";

  const option0 = document.createElement("option")
  option0.innerText = "Selecione a espécie"
  option0.selected;
  option0.disabled;

  const option1 = document.createElement("option")
  option1.innerText = "Cachorro"

  const option2 = document.createElement("option")
  option2.innerText = "Gato"

  const option3 = document.createElement("option")
  option3.innerText = "Repteis"


  const option4 = document.createElement("option")
  option4.innerText = "Outros"

  breed.append(option0, option1, option2, option3, option4)

  const petAvatar = document.createElement("input");
  petAvatar.name = "avatar";
  petAvatar.placeholder = "Avatar";

  const registerPet = document.createElement("button");
  registerPet.classList = "text-center button-brand";
  registerPet.innerText = "Cadastrar";
  registerPet.type = "submit";

  form.append(title, petName, breed, registerPet);

  form.addEventListener("submit", () => {});

  return form;
}

function alteratePetData() {
  const form = document.createElement("form");
  form.classList = "flex column form-general";

  const title = document.createElement("h2");
  title.innerText = "Atualizar pet";
  title.classList = "flex align-center justify-center";

  const newPetAvatar = document.createElement("input");
  newPetAvatar.name = "name";
  newPetAvatar.placeholder = "Avatar";

  const registerPet = document.createElement("button");
  registerPet.classList = "text-center button-brand";
  registerPet.innerText = "Atualizar";
  registerPet.type = "submit";

  form.append(title, newPetAvatar, registerPet)
  return form
}

modRender();
