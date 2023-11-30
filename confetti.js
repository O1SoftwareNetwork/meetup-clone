const confettiContainer = document.querySelector('.confetti-container');

const shootConfetti = () => {
    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.animationDuration = `${0.5 + Math.random()}s`;
        confettiPiece.style.animationDelay = `${Math.random() * 2}s`;
        confettiContainer.appendChild(confettiPiece);
    }
}