/**
 * Professional Portfolio JavaScript
 * Author: Merin Xavy
 * Purpose: Handles Splash Screen animation, Smooth Scrolling, and Data Visualization.
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log("Merin Xavy's portfolio script is initialized.");

    // ========================================================
    // 1. SPLASH SCREEN LOGIC
    // ========================================================
    const splashScreen = document.getElementById('splash-screen');
    const splashCta = document.getElementById('splash-cta-btn');
    const body = document.body;

    // Only run if elements exist to prevent errors
    if (splashScreen && splashCta) {
        
        // Ensure the body starts with no-scroll (in case CSS didn't catch it)
        body.classList.add('no-scroll');

        splashCta.addEventListener('click', (e) => {
            e.preventDefault();

            // 1. Start the fade-out transition
            splashScreen.style.opacity = '0';
            
            // 2. Wait for the transition to complete (800ms matches CSS transition)
            setTimeout(() => {
                // Hide the screen completely so it doesn't block clicks
                splashScreen.style.visibility = 'hidden';
                splashScreen.style.display = 'none';
                
                // 3. Unlock scrolling
                body.classList.remove('no-scroll');
            }, 800);
        });
    }

    // ========================================================
    // 2. SMOOTH SCROLLING FOR NAVIGATION
    // ========================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========================================================
    // 3. SKILLS RADAR CHART (Chart.js)
    // ========================================================
    // Note: Colors here match the CSS variables (--gold and --text)
    const canvas = document.getElementById('radarChart');

    if (canvas && typeof Chart !== 'undefined') {
        const ctx = canvas.getContext('2d');
        
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: [
                    'Financial Modeling', 
                    'Data Analysis', 
                    'Risk Management', 
                    'Compliance', 
                    'Excel/BI Tools', 
                    'Strategic Planning'
                ],
                datasets: [{
                    label: 'Proficiency Level',
                    data: [85, 90, 80, 75, 95, 80], // Illustrative values (0-100)
                    backgroundColor: 'rgba(203, 173, 141, 0.2)', /* Matches --gold with opacity */
                    borderColor: 'rgba(203, 173, 141, 1)',       /* Matches --gold solid */
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(203, 173, 141, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(203, 173, 141, 1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }, // Hide legend for cleaner look
                    tooltip: {
                        backgroundColor: '#3A2D28', // Matches --text color
                        titleFont: { family: 'Playfair Display' },
                        bodyFont: { family: 'Inter' }
                    }
                },
                scales: {
                    r: { 
                        beginAtZero: true, 
                        min: 0, 
                        max: 100, 
                        ticks: { 
                            stepSize: 20, 
                            display: false // Hides the numbers on the axis for a cleaner look
                        },
                        grid: { 
                            color: 'rgba(58, 45, 40, 0.1)' // Subtle grid lines
                        },
                        pointLabels: { 
                            font: { 
                                size: 12, 
                                weight: '600',
                                family: 'Inter'
                            }, 
                            color: '#3A2D28' // Matches --text color
                        }
                    }
                }
            }
        });
    } else if (!canvas) {
        console.warn('Canvas element #radarChart not found.');
    }

});
