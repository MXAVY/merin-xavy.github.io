/**
 * Professional Portfolio JavaScript
 * Author: Merin Xavy
 * Purpose: Handle interactive elements and enhance user experience.
 */

// This function ensures the JavaScript code runs only after the entire HTML document is loaded.
document.addEventListener('DOMContentLoaded', function() {
    console.log("Merin Xavy's portfolio script is running. Ready for interactive elements.");

    // --------------------------------------------------------
    // EXAMPLE 1: Smooth Scrolling (Common Professional Feature)
    // --------------------------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Prevent default jump behavior
            e.preventDefault();

            // Use smooth behavior for scrolling
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --------------------------------------------------------
    // EXAMPLE 2: Future Element Placeholder
    // --------------------------------------------------------
    
    // Example placeholder for future mobile navigation toggle logic:
    // const menuButton = document.getElementById('menu-toggle');
    // const navigation = document.querySelector('nav');
    
    // if (menuButton) {
    //     menuButton.addEventListener('click', () => {
    //         navigation.classList.toggle('active');
    //     });
    // }

});
