import { modalBg } from "../../scripts/modal.js";
import { renderCard } from "../../scripts/renderCardHome.js";
import {creatUser, loginUser} from "../../scripts/requests.js"


const menuIcon = document.querySelector('#menuIcon')
const headerBtnsMobile = document.querySelector('#headerBtnsMobile')
menuIcon.addEventListener('click', ()=> headerBtnsMobile.classList.toggle('hide'))

const tokenStorage = JSON.parse(localStorage.getItem("token"))

function btnChange() {

  const btnLogin = document.querySelector(".button-white")
  const btnRegister = document.querySelector(".button-brand")

  if(tokenStorage !== null){
     
    btnLogin.innerText = "Perfil"
    btnRegister.innerText = "Logout"

    if(btnLogin.innerText === "Perfil"){
       
      btnLogin.onclick = () => {
        window.location.replace("../profile/index.html")
      }
    }
    if(btnRegister.innerText === "Logout"){

      btnRegister.onclick = () => {

        localStorage.removeItem("token")
        localStorage.removeItem("user")

        window.location.reload()
      }
    }
  }
   
}

btnChange()

async function loginEvent(email, pass) {
    
  const user = await loginUser(email,pass)
  let token  = user.token
  const body = {
    name: user.user.name,
    email: user.user.email,
    avatar_url: user.user.avatar_url,
  }

  localStorage.setItem("token" , JSON.stringify(token))
  localStorage.setItem("user" , JSON.stringify(body))
  window.location.reload()

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


renderCard()
modRender()
