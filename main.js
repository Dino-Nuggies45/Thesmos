document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    const intro = document.createElement('p');
    intro.textContent = 'Welcome to Thesmos, a place where you can get plans and ideas relating to each greek god or goddess.';
    app.appendChild(intro);
});