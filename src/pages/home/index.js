import { btnChange } from "../../scripts/btnChange.js";
import { modalBg } from "../../scripts/modal.js";
import { renderCard } from "../../scripts/renderCardHome.js";
import {creatUser, loginUser} from "../../scripts/requests.js"
import { toast } from "../../scripts/toastfy.js";


const menuIcon = document.querySelector('#menuIcon')
const headerBtnsMobile = document.querySelector('#headerBtnsMobile')
menuIcon.addEventListener('click', ()=> headerBtnsMobile.classList.toggle('hide'))



btnChange()

async function loginEvent(email, pass) {
    
  const user = await loginUser(email,pass)
  let token  = user.token
  const body = {
    name: user.user.name,
    email: user.user.email,
    avatar_url: user.user.avatar_url,
  }

  const toastfy = toast("sucess", "Login Feito com Sucesso")
  const main = document.querySelector("main")
  const section = document.querySelector(".modal-bg")

  main.append(toastfy)
  toastfy.showModal()
  localStorage.setItem("token" , JSON.stringify(token))
  localStorage.setItem("user" , JSON.stringify(body))
  setTimeout(() => {
    window.location.reload()
  },3000)

}


function modRender() {
  const register = document.querySelector(".button-white");

  if(register.innerText === "Register"){

    register.addEventListener("click", () => {
      modalBg(modalRegister());
    });

  }

  const login = document.querySelector(".button-brand");

  if(login.innerText === "Login"){

    login.addEventListener("click", () => {
    modalBg(modalLogin());
  });

  }
  

  
}

export function modalLogin() {
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
  link.innerText = `Clique aqui`;
  link.classList = "link";

  const p = document.createElement("p");

  const p2 = document.createElement("span");
  p2.innerText = ` para se cadastrar`;

  p.innerText = "Não tem cadastro? ";
  
  p.append(link,p2);
  form.append(title, email, password, login, p);

  link.addEventListener("click", () => {
    const modBg = document.querySelector(".modal-bg");
    modBg.remove();

    modalBg(modalRegister());
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (email.value !== "" && password.value !== "") {

      let emailReq = email.value
      let passwordReq = password.value
     
      loginEvent(emailReq,passwordReq);

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

  const p2 = document.createElement("span");
  p2.innerText = ` para fazer Login`;

  const p = document.createElement("p");

  p.innerText = "Já tem cadastro? ";
  p.append(link,p2);
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






renderCard()
modRender()
