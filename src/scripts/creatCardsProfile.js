function creatCards(name, species, img){

    const ulList = document.querySelector(".ul-petsList-profile")

    let liList = document.createElement("li")
    liList.classList.add("li-petsList-profile", "flex", "align-center")

    let imgList = document.createElement("img")
    imgList.classList.add("img-petsList")
    imgList.src = `${img}`

    let divDescription = document.createElement("div")
    divDescription.classList.add("box-description-petsList", "flex", "column")

    let spanName = document.createElement("span")
    spanName.classList.add("span-description-petsList")
    spanName.innerHTML = `<strong>Nome:</strong> ${name}`

    let spanSpecies = document.createElement("span")
    spanSpecies.classList.add("span-description-petsList")
    spanSpecies.innerHTML = `<strong>Espécie:</strong> ${species}`

    let buttonUpdate = document.createElement("button")
    buttonUpdate.classList.add("button-brand")
    buttonUpdate.id = "button-brand"
    buttonUpdate.innerHTML = "Atualizar"

    divDescription.append(spanName, spanSpecies, buttonUpdate)
    liList.append(imgList, divDescription)
    ulList.append(liList)
}

export {
    creatCards,
}