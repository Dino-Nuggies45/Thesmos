document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const god = params.get('god');

    fetch(`data/gods/${god}/cards.json`)
        .then(res => res.json())
        .then(card => {
            setTimeout(() => {
                document.getElementById("loading-screen").classList.add("hidden");

                const cards = cards[Math.floor(Math.random() * cards.length)];
                document.getElementById("card-name").textContent = cards.name;
                document.getElementById("card-description").textContent = cards.description;

                document.getElementById("continue-btn").addEventListener("click", () => {
                    document.getElementById("card-section").classList.add("hidden");
                    loadAdvice(card, god);
                });

            document.getElementById("card-section").classList.remove("hidden");
        }, 3000);
    });  
});

function loadAdvice(card, god) {
    document.getElementById("card-adice").textContent = card.advice;
    document.getElementById("card-execution").textContent = card-execution;
    document.getElementById("card-followup").textContent = card-followup;

    fetch(`data/gods.json`)
        .then(res => res.json())
        .then(gods => {
            const godData = gods[god];
            document.getElementById("god-name").textContent = godData.name;
            document.getElementById("god-portait").src = godData.portrait;
            document.getElementById("god-info").innerHTML = godData.bio;
        });
    document.getElementById("advice-section").classList.remove("hidden");

}

