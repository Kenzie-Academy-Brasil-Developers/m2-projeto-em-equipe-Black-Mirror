import { creatCards } from "../../scripts/creatCardsProfile.js"
import { readAllMyPets } from "../../scripts/requests.js"

const menuIcon = document.querySelector('#menuIcon')
const headerBtnsMobile = document.querySelector('#headerBtnsMobile')
menuIcon.addEventListener('click', ()=> {
    headerBtnsMobile.classList.toggle('hide')
    if(menuIcon.src === "http://127.0.0.1:5500/src/assets/img/menuIcon.svg"){

        menuIcon.src = "/src/assets/img/menuIcon-X.svg"
    } else {
        menuIcon.src = "/src/assets/img/menuIcon.svg"
    }
})

async function getApi(){
    const localData = JSON.parse(localStorage.getItem("token"))
    const readMyPets = await readAllMyPets(localData)
    readMyPets.forEach(element =>{
        creatCards(element.name, element.species, element.avatar_url)
    })
}
getApi()