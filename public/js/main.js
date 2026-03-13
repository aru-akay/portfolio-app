// Toggle Dark/Light theme
function toggleTheme() {
    document.body.classList.toggle('light-theme');
}

// Simple form submit alert
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e){
        e.preventDefault();
        alert('Thank you! Your message has been sent.');
        form.reset();
    });
}