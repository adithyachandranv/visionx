// Array of colors to cycle through
const colors = ['#111018', '#0e0c12', '#0c070d', '#10090c', '#160f12', '#1d1517', '#241b1c', '#2a2121'];

// Function to change the background color
function changeBackgroundColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Change the background color every 5 seconds (5000 milliseconds)
setInterval(changeBackgroundColor, 1000);
