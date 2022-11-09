async function creatUser(name, email, password, avatarUrl){
    try{

        const data = {
            name: `${name}`,
            email: `${email}`,
            password: `${password}`,
            avatar_url: `${avatarUrl}`
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(data)
        }

        const responseJson = await fetch("https://m2-api-adot-pet.herokuapp.com/users", options)
        const response = await responseJson.json()
        console.log(response);
        return response

    } catch(error){
       return error
    }
}

async function loginUser(email, password){
    try{
        const data = {
            email: `${email}`,
            password: `${password}`
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


async function readAll(token){
    try{
        const dataJson = await fetch("https://m2-api-adot-pet.herokuapp.com/users", {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${token.token}`
            },
        })

        const response = await dataJson.json()
        return response

    } catch(error){
        return error
    }
}


async function readProfile(token){
    try{
        const dataJson = await fetch("https://m2-api-adot-pet.herokuapp.com/users/profile", {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${token.token}`
            }
        })

        const response = await dataJson.json()
        return response

    } catch(error){
        return error
    }
}


async function updateProfile(avatarUrl, name, token){
    try{
        const data = {
            avatar_url: `${avatarUrl}`,
            name: `${name}`
        }

        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)
        }

        const responseJson = await fetch("https://m2-api-adot-pet.herokuapp.com/users/profile", options)
        const response = await responseJson.json()
        return response

    } catch(error){
        return error
    }
}


async function deleteProfile(token){
    try{
        const dataJson = await fetch("https://m2-api-adot-pet.herokuapp.com/users/profile", {
            method: 'DELETE',
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

async function creatPet(name, bread, species, avatarUrl, token){
    try{
        const data = {
            name: `${name}`,
            bread: `${bread}`,
            species: `${species}`,
            avatar_url: `${avatarUrl}`
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)
        }

        const responseJson = await fetch("https://m2-api-adot-pet.herokuapp.com/pets", options)
        const response = await responseJson.json()
        return response

    } catch(error){
        return error
    }
}


async function readAllPets(token) {
    try{
        const dataJson = await fetch("https://m2-api-adot-pet.herokuapp.com/pets", {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${token.token}`
            }
        })

        const response = await dataJson.json()
        return response

    } catch(error){
        return error
    }
}


async function readAllMyPets(token){
    try{
        const dataJson = await fetch("https://m2-api-adot-pet.herokuapp.com/pets/my_pets", {
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


async function updatePetById(name, bread, species, avatarUrl, id, token){
    try{
        const data = {
            name: `${name}`,
            bread: `${bread}`,
            species: `${species}`,
            avatar_url: `${avatarUrl}`
        }

        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)
        }

        const responseJson = await fetch(`https://m2-api-adot-pet.herokuapp.com/pets/${id}`, options)
        const response = await responseJson.json()
        return response

    } catch(error){
        return error
    }
}


async function deletePetById(id, token){
    try{
        const dataJson = await fetch(`https://m2-api-adot-pet.herokuapp.com/pets/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${token.token}`
            }
        })

        const response = await dataJson.json()
        return response

    } catch(error){
        return error
    }
}


async function creatAdoption(petId, token){
    try{
        const data = {
            pet_id: `${petId}`
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)
        }

        const responseJson = await fetch("https://m2-api-adot-pet.herokuapp.com/adoptions", options)
        const response = await responseJson.json()
        return response

    } catch(error){
        return error
    }
}


async function readAllAdoptions(token){
    try{
        const dataJson = await fetch("https://m2-api-adot-pet.herokuapp.com/adoptions", {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${token.token}`
            }
        })

        const response = await dataJson.json()
        return response

    } catch(error){
        return error
    }
}


async function readAdoptionById(id, token){
    try{
        const dataJson = await fetch(`https://m2-api-adot-pet.herokuapp.com/adoptions/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${token.token}`
            }
        })

        const response = await dataJson.json()
        return response

    } catch(error){
        return error
    }
}


async function readMyAdoptions(token){
    try{
        const dataJson = await fetch("https://m2-api-adot-pet.herokuapp.com/adoptions/myAdoptions", {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${token.token}`
            }
        })

        const response = await dataJson.json()
        return response

    } catch(error){
        return error
    }
}


async function updateAdoptionById(adopterId, petId, id, token){
    try{
        const data = {
            adopter_id: `${adopterId}`,
            pet_id: `${petId}`
        }

        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)
        }

        const responseJson = await fetch(`https://m2-api-adot-pet.herokuapp.com/adoptions/update/${id}`, options)
        const response = await responseJson.json()
        return response

    } catch(error){
        return error
    }
}


async function deleteAdoptionById(id, token){
    try{
        const dataJson = await fetch(`https://m2-api-adot-pet.herokuapp.com/adoptions/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${token.token}`
            }
        })

        const response = await dataJson.json()
        return response

    } catch(error){
        return error
    }
}

export {
    creatUser,
    loginUser,
    readAll,
    readProfile,
    updateProfile,
    deleteProfile,
    creatPet,
    readAllPets,
    readAllMyPets,
    updatePetById,
    deletePetById,
    creatAdoption,
    readAllAdoptions,
    readAdoptionById,
    readMyAdoptions,
    updateAdoptionById,
    deleteAdoptionById
}