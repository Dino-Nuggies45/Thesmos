document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    const deityIcons = document.querySelectorAll(".deity");

    deityIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            const deity = icon.getAttribute("data-deity");
            if (deity === "Aphrodite") {
                loadAphroditeAnimation();
            } else {
                app.innerHTML = `<p>${deity} page coming soon!</p>`;
            }
        });
    });


    function loadAphroditeAnimation() {
        app.innerHTML = `
            <div class="aphrodite-animation">
                ${getClamShellSVG()}
            </div>
        `;

        const shell = app.querySelector(".clam-shell");
        if (!shell) return;

        setTimeout(() => {
            shell.classList.add("open");
        }, 500);

        setTimeout(() => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.textContent = "Aphrodite Guidance Card";
            app.innerHTML = "";
            app.appendChild(card);

            setTimeout(() => {
                card.classList.add("show");
            }, 1000);
        }, 2500);
    }

    function getClamShellSVG() {
        return `
        <svg class="clam-shell" width="200" height="200" viewBox="0 0 200 200">
            <path d="M 50 150 Q 100 200 150 150 Q 100 170 50 150 Z" fill="#f7c6d0" />
            <path class="top-shell" d="M 50 150 Q 100 50 150 150 Q 100 130 50 150 Z" fill="#f4a6b8" />
        </svg>
        `;
    }
});