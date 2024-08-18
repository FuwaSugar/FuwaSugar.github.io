// // Create a new Audio object for the sound
// const audio = new Audio('popsound.mp3');
// audio.preload = 'auto';  // Preload the audio to ensure it's ready to play

// // Variable to keep track of the currently active card and sound state
// let lastHoveredCard = null;
// let soundEnabled = true;  // Variable to track whether sound is enabled or disabled

// // Function to toggle sound on or off
// function toggleSoundEffect() {
//     soundEnabled = this.checked;  // true when checked, false when unchecked
//     console.log(`Sound is now ${soundEnabled ? 'enabled' : 'disabled'}.`);

//     // Update the tooltip text based on the toggle state
//     const tooltipText = document.querySelector('#soundToggle .tooltip-text');
//     tooltipText.textContent = soundEnabled 
//         ? 'Switch off to disable sound effect' 
//         : 'Switch on to enable sound effect';
// }

// // Attach toggle function to the switch
// document.querySelector('#toggleSoundSwitch').addEventListener('change', toggleSoundEffect);

// // Select all elements with the class 'custom-card'
// const cards = document.querySelectorAll('.custom-card');

// // Loop through each card and add event listeners
// cards.forEach(card => {
//     card.addEventListener('mouseenter', () => {
//         if (soundEnabled && lastHoveredCard !== card) {
//             lastHoveredCard = card; // Set the current card as the last hovered one
//             audio.currentTime = 0; // Reset audio to start
//             audio.play().catch(error => {
//                 console.log('Audio play failed on hover:', error);
//             });
//         }
//     });

//     card.addEventListener('mouseleave', () => {
//         lastHoveredCard = null; // Reset when leaving the card
//     });
// });

// // Set initial tooltip text based on default state (unchecked)
// document.addEventListener('DOMContentLoaded', function() {
//     const tooltipText = document.querySelector('#soundToggle .tooltip-text');
//     tooltipText.textContent = soundEnabled 
//     // tooltipText.textContent = 'Switch on to enable sound effect';
    
// });


// Create a new Audio object for the sound
const audio = new Audio('popsound.mp3');
audio.preload = 'auto';  // Preload the audio to ensure it's ready to play

// Variable to keep track of the currently active card and sound state
let lastHoveredCard = null;

// Ensure the initial state is set based on the toggle switch's state
let soundEnabled = document.querySelector('#toggleSoundSwitch').checked;

// Function to toggle sound on or off
function toggleSoundEffect() {
    soundEnabled = this.checked;  // true when checked, false when unchecked
    console.log(`Sound is now ${soundEnabled ? 'enabled' : 'disabled'}.`);

    // Update the tooltip text based on the toggle state
    const tooltipText = document.querySelector('#soundToggle .tooltip-text');
    tooltipText.textContent = soundEnabled 
        ? 'Switch off to disable sound effect' 
        : 'Switch on to enable sound effect';
}

// Attach toggle function to the switch
document.querySelector('#toggleSoundSwitch').addEventListener('change', toggleSoundEffect);

// Select all elements with the class 'custom-card'
const cards = document.querySelectorAll('.custom-card');

// Loop through each card and add event listeners
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Play the sound only if sound is enabled and the card is different from the last hovered one
        if (soundEnabled && lastHoveredCard !== card) {
            lastHoveredCard = card; // Set the current card as the last hovered one
            audio.currentTime = 0;  // Reset audio to start
            audio.play().catch(error => {
                console.log('Audio play failed on hover:', error);
            });
        }
    });

    card.addEventListener('mouseleave', () => {
        lastHoveredCard = null; // Reset when leaving the card
    });
});

// Set initial tooltip text based on the actual switch state
document.addEventListener('DOMContentLoaded', function() {
    const tooltipText = document.querySelector('#soundToggle .tooltip-text');
    tooltipText.textContent = soundEnabled 
        ? 'Switch off to disable sound effect' 
        : 'Switch on to enable sound effect';
});

