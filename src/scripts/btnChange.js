export function btnChange() {

    const tokenStorage = JSON.parse(localStorage.getItem("token"))
    const btnLogin = document.querySelector("#btn-login")
    const btnRegister = document.querySelector("#btn-register")
    const btnLoginMobile = document.querySelector("#mobile-btn-login")
    const btnRegisterMobile = document.querySelector("#mobile-btn-Register")
    

    if(tokenStorage !== null){
       
      btnLogin.innerHTML = "Perfil"
      btnRegister.innerHTML = "Logout"
      btnLoginMobile.innerHTML = "Perfil"
      btnRegisterMobile.innerHTML = "Logout"
  
      if(btnLogin.innerHTML === "Perfil" || btnLoginMobile.innerHTML === "Perfil"  ){
         
        btnLogin.onclick = () => {
          window.location.replace("../profile/index.html")
        }
      }
      if(btnRegister.innerHTML === "Logout" || btnRegisterMobile.innerHTML === "Logout"){
  
        btnRegister.onclick = () => {
  
          localStorage.removeItem("token")
          localStorage.removeItem("user")
  
          window.location.reload()
        }
      }
    }
     
  }