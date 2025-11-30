document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Typewriter Effect (Animația de scris) ---
    const textElement = document.getElementById('typewriter');
    const phrases = ["Software Quality.", "Automation Scripts.", "Game Worlds.", "Reliable Systems."];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }

        const speed = isDeleting ? 100 : 150;
        setTimeout(type, speed);
    }
    
    // Pornim efectul de scris dacă elementul există
    if(textElement) type();


    // --- 2. Filter Projects Logic ---
    window.filterSelection = function(category) {
        const cards = document.getElementsByClassName("project-card");
        const btns = document.getElementsByClassName("filter-btn");

        // Activare buton vizual
        for (let btn of btns) {
            btn.classList.remove("active");
            if (btn.innerText.toLowerCase().includes(category === 'all' ? 'all' : 
                category === 'qa' ? 'qa' : 
                category === 'gamedev' ? 'game' : 'eng')) {
                btn.classList.add("active");
            }
        }

        // Show/Hide cards
        for (let i = 0; i < cards.length; i++) {
            if (category === "all") {
                cards[i].style.display = "flex";
            } else {
                if (cards[i].classList.contains(category)) {
                    cards[i].style.display = "flex";
                } else {
                    cards[i].style.display = "none";
                }
            }
        }
    }


    // --- 3. Back to Top Button ---
    const mybutton = document.getElementById("backToTop");

    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    };

    window.topFunction = function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }


    // --- 4. Easter Egg (Konami Code) ---
    const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let currentInput = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === secretCode[currentInput]) {
            currentInput++;
            if (currentInput === secretCode.length) {
                alert("👾 LEVEL UP! You found the Tester's Secret! 🎮");
                currentInput = 0;
            }
        } else {
            currentInput = 0;
        }
    });

});