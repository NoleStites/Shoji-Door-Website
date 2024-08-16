document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('#shoji_top .nav_item');
    const doorLeft = document.getElementById('door_left');
    const doorRight = document.getElementById('door_right');

    function updateTranslation() {
        const doorRightWidth = doorRight.offsetWidth;
        const translateAmount = doorRightWidth * 0.70; // 70% of the width
        
        // Set the CSS variable for translation
        doorLeft.style.setProperty('--translate-amount', `-${translateAmount}px`);
        doorRight.style.setProperty('--translate-amount', `${translateAmount}px`);
    }

    // Call the function to set initial translation amount
    updateTranslation();

    // Optionally, update translation on window resize
    window.addEventListener('resize', updateTranslation);

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            doorLeft.classList.toggle('open_left');
            doorRight.classList.toggle('open_right');
            
            // Update translation amount when a nav item is clicked
            updateTranslation();
        });
    });
});