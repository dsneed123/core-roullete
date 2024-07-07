document.addEventListener('DOMContentLoaded', function() {
    // Selecting level buttons
    const beginnerButton = document.querySelector('.level-button:nth-of-type(1)');
    const intermediateButton = document.querySelector('.level-button:nth-of-type(2)');
    const advancedButton = document.querySelector('.level-button:nth-of-type(3)');
    
    // Selecting the image element
    const workoutImage = document.querySelector('img');
    
    // Function to get a random integer between min and max (inclusive)
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    // Function to update the workout image based on level
    function updateWorkoutImage(level) {
        const folderPath = `/media/${level.toLowerCase()}/`;
        const randomIndex = getRandomInt(1, 3); // Assuming there are 3 images in each folder
        
        // Set the src attribute of the image to a random workout image
        workoutImage.src = `${folderPath}${randomIndex}.gif`;
    }
    
    // Event listeners for each level button
    beginnerButton.addEventListener('click', function() {
        updateWorkoutImage('Beginner');
    });
    
    intermediateButton.addEventListener('click', function() {
        updateWorkoutImage('Intermediate');
    });
    
    advancedButton.addEventListener('click', function() {
        updateWorkoutImage('Advanced');
    });
});
