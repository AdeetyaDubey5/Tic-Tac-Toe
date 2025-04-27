let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');

let turnO = true; // true for player O, false for player X

let winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("clciked");
        box.innerText = "clicked";
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        box.style.backgroundColor = "#58806C";
        box.style.color = "#2F4B26";

    });
});

