const navButton = document.querySelectorAll(".Nav-Btn");

navButton.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("В розробці");
    });
});

const joinButton = document.querySelector(".Join-Btn");

joinButton.addEventListener("click", () => {
    alert("В розробці");
});