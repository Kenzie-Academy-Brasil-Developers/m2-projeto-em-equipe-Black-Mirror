import { modalBg } from "../../scripts/modal.js";
import { renderCard } from "../../scripts/renderCardHome.js";

function modRender() {
  // const register = document.querySelector("");
  register.addEventListener("click", () => {
    modalBg(modalRegister());
  });

  // const login = document.querySelector("");
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
  login.classList = "text-center";
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

  let body = {};

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (email.value !== "" && password.value !== "") {
      body = {
        email: email.value,
        password: password.value,
      };
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
  register.classList = "text-center";
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

  let body = {};

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (userName.value !== "" && email.value !== "" && password.value !== "") {
      body = {
        name: userName.value,
        email: email.value,
        password: password.value,
        avatar_url: userAvatar.value,
      };
      console.log(body);
    } else {
      console.log("erro");
    }
  });

  return form;
}

function modalDeleteAcc() {
  const section = document.createElement("section");
  section.classList = "flex column form-general";

  const title = document.createElement("h2");
  title.innerText = "Deseja mesmo deletar sua conta?";
  title.classList = "flex align-center justify-center";

  const cancel = document.createElement("button");
  cancel.classList = "text-center";
  cancel.innerText = "Não desejo deletar minha conta";
  cancel.type = "button";
  cancel.addEventListener("click", (e) => {
    document.querySelector(".modal-bg").remove();
  });

  const deleteAcc = document.createElement("button");
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
  alterate.classList = "text-center";
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

  const breed = document.createElement("input");
  breed.name = "breed";
  breed.placeholder = "Raça";

  const petAvatar = document.createElement("input");
  petAvatar.name = "avatar";
  petAvatar.placeholder = "Avatar";

  const registerPet = document.createElement("button");
  registerPet.classList = "text-center";
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
  registerPet.classList = "text-center";
  registerPet.innerText = "Atualizar";
  registerPet.type = "submit";

  form.append(title, newPetAvatar, registerPet)
  return form
}

renderCard()
modRender();
