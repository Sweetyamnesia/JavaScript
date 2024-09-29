const button = document.createElement('button');
button.textContent = '+';

const element = document.getElementById("nbr");

let compteur = 0;
let compteurElement = document.createElement('compteur');

button.addEventListener("click", function() {
    /*/if (compteur++) {
    element.textContent = compteur;
    }/*/
    element.textContent = compteur++;
  });


document.body.appendChild(button);
document.body.appendChild(compteurElement)


