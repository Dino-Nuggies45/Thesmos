document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    const deityIcons = document.querySelectorAll(".deity");

    deityIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            const deity = icon.getAttribute("data-deity");
            if (deity) {
                window.location.href = `${deity}.html`;
            };
        });
    });
});