function createParticles() {
    const particleCount = 20;
    const particleContainer = document.getElementById("particle-container");

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";
        particle.textContent = "+1";
        particleContainer.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}