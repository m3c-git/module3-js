document.addEventListener("DOMContentLoaded", function(){

  let btn = document.querySelector("button")

  async function catInfos() {

    let r = await fetch('https://catfact.ninja/fact')
 console.log(r);
      if (r.ok) {
        let data = await r.json()
        let fact = document.querySelector(".fact")
          fact.innerText = data.fact
          console.log(data.fact);
      }
  }

  catInfos()


  btn.addEventListener("click", catInfos)


});


