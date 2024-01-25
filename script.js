document.addEventListener("DOMContentLoaded", function() {
    // Array of texts you want to cycle through
    const texts = ["Web_Developer...", "Content_Creator...", "Video_Editor..."];

    // Select the element with the class name 'text-to-change'
    const textElements = document.getElementsByClassName('text');

    // Counter to keep track of the current text index
    let currentTextIndex = 0;

    // Function to change the text
    function changeText() {
        for (let i = 0; i < textElements.length; i++) {
            textElements[i].textContent = texts[currentTextIndex];
        }
        currentTextIndex = (currentTextIndex + 1) % texts.length;
    }

    // Call the function initially
    changeText();

    // Set an interval to call the function every 4 seconds
    setInterval(changeText, 4000);
});
