import { modalBg } from "./modal.js";
import { updatePetById } from "./requests.js";

function creatCards(name, species, img, id) {
  const ulList = document.querySelector(".ul-petsList-profile");

  let liList = document.createElement("li");
  liList.id = id
  liList.classList.add("li-petsList-profile");

  let figure = document.createElement("figure");
  figure.classList.add("figure-profile");

  let imgList = document.createElement("img");
  imgList.classList.add("img-petsList");
  imgList.src = `${img}`;

  let divDescription = document.createElement("div");
  divDescription.classList.add("box-description-petsList");

  let spanName = document.createElement("span");
  spanName.classList.add("span-description-petsList");
  spanName.innerHTML = `<strong>Nome:</strong> ${name}`;

  let spanSpecies = document.createElement("span");
  spanSpecies.classList.add("span-description-petsList");
  spanSpecies.innerHTML = `<strong>Espécie:</strong> ${species}`;

  let buttonUpdate = document.createElement("button");
  buttonUpdate.classList.add("button-brand");
  buttonUpdate.id = "button-brand";
  buttonUpdate.innerHTML = "Atualizar";
  buttonUpdate.addEventListener("click", () => {
    console.log(id);
    modalBg(updatePetData(id));
    
  });

  figure.appendChild(imgList);
  divDescription.append(spanName, spanSpecies, buttonUpdate);
  liList.append(figure, divDescription);
  ulList.append(liList);
}

function updatePetData(id) {
  const form = document.createElement("form");
  form.classList = "flex column form-general";

  const title = document.createElement("h2");
  title.innerText = "Atualizar pet";
  title.classList = "flex align-center justify-center";

  const newPetName = document.createElement("input");
  newPetName.name = "name";
  newPetName.placeholder = "Nome";

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

  const newPetAvatar = document.createElement("input");
  newPetAvatar.name = "avatar";
  newPetAvatar.placeholder = "Avatar";

  const updateBtn = document.createElement("button");
  updateBtn.classList = "text-center button-brand";
  updateBtn.innerText = "Atualizar";
  updateBtn.type = "submit";

  form.append(title, newPetName, newPetAvatar, breed, updateBtn);

  form.addEventListener("submit", async (e) => {
    e.preventDefault()
    
    const token = JSON.parse(localStorage.getItem("token"))
    let newPetNameReq = newPetName.value
    let newPetAvatarReq = newPetAvatar.value
    let breadReq = "SRD" 
    let breedReq = breed.value
    let petId = id
    console.log(breedReq);
    
    if (newPetNameReq !== "" && newPetAvatarReq !== "" && breedReq !== "Selecione a espécie") {
        
        await updatePetById(newPetNameReq, breadReq, breedReq, newPetAvatarReq,petId, token)

        if (!updatePetById.message) {
            window.location.reload()
        }
        
    }

  });

  return form;
}

export { creatCards };
