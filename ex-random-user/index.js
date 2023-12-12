/* 
  ETAPE 1 Récupérer depuis l'API un utilisateur généré aléatoirement
  Puis afficher le nom et le prénom dans la console

  ETAPE 2 : Afficher dans un paragraphe (généré en JS) le nom et le prénom
  
  ETAPE 3 : Afficher dans un second paragraphe son adresse, son téléphone et sa photo
            Rendre cela joli avec du CSS
  
  ETAPE 4 : Ajouter un bouton pour regénérer un nouvel utilisateur sans rafraichir la page
*/
const apiUrl = "https://randomuser.me/api";

// ETAPE 1
/*
fetch(apiUrl).then(function (response) {
  response.json().then(function (data) {
    console.log(data);
    let firstName = data.results[0].name.first;
    let lastName = data.results[0].name.last;
    
    console.log(firstName + ' ' + lastName);
  })
});
*/

// ETAPE 2
/* function displayData(data) {
  let firstName = data.results[0].name.first;
  let lastName = data.results[0].name.last;

  const p = document.createElement('p');
  p.textContent = firstName + ' ' + lastName;
  
  const container = document.querySelector('.container');
  
  container.appendChild(p);
}

fetch(apiUrl).then(function (response) {
  if (response.ok) {
    response.json().then(displayData)
  }
});
 */


function displayData(data) {
  let firstName = data.results[0].name.first;
  let lastName = data.results[0].name.last;
  let adresse = data.results[0].location.street.number+ ' ' + data.results[0].location.street.name + ' ' + data.results[0].location.postcode + ' ' + data.results[0].location.city
  let phone = data.results[0].phone;
  let picture = data.results[0].picture.large;

  const div = document.createElement('div');

  const p = document.createElement('p');
  p.textContent = firstName + ' ' + lastName;

  const pAdresse = document.createElement('p');
  pAdresse.textContent = adresse;

  const pPhone = document.createElement('p');
  pPhone.textContent = phone;

  const pPicture = document.createElement('picture');
  const img = document.createElement('img');
  img.setAttribute("src",picture);
  img.setAttribute("alt","photo de profil user");

  const button = document.createElement('button');
  button.textContent = "Génrérer un nouveau profil"


  const container = document.querySelector('.container');

  container.prepend(pPicture)
  container.prepend(div);
  div.prepend(p);
  div.prepend(pAdresse);
  div.prepend(pPhone);
  pPicture.appendChild(img);
  container.appendChild(button);

}




document.addEventListener("DOMContentLoaded", function(){


  async function randomUser() {

    let r = await fetch('https://randomuser.me/api')
      if (r.ok) {
        let data = await r.json()
        displayData(data)
          console.log(data.results);
      }
  }
  
 let btn = document.querySelector("button")
  randomUser()
 

  btn.addEventListener("click", randomUser)


});