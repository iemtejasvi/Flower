document.addEventListener('DOMContentLoaded', function() {
    // Remove not-loaded class after 1 second
    setTimeout(() => {
        document.body.classList.remove('not-loaded');
    }, 1000);

    // Create sparkler trails
    const sparklers = document.querySelectorAll('.sparkler');
    sparklers.forEach(sparkler => {
        sparkler.addEventListener('animationiteration', () => {
            const trail = document.createElement('div');
            trail.className = 'sparkler-trail';
            trail.style.left = sparkler.style.left;
            trail.style.top = sparkler.style.top;
            trail.style.background = sparkler.style.background;
            document.body.appendChild(trail);
            
            // Remove trail after animation
            setTimeout(() => {
                trail.remove();
            }, 1000);
        });
    });

    // Lightning bolt logic
    const lightningContainer = document.querySelector('.lightning-bolts');
    function createLightningBolt() {
        const bolt = document.createElement('div');
        bolt.className = 'lightning-bolt jagged';
        // Random position and angle
        const left = Math.random() * 90 + 5; // 5% to 95%
        const top = Math.random() * 40 + 5; // 5% to 45% from top
        const angle = (Math.random() - 0.5) * 40; // -20deg to 20deg
        bolt.style.left = left + 'vw';
        bolt.style.top = top + 'vh';
        bolt.style.setProperty('--angle', angle + 'deg');
        // Random height
        bolt.style.height = (80 + Math.random() * 80) + 'px';
        lightningContainer.appendChild(bolt);
        setTimeout(() => {
            bolt.remove();
        }, 400);
    }
    // Show lightning bolts at random intervals
    setInterval(() => {
        if (Math.random() < 0.5) { // 50% chance every 1.5s
            createLightningBolt();
        }
    }, 1500);
});
