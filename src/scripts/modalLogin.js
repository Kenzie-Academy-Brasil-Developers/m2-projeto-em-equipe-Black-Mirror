import { loginUser } from "./requests.js";
import { toast } from "./toastfy.js";



async function loginEvent(email, pass) {
    const user = await loginUser(email, pass);
    let token = user.token;
    const body = {
      name: user.user.name,
      email: user.user.email,
      avatar_url: user.user.avatar_url,
    };
  
    const toastfy = toast("sucess", "Login Feito com Sucesso");
    const main = document.querySelector("main");
    const section = document.querySelector(".modal-bg");
  
    main.append(toastfy);
    toastfy.showModal();
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(body));
    setTimeout(() => {
      window.location.reload();
    }, 3000);
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
  
    p.append(link, p2);
    form.append(title, email, password, login, p);
  
    link.addEventListener("click", () => {
      const modBg = document.querySelector(".modal-bg");
      modBg.remove();
  
      modalBg(modalRegister());
    });
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (email.value !== "" && password.value !== "") {
        let emailReq = email.value;
        let passwordReq = password.value;
  
        loginEvent(emailReq, passwordReq);
      }
    });
  
    return form;
  }