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
function displayData(data) {
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
