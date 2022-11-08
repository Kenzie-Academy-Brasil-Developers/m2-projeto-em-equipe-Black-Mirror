const profileCardsSection = document.querySelector('.section-petsList-profile')
const userData = JSON.parse(localStorage.getItem('user'))

const renderProfileData = () => {

   const section = document.createElement('section')
   section.classList = 'profile flex column align-center'

   const span = document.createElement('span')
   span.classList = 'profile-banner flex column'

   const div = document.createElement('div')
   div.classList = 'purple-profile-div'

   const figure = document.createElement('figure')
   figure.classList = 'profile-picture-container flex align-center'

   const img = document.createElement('img')
   img.classList = 'profile-picture'
   img.src = userData.avatar_url

   const personal = document.createElement('span')
   personal.classList = 'profile-personal-data flex column'

   const title = document.createElement('h2')
   title.classList = 'profile-title'
   title.innerText = 'Dados pessoais'

   const name = document.createElement('div')
   name.classList = 'name-container flex'

   const nameDesc = document.createElement('p')
   nameDesc.innerText = 'Nome: '
   nameDesc.classList = 'profile-desc'

   const userName = document.createElement('p')
   userName.innerText = userData.name

   const email = document.createElement('div')
   email.classList = 'email-container flex'

   const emailDesc = document.createElement('p')
   emailDesc.innerText = 'E-mail:'
   emailDesc.classList = 'profile-desc'

   const userEmail = document.createElement('p')
   userEmail.innerText = userData.email
   
   const buttons = document.createElement('span')
   buttons.classList = 'profile-buttons-container flex'

   const updateInfoBtn = document.createElement('button')
   updateInfoBtn.classList = 'update-info-btn button-brand'
   updateInfoBtn.innerText = 'Atualizar Informações'

   const deleteAccBtn = document.createElement('button')
   deleteAccBtn.classList = 'delete-acc-btn button-red'
   deleteAccBtn.innerText = 'Deletar conta'

   figure.append(img)

   span.append(div, figure)

   name.append(nameDesc, userName)

   email.append(emailDesc,userEmail)

   buttons.append(updateInfoBtn, deleteAccBtn)

   personal.append(title, name, email, buttons)

   section.append(span, personal)

   profileCardsSection.insertAdjacentElement('beforebegin', section)
}

renderProfileData()