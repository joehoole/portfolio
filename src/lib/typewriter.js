export function initializeTypewriter(targetId, textSets, colors) {
    const target = document.getElementById(targetId);
    let currentText = ''; // Current text set being typed out
    let currentIndex = 0; // Current index in the text set
    let typing = true; // Flag to track typing status, true for typing, false for deleting
    let lastColor = ''; // Last color used, to avoid consecutive use
    let pauseAfterTyping = 2000; // Pause in milliseconds after typing before deletion
    let pauseAfterDeleting = 2000; // Pause in milliseconds after deleting before typing next

    function getRandomText() {
        // Randomly select a text set
        return textSets[Math.floor(Math.random() * textSets.length)];
    }

    function getRandomColor() {
        // Filter the colors to exclude the last used color
        let filteredColors = colors.filter(color => color !== lastColor);
        let newColor = filteredColors[Math.floor(Math.random() * filteredColors.length)];
        lastColor = newColor; // Update the last used color
        return newColor;
    }

    function typeLetter() {
        if (typing && currentIndex < currentText.length) {
            // Typing mode: add letters one by one
            const span = document.createElement('span');
            span.textContent = currentText[currentIndex];
            span.style.color = getRandomColor();
            target.appendChild(span);
            currentIndex++;
            setTimeout(typeLetter, 150); // Speed of typing
        } else if (!typing && currentIndex > 0) {
            // Deleting mode: remove letters one by one
            target.removeChild(target.lastChild);
            currentIndex--;
            setTimeout(typeLetter, 100); // Speed of deleting
        } else if (typing && currentIndex === currentText.length) {
            // Pause after typing before starting to delete
            setTimeout(() => {
                typing = false;
                typeLetter();
            }, pauseAfterTyping);
        } else {
            // Pause after deleting before typing a new set
            setTimeout(() => {
                typing = true;
                currentText = getRandomText(); // Select a new text set
                currentIndex = 0;
                typeLetter();
            }, pauseAfterDeleting);
        }
    }

    // Start the effect with the first text set
    currentText = getRandomText();
    typeLetter();
}
