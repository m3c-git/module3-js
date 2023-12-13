document.addEventListener("DOMContentLoaded",  async function(){
    
    let gitname = document.querySelector("#gitname");
    let gitnamebtn = document.querySelector(".btn");
    const cart = document.querySelector('.cart');


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


        const plogin = document.createElement('h1');
        plogin.textContent = login;

        const pname = document.createElement('p');
        pname.textContent = name;
        pname.classList.add("pname")

        const pdatecreation = document.createElement('p');
        pdatecreation.textContent = datecreation;

        const pnbrrepo = document.createElement('p');
        pnbrrepo.textContent = nbrrepo;

        const button = document.createElement('button');
        button.classList.add("voirbtn")

        const agitlink = document.createElement('a');
        agitlink.textContent = "Voir"
        agitlink.setAttribute("href",data.html_url)


        cart.appendChild(pPicture).appendChild(img);
        cart.appendChild(plogin);
        cart.appendChild(pname);
        cart.appendChild(pdatecreation);
        cart.appendChild(pnbrrepo);
        cart.appendChild(button).appendChild(agitlink);

    }

    async function infoGitUser() {
        gitnamebtn.addEventListener("click", async (e)=> {
            e.preventDefault()

            let valuegitname = gitname.value.trim()

            try{
             
                const r = await fetch('https://api.github.com/users/' + `${valuegitname}`,{
                    headers: {
                        Accept: 'application/json'
                    }
                })

                if (r.ok) {
                    cart.textContent = "";
                    let data = await r.json()
                    displayData(data)
                    console.log(r);
                } else if(valuegitname === ""){
                    cart.innerText = "Ne champs ne peut pas être vide";
                    cart.style.color = 'blue';                
                }else if (r.status === 404) {

                    cart.innerText = "User non trouvé";
                    cart.style.color = 'blue';
                }
                else {
                    throw new Error(`${valuegitname} non trouvé` , {cause: r});
                }

            } catch (e) {
                cart.innerText = "Impossible de charger l'User...";
                cart.style.color = 'red';
                return;
            }
        
        })
        
    }; 
    await infoGitUser()

});