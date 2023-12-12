document.addEventListener("DOMContentLoaded", function(){

  let btn = document.querySelector("button")

  async function catInfos() {

    fetch('https://catfact.ninja/fact').then(function (response) {
      console.log(response);
      if (response.ok) {
        response.json().then(function (data) {
          let fact = document.querySelector(".fact")
          fact.innerText = data.fact
          console.log(data.fact);
        });
      }
    });

  }

  catInfos()


  btn.addEventListener("click", catInfos)


});


