const button = document.getElementById("1")

const button2 = document.getElementById("2")

const element = document.getElementById("nbr");

let compteur = 0;

button.addEventListener("click", function() {
    compteur = compteur + 1;
    element.innerHTML = compteur;
});

button2.addEventListener("click", function() {
    compteur--;
    element.textContent = compteur;
});

