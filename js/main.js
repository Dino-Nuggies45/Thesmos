document.querySelectorAll('.god-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        const god = icon.dataset.god;
        if (god) {
            window.location.href = `${god}.html`;
        }
    });
});