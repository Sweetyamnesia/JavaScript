const element = document.getElementById("titre"); 

const button = document.createElement("button"); 

button.textContent = "cliquez ici";

document.body.appendChild(button);

button.addEventListener("click", function() {
    titre.style.display = 'block';
});

