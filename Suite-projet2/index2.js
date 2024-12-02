document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const email = params.get('email');

    const emailDisplay = document.querySelector('strong'); 

    if (email) {
        emailDisplay.textContent = email;
    } else {
        emailDisplay.textContent = "Adresse e-mail introuvable.";
    }

    const dismissButton = document.querySelector('input[type="submit"]');
    dismissButton.addEventListener('click', () => {
        window.location.href = "index1.html";
    });
});
