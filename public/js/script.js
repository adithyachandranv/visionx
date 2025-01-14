// Array of colors to cycle through
const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FF8333', '#33FFF5'];

// Function to change the background color
function changeBackgroundColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Change the background color every 5 seconds (5000 milliseconds)
setInterval(changeBackgroundColor, 5000);
