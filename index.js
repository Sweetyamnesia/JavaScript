document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('form');
    
    form.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = document.getElementById('required').value;

    const error = document.getElementById('error')

    const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);

    if(emailRegex.test(emailInput)) {
        window.location.href = `index2.html?email=${emailInput}`
    } else {
        error.style.display = 'block';
    }
})
});