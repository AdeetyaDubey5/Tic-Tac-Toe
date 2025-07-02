let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');
let msg = document.querySelector('#msg');
let msgCont = document.querySelector('.msg-cont');

let turnO = true; 
let cnt = 0; 

let winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color = "#d64045"; 
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "#061a40"; 
            turnO = true;
        }

        box.disabled = true; 
        box.style.backgroundColor = "#58806C";
        cnt++; 

        let winnerFound = checkWinner(); 
        if (!winnerFound && cnt === 9) {
            msg.innerText = "It's a Draw!";
            msgCont.classList.remove('hide');
            disableBoxes(); 
        }
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
        box.classList.add('no-hover'); 
    }
};

const showWInner = (winner) => {
    msg.innerText = `Player ${winner} Wins!`;
    msgCont.classList.remove('hide');
    disableBoxes(); 
};

const checkWinner = () => {
    for (let ptn of winPattern) {
        let box1 = boxes[ptn[0]].innerText;
        let box2 = boxes[ptn[1]].innerText;
        let box3 = boxes[ptn[2]].innerText;

        
        if (box1 !== "" && box2 !== "" && box3 !== "") {
            if (box1 === box2 && box2 === box3) {
                showWInner(box1); 
                return true;
            }
        }
    }
    return false;
};

const resetGame = () => {
    turnO = true; 
    cnt = 0; 
    msgCont.classList.add('hide'); 
    for (let box of boxes) {
        box.innerText = ""; 
        box.disabled = false; 
        box.style.backgroundColor = "#C0D7BB"; 
        box.classList.remove('no-hover'); 
    }
};

reset.addEventListener("click", resetGame);