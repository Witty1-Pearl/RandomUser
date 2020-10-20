let to = document.getElementById('to')
        let Elsie = document.getElementById("Dorcas");
        let img = document.getElementById("img");
        let btn = document.getElementById("btn");
        btn.addEventListener('click', getJason);
        to.addEventListener('mouseover', displayButton );
        document.addEventListener('DOMContentLoaded',getJason );
        const URL = 'https://randomuser.me/api/'
        function getJason() {
        fetch(URL)
        .then(function(response){
            if(!response.ok){
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then(function(responseAsJson){
            Dorcas.innerHTML = responseAsJson.results[0].name.title ;
            Dorcas.innerHTML = responseAsJson.results[0].name.first ;
            Dorcas.innerHTML = responseAsJson.results[0].name.last ;
            img.src = responseAsJson.results[0].picture.large;
        })
        .catch(function(error){
            console.log(error);
        })
     }
       function displayButton(){
          btn.style.display= "block";
       } 