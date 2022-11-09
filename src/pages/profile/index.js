import { creatCards } from "../../scripts/creatCardsProfile.js";
import { readAllMyPets, creatPet } from "../../scripts/requests.js";
import { renderProfileData } from "../../scripts/renderUserProfile.js";
import { modalBg } from "../../scripts/modal.js";

const menuIcon = document.querySelector("#menuIcon");
const headerBtnsMobile = document.querySelector("#headerBtnsMobile");
menuIcon.addEventListener("click", () => {
  headerBtnsMobile.classList.toggle("hide");
  if (menuIcon.src === "http://127.0.0.1:5500/src/assets/img/menuIcon.svg") {
    menuIcon.src = "/src/assets/img/menuIcon-X.svg";
  } else {
    menuIcon.src = "/src/assets/img/menuIcon.svg";
  }
});

function redirectButtons() {
  const home = document.querySelector(".button-white");
  const logout = document.querySelector(".button-brand");

  home.addEventListener("click", () => {
    window.location.replace("/");
  });

  logout.addEventListener("click", () => {
    localStorage.clear();
    window.location.replace("/");
  });
}

async function getApi() {
  const localData = JSON.parse(localStorage.getItem("token"));
  const readMyPets = await readAllMyPets(localData);
  readMyPets.forEach((element) => {
    creatCards(element.name, element.species, element.avatar_url);
  });
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
  breed.classList = "select-breed";
  breed.placeholder = "Raça";

  const option0 = document.createElement("option");
  option0.innerText = "Selecione a espécie";
  option0.selected;
  option0.disabled;

  const option1 = document.createElement("option");
  option1.innerText = "Cachorro";

  const option2 = document.createElement("option");
  option2.innerText = "Gato";

  const option3 = document.createElement("option");
  option3.innerText = "Repteis";

  const option4 = document.createElement("option");
  option4.innerText = "Outros";

  breed.append(option0, option1, option2, option3, option4);

  const petAvatar = document.createElement("input");
  petAvatar.name = "avatar";
  petAvatar.placeholder = "Avatar";

  const registerPet = document.createElement("button");
  registerPet.classList = "text-center button-brand";
  registerPet.innerText = "Cadastrar";
  registerPet.type = "submit";

  form.append(title, petName, breed, petAvatar, registerPet);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let petNameReq = petName.value;
    let breedReq = breed.value;
    let petAvatarReq = petAvatar.value;
    let bread = "SRD";
    let token = JSON.parse(localStorage.getItem("token"));

    if (
      petNameReq !== "" &&
      breedReq !== "Selecione a espécie" &&
      petAvatarReq !== ""
    ) {
      await creatPet(petNameReq, bread, breedReq, petAvatarReq, token);
      window.location.reload();
    }
  });

  return form;
}

function registerNewPetRender() {
  const buttonRegisterPet = document.querySelector("#button-green");
  buttonRegisterPet.addEventListener("click", () => {
    modalBg(registerNewPet());
  });
}

getApi();
renderProfileData();
redirectButtons();
registerNewPetRender();
