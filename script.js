// Language Management
let currentLanguage = 'fr';

const translations = {
    fr: {
        'Joyeux Anniversaire': 'Joyeux Anniversaire',
        'Happy Birthday': 'Joyeux Anniversaire',
        'Célébrer! 🎉': 'Célébrer! 🎉',
        'Celebrate! 🎉': 'Célébrer! 🎉',
        'Un jour très spécial': 'Un jour très spécial',
        'A Very Special Day': 'Un jour très spécial',
        'Nos meilleurs vœux': 'Nos meilleurs vœux',
        'Our Best Wishes': 'Nos meilleurs vœux',
        'Galerie de fête': 'Galerie de fête',
        'Party Gallery': 'Galerie de fête',
        'Bonheur': 'Bonheur',
        'Happiness': 'Bonheur',
        'Réussite': 'Réussite',
        'Success': 'Réussite',
        'Amour': 'Amour',
        'Love': 'Amour',
        'Ballons festifs': 'Ballons festifs',
        'Festive Balloons': 'Ballons festifs',
        'Gâteau délicieux': 'Gâteau délicieux',
        'Delicious Cake': 'Gâteau délicieux',
        'Décorations colorées': 'Décorations colorées',
        'Colorful Decorations': 'Décorations colorées',
        'Ambiance dorée': 'Ambiance dorée',
        'Golden Atmosphere': 'Ambiance dorée',
        'Avec tout notre amour pour ton anniversaire! 💕': 'Avec tout notre amour pour ton anniversaire! 💕',
        'With all our love for your birthday! 💕': 'Avec tout notre amour pour ton anniversaire! 💕'
    },
    en: {
        'Joyeux Anniversaire': 'Happy Birthday',
        'Happy Birthday': 'Happy Birthday',
        'Célébrer! 🎉': 'Celebrate! 🎉',
        'Celebrate! 🎉': 'Celebrate! 🎉',
        'Un jour très spécial': 'A Very Special Day',
        'A Very Special Day': 'A Very Special Day',
        'Nos meilleurs vœux': 'Our Best Wishes',
        'Our Best Wishes': 'Our Best Wishes',
        'Galerie de fête': 'Party Gallery',
        'Party Gallery': 'Party Gallery',
        'Bonheur': 'Happiness',
        'Happiness': 'Happiness',
        'Réussite': 'Success',
        'Success': 'Success',
        'Amour': 'Love',
        'Love': 'Love',
        'Ballons festifs': 'Festive Balloons',
        'Festive Balloons': 'Festive Balloons',
        'Gâteau délicieux': 'Delicious Cake',
        'Delicious Cake': 'Delicious Cake',
        'Décorations colorées': 'Colorful Decorations',
        'Colorful Decorations': 'Colorful Decorations',
        'Ambiance dorée': 'Golden Atmosphere',
        'Golden Atmosphere': 'Golden Atmosphere',
        'Avec tout notre amour pour ton anniversaire! 💕': 'With all our love for your birthday! 💕',
        'With all our love for your birthday! 💕': 'With all our love for your birthday! 💕'
    }
};

// Confetti Animation
function createConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['#ff6b9d', '#4ecdc4', '#45b7d1', '#f9ca24', '#ff9ff3', '#54a0ff'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confettiContainer.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 5000);
    }
}

// Language Switching
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');
    
    // Update all translatable elements
    document.querySelectorAll('[data-fr][data-en]').forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            element.textContent = text;
        }
    });
}

// Celebration Effects
function celebrate() {
    // Create confetti
    createConfetti();
    
    // Add celebration class to body for additional effects
    document.body.classList.add('celebrating');
    
    // Play celebration sound (if available)
    try {
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
        audio.play().catch(() => {
            // Ignore audio errors
        });
    } catch (e) {
        // Ignore audio errors
    }
    
    // Remove celebration class after animation
    setTimeout(() => {
        document.body.classList.remove('celebrating');
    }, 3000);
}

// Scroll Animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.message-card, .wish-card, .gallery-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
}

// Balloon Hover Effects
function addBalloonEffects() {
    const balloons = document.querySelectorAll('.balloon');
    
    balloons.forEach(balloon => {
        balloon.addEventListener('mouseenter', () => {
            balloon.style.transform = 'translateY(-30px) scale(1.1)';
            balloon.style.transition = 'all 0.3s ease';
        });
        
        balloon.addEventListener('mouseleave', () => {
            balloon.style.transform = '';
            balloon.style.transition = '';
        });
    });
}

// Gallery Image Effects
function addGalleryEffects() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Add a sparkle effect on click
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.position = 'absolute';
            sparkle.style.top = '50%';
            sparkle.style.left = '50%';
            sparkle.style.transform = 'translate(-50%, -50%)';
            sparkle.style.fontSize = '2rem';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.animation = 'sparkle 1s ease-out forwards';
            
            item.style.position = 'relative';
            item.appendChild(sparkle);
            
            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 1000);
        });
    });
}

// Auto Confetti
function autoConfetti() {
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance every 5 seconds
            createConfetti();
        }
    }, 5000);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Language switching
    document.getElementById('lang-fr').addEventListener('click', () => switchLanguage('fr'));
    document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));
    
    // Celebration button
    document.getElementById('celebrate-btn').addEventListener('click', celebrate);
    
    // Scroll animations
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Add interactive effects
    addBalloonEffects();
    addGalleryEffects();
    
    // Start auto confetti
    autoConfetti();
    
    // Initial confetti burst
    setTimeout(createConfetti, 1000);
    
    // Initial scroll check
    handleScrollAnimations();
});

// Add some CSS for additional animations
const additionalStyles = `
    .celebrating .hero-section {
        animation: pulse 0.5s ease-in-out 3;
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
    }
    
    .animate {
        animation: slideInUp 0.6s ease-out;
    }
    
    .balloon:hover {
        cursor: pointer;
    }
    
    .gallery-item:hover {
        cursor: pointer;
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

