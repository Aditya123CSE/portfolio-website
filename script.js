console.log("Portfolio loaded successfully.");

document.querySelectorAll(".project-card").forEach(card => {
card.addEventListener("mouseenter", () => {
card.style.transform = "translateY(-3px)";
});

card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
});

});
