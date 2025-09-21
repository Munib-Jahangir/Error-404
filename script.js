// Roast messages array with maximum roasting power
        const roastMessages = [
            "404 Rishta Not Found 💔",
            "Tumhari degree ki tarah yeh file bhi useless hai.",
            "File bhi gayi, izzat bhi gayi.",
            "Even Google Baba can't find your ex.",
            "Server down hai, jaise WAPDA light.",
            "404 – Tumhari hope aur bijli dono gayab hain.",
            "Yahan kuch nai hai, jaise tumhari future plans.",
            "Page not found, jaise tumhari motivation.",
            "Yeh page gaya Lumber 1 banne.",
            "Not found? Jaise Pakistan ki electricity!",
            "Yeh page hai hi nahi, jaise tumhari coding skills.",
            "Internet connection hai ya PTCL wala hai?",
            "Page nahi mila? Chalo koi nahi, chai peete hain!",
            "Your coding skills are like this page - NOT FOUND!",
            "This page is missing, just like your common sense!",
            "Error 404: Brain not found!",
            "This page has left the chat, just like your ex!",
            "Not found? Story of my life!",
            "This page is on a permanent coffee break!",
            "If this page was a person, it would ghost you!"
        ];
        
        // Escape messages for the button
        const escapeMessages = [
            "Moye Moye 😂",
            "Ab kahan jaoge?",
            "Bhai rehne do...",
            "Pakro isay!",
            "Yeh button hai tum beywaqoof 🖕",
            "Chhor do yaar!",
            "Nahi milega!",
            "Phir se try karo!",
            "Haha! Nope!",
            "Nice try!",
            "Not today!",
            "You wish!",
            "As if!",
            "Dream on!",
            "In your dreams!"
        ];
        
        // DOM elements
        const roastMessageElement = document.getElementById('roast-message');
        const goHomeButton = document.getElementById('go-home');
        const helpButton = document.getElementById('help-btn');
        const supportButton = document.getElementById('support-btn');
        const roastButton = document.getElementById('roast-btn');
        const brokenHeart = document.getElementById('broken-heart');
        const soundControl = document.getElementById('sound-control');
        const soundEffect = document.getElementById('sound-effect');
        const moyeSound = document.getElementById('moye-sound');
        const failSound = document.getElementById('fail-sound');
        
        // Set random roast message on page load
        window.addEventListener('DOMContentLoaded', () => {
            const randomMessage = roastMessages[Math.floor(Math.random() * roastMessages.length)];
            roastMessageElement.textContent = randomMessage;
            
            // Play fail sound on load
            setTimeout(() => {
                failSound.play().catch(e => console.log("Audio play failed:", e));
            }, 500);
        });
        
        // Runaway button functionality
        goHomeButton.addEventListener('mouseover', (e) => {
            // Add jitter effect first
            goHomeButton.style.transition = 'all 0.1s ease';
            goHomeButton.style.transform = 'translate(' + 
                (Math.random() * 20 - 10) + 'px, ' + 
                (Math.random() * 20 - 10) + 'px)';
            
            // Change button text to a random escape message
            const randomEscape = escapeMessages[Math.floor(Math.random() * escapeMessages.length)];
            goHomeButton.textContent = randomEscape;
            
            // Play sound effect
            moyeSound.currentTime = 0;
            moyeSound.play().catch(e => console.log("Audio play failed:", e));
            
            // Then move the button away from cursor
            setTimeout(() => {
                const x = Math.random() * (window.innerWidth - 200);
                const y = Math.random() * (window.innerHeight - 100);
                
                goHomeButton.style.position = 'fixed';
                goHomeButton.style.left = x + 'px';
                goHomeButton.style.top = y + 'px';
                goHomeButton.style.transform = 'none';
                goHomeButton.style.transition = 'all 0.5s ease';
            }, 100);
        });
        
        // Reset button position when clicked (if user manages to click it)
        goHomeButton.addEventListener('click', () => {
            alert("Just kidding! There's no home to go to. You're stuck here with me! 😈");
            goHomeButton.style.position = '';
            goHomeButton.style.left = '';
            goHomeButton.style.top = '';
            goHomeButton.textContent = 'Go Home';
        });
        
        // Fake links that reload the page
        helpButton.addEventListener('click', () => {
            document.body.style.opacity = '0.5';
            setTimeout(() => {
                window.location.reload();
            }, 300);
        });
        
        supportButton.addEventListener('click', () => {
            document.body.style.opacity = '0.5';
            setTimeout(() => {
                window.location.reload();
            }, 300);
        });
        
        // More roasts button
        roastButton.addEventListener('click', () => {
            const randomMessage = roastMessages[Math.floor(Math.random() * roastMessages.length)];
            roastMessageElement.textContent = randomMessage;
            
            // Play laugh sound
            moyeSound.currentTime = 0;
            moyeSound.play().catch(e => console.log("Audio play failed:", e));
        });
        
        // Broken heart animation
        brokenHeart.addEventListener('mouseover', () => {
            brokenHeart.classList.add('broken');
            
            // Play break sound
            soundEffect.currentTime = 0;
            soundEffect.play().catch(e => console.log("Audio play failed:", e));
        });
        
        // Sound control
        let isMuted = true;
        
        soundControl.addEventListener('click', () => {
            isMuted = !isMuted;
            
            if (isMuted) {
                soundEffect.pause();
                moyeSound.pause();
                failSound.pause();
                soundControl.innerHTML = '<i class="fas fa-volume-mute"></i>';
            } else {
                soundControl.innerHTML = '<i class="fas fa-volume-up"></i>';
            }
        });
        
        // Easter egg: keyboard press spawns floating text
        document.addEventListener('keydown', (e) => {
            createFloatingText(e);
        });
        
        // Easter egg: click anywhere to spawn floating text
        document.addEventListener('click', (e) => {
            if (e.target.closest('.sound-control')) return;
            createFloatingText(e);
        });
        
        function createFloatingText(e) {
            const texts = ["😂 404", "Moye Moye", "Oops!", "Nahi Milega", "WAPDA Loadshedding", "PTCL Connection", "Lumber 1", "Chai Time", "ROASTED!", "FAIL!", "LOL", "NOPE!"];
            const randomText = texts[Math.floor(Math.random() * texts.length)];
            
            const floatingText = document.createElement('div');
            floatingText.className = 'floating-text';
            floatingText.textContent = randomText;
            
            // Position at mouse cursor or random position for keyboard
            if (e.type === 'click') {
                floatingText.style.left = (e.pageX - 30) + 'px';
                floatingText.style.top = (e.pageY - 30) + 'px';
            } else {
                floatingText.style.left = Math.random() * window.innerWidth + 'px';
                floatingText.style.top = Math.random() * window.innerHeight + 'px';
            }
            
            document.body.appendChild(floatingText);
            
            // Remove element after animation completes
            setTimeout(() => {
                floatingText.remove();
            }, 2000);
        }
        
        // Add meme decorations
        function addMemeDecorations() {
            const memeDecorations = document.querySelector('.meme-decoration');
            const symbols = ["💩", "😂", "🤣", "😭", "👀", "🙈", "💀", "👻", "🎃", "🤡"];
            
            for (let i = 0; i < 15; i++) {
                const symbol = document.createElement('span');
                symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
                symbol.style.position = 'absolute';
                symbol.style.fontSize = (Math.random() * 30 + 20) + 'px';
                symbol.style.left = Math.random() * 100 + 'vw';
                symbol.style.top = Math.random() * 100 + 'vh';
                symbol.style.opacity = Math.random() * 0.5 + 0.3;
                symbol.style.animation = `float-up ${Math.random() * 10 + 5}s infinite`;
                document.body.appendChild(symbol);
            }
        }
        
        addMemeDecorations();