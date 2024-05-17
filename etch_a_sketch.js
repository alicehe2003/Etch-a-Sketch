// select square elements
const squares = document.querySelectorAll(".square"); 

squares.forEach(square => {
    square.addEventListener("mouseover", changeColor)
})

function changeColor(event) {
    event.target.style.backgroundColor = getRandomColor(); 
}

// getRandomColor code from 
// https://stackoverflow.com/a/1484514
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// reset the space 
const resetButton = document.querySelector(".reset"); 

resetButton.addEventListener("click", reset); 

function reset() {
    squares.forEach(square => {
        square.style.backgroundColor = "aliceblue"
    })
}
