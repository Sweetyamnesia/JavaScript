document.addEventListener('DOMContentLoaded', (event) => {
    const submit = document.getElementById('submit')

    submit.addEventListener('click', function () {    
    return location = "file:///Users/angelarhin/Desktop/Projets-dev-web/JavaScript/Suite-projet2/index1.html?";
    });

    function getQueryParameter(email) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(email);
    }

   const email = getQueryParameter('email');
    const emailDisplay = document.getElementById('email');


    if(email) {
        emailDisplay.textContent = email;
    } else {
        emailDisplay.textContent = 'No email found'
    }

});


/*/
Ce qu'il me manque : 
- l'affichage du mail qui a été écrit dans la page 1/*/