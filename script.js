const button = document.querySelector('.createCircle');

button.addEventListener('click', () => {
    generateCircle();
});

function generateCircle() {
    let arrayOfColors = ["red", "green", "blue", "orange", "purple", "teal", "aquamarine", "limegreen", "brown", "magenta"];    let color = arrayOfColors[Math.floor(Math.random() * arrayOfColors.length)];

    const circle = document.createElement("div");
    circle.style.width = "1.25em";
    circle.style.height = "1.25em";
    circle.style.backgroundColor = color;
    circle.style.borderRadius = "50%";
    circle.style.position = "absolute"; 
    document.querySelector('.container').appendChild(circle); 

    let containerRect = document.querySelector('.container').getBoundingClientRect();

    let containerWidth = containerRect.width;
    let containerHeight = containerRect.height;
    let circleSize = 20; 
    let x = containerRect.left + Math.random() * (containerWidth - circleSize);
    let y = containerRect.top + Math.random() * (containerHeight - circleSize);
    circle.style.left = x + "px";
    circle.style.top = y + "px";
}

