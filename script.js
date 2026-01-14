// Page Navigation
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show the target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

// Landing Page -> Envelope Page
function goToEnvelope() {
    showPage('envelope-page');
}

// Open Envelope Animation
function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    
    if (!envelope.classList.contains('open')) {
        envelope.classList.add('open');
        
        // Show letter after envelope opens
        setTimeout(() => {
            letter.classList.add('visible');
        }, 600);
    }
}

// Handle Yes Button
function handleYes() {
    showPage('details-page');
}

// Handle First No
function handleNo() {
    showPage('first-no-page');
}

// Handle Second No
function handleSecondNo() {
    showPage('second-no-page');
}

// Handle Third No
function handleThirdNo() {
    showPage('third-no-page');
}

// Go to Thank You Page
function goToThankYou() {
    showPage('thankyou-page');
}

// Add floating hearts animation
function createFloatingHearts() {
    const heartsContainer = document.querySelectorAll('.hearts-background');
    const heartEmojis = ['💕', '💖', '💗', '💓', '💝'];
    
    heartsContainer.forEach(container => {
        setInterval(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 10) + 's';
            heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
            
            container.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                heart.remove();
            }, 15000);
        }, 3000);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
});
