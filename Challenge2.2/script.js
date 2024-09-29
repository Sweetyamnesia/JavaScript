const element = document.getElementById("titre"); 

const button = document.createElement("button"); 

button.textContent = "cliquez ici";

document.body.appendChild(button);

button.addEventListener("click", function() {
    if (element.style.display!=("none")) {
        element.style.display= "none";
    } else {
        element.style.display="block";
    }
});

