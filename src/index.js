document.addEventListener("DOMContentLoaded", () => {
    
    populateTrainers()

    function populateTrainers() {
        fetch("http://localhost:3000/pups")
            .then(function (response) {
                return response.json();
            })
            .then(function (pups) {
                pups.forEach(function (pup) {
                    displayPup(pup);
                });
            });
    }

    function displayPup(pup) {
        const dogBar = document.getElementById("dog-bar")
        const span = document.createElement('span');
        span.innerText = `${pup.name}`;
        dogBar.appendChild(span);
        pupInfo(span, pup);
    }

    function pupInfo(span, pup) {
        span.addEventListener("click", function(event) {
            const dogInfo = document.getElementById("dog-info")
            dogInfo.innerHTML = `
            <img src=${pup.image}>
            <h2>${pup.name}</h2>
            <button>Good Dog!</button>`