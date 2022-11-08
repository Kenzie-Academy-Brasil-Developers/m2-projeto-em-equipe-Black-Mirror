function creatCards(name, species, img){

    const ulList = document.querySelector(".ul-petsList-profile")

    let liList = document.createElement("li")
    liList.classList.add("li-petsList-profile", "flex", "align-center")

    let figure = document.createElement("figure")
    figure.classList.add("figure-profile")

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

    figure.appendChild(imgList)
    divDescription.append(spanName, spanSpecies, buttonUpdate)
    liList.append(figure, divDescription)
    ulList.append(liList)
}

export {
    creatCards,
}