// select square element 
const squares = document.querySelectorAll(".square"); 

squares.forEach(square => {
    square.addEventListener("mouseover", changeColor)
})

function changeColor(event) {
    event.target.style.backgroundColor = "blue"; 
}
