document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('form'); 

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const emailInput = document.getElementById('required');
        const emailValue = emailInput.value; 
        const error = document.getElementById('error');

        const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);

        if (emailRegex.test(emailValue)) {
            error.style.display = 'none'; 
            emailInput.classList.remove('input-error'); 
            window.location.href = `index2.html?email=${encodeURIComponent(emailValue)}`;
        } else {
            error.style.display = 'block'; 
            emailInput.classList.add('input-error'); 
        }
    });

    document.getElementById('required').addEventListener('input', function () {
        const emailInput = document.getElementById('required');
        const error = document.getElementById('error');

        if (emailInput.classList.contains('input-error')) {
            emailInput.classList.remove('input-error'); 
            error.style.display = 'none';
        }
    });
});
