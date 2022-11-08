const allPetsList = document.querySelector(".list")
const userADM = await loginUser()

const tokenStorage = JSON.parse(localStorage.getItem("token"))



export async function renderCard() {

    const allPets = await readAllPets(userADM.token)

    allPets.forEach((pets)  => {

        const petimg = pets.avatar_url
        const petname = pets.name
        const petSpecies = pets.species

        const card = createCard(petimg,petname,petSpecies)
        allPetsList.append(card)

    })
   
}

async function readAllPets(token) {
    try{
        const dataJson = await fetch("https://m2-api-adot-pet.herokuapp.com/pets", {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${token}` 
            }
        })

        const response = await dataJson.json()
        return response

    } catch(error){
        return error
    }
}

async function loginUser(){
    try{
        const data = {
            email: "admin@mail.com",
            password: "admin"
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(data)
        }

        const responseJson = await fetch("https://m2-api-adot-pet.herokuapp.com/session/login", options)
        const response = await responseJson.json()
        return response

    } catch(error){
        return error
    }
}

function createCard(img,name,species) {

    const cardContainer = document.createElement("li")
    const figCap = document.createElement("figcaption")
    const petImg = document.createElement("img")
    const petName = document.createElement("h2")
    const petSpecies = document.createElement("p")
    const btnAdopt = document.createElement("button")

    cardContainer.classList = 'card flex column'
    petImg.classList = 'card-img'
    petName.classList = 'card-title'
    
   
    if(tokenStorage === null){
       
        btnAdopt.classList = 'button-green btn-adopt'

    }else{

        btnAdopt.classList = "button-green btn-on align-self-center"
       

    }

    petImg.src = img
    petName.innerText = name
    petSpecies.innerText = species
    btnAdopt.innerText = "Me Adota?"

    figCap.append(petImg)
    cardContainer.append(figCap,petName,petSpecies,btnAdopt)

    return cardContainer

}