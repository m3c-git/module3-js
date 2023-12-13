document.addEventListener("DOMContentLoaded",  async function(){
    
    let gitname = document.querySelector("#gitname");
    let gitnamebtn = document.querySelector(".btn");


    

function displayData(data) {

    function datesDiff() {
        let nbrjourdiff = Date.now() - new Date(data.created_at).getTime()
        return Math.ceil(nbrjourdiff/(1000*60*60*24));
      }

  let avatar = data.avatar_url;
  let login = data.login;
  let name = data.name;
  let datecreation =`Utilisateur créé le ${new Date(data.created_at).toLocaleDateString("fr")}, il y a ${datesDiff()} jours`;
  let nbrrepo = `Nombre de repos ${data.public_repos}`;

  const pPicture = document.createElement('picture');
  const img = document.createElement('img');
  img.setAttribute("src",avatar);
  img.setAttribute("alt","avatar git");


  const plogin = document.createElement('p');
  plogin.textContent = login;

  const pname = document.createElement('p');
  pname.textContent = name;

  const pdatecreation = document.createElement('p');
  pdatecreation.textContent = datecreation;

  const pnbrrepo = document.createElement('p');
  pnbrrepo.textContent = nbrrepo;

  const button = document.createElement('button');
  button.textContent = ""

  const agitlink = document.createElement('a');
  agitlink.textContent = "Voir"
  agitlink.setAttribute("href",data.html_url)

  /* 
  


  

  pPicture.remove()
 */
const cart = document.querySelector('.cart');

    cart.appendChild(pPicture).appendChild(img);
    cart.appendChild(plogin);
    cart.appendChild(pname);
    cart.appendChild(pdatecreation);
    cart.appendChild(pnbrrepo);
    cart.appendChild(button).appendChild(agitlink);

}


async function infoGitUser() {
    gitnamebtn.addEventListener("click", async ()=> {
        let valuegitname = gitname.value
        console.log(valuegitname)

        let r = await fetch('https://api.github.com/users/m3c-git')
        if (r.ok) {
            let data = await r.json()
            displayData(data)
            console.log(data);
        }

    
    })

    
  }



async function refresh() {

  location.reload()

};





    await infoGitUser()



});