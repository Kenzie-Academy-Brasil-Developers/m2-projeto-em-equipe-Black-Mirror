import { creatCards } from "../../scripts/creatCardsProfile.js"
import { readAllMyPets } from "../../scripts/requests.js"

const menuIcon = document.querySelector('#menuIcon')
const headerBtnsMobile = document.querySelector('#headerBtnsMobile')
menuIcon.addEventListener('click', ()=> headerBtnsMobile.classList.toggle('hide'))

async function getApi(){
    const localData = JSON.parse(localStorage.getItem("token"))
    const readMyPets = await readAllMyPets(localData)
    readMyPets.forEach(element =>{
        creatCards(element.name, element.species, element.avatar_url)
    })
}
getApi()