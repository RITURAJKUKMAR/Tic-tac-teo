let box = document.querySelectorAll(".box");
let value = "X";
let para=document.querySelectorAll("p");

box[0].addEventListener("click", () => {
    game(box[0]);
})
box[1].addEventListener("click", () => {
    game(box[1]);
})
box[2].addEventListener("click", () => {
    game(box[2]);
})
box[3].addEventListener("click", () => {
    game(box[3]);
})
box[4].addEventListener("click", () => {
    game(box[4]);
})
box[5].addEventListener("click", () => {
    game(box[5]);
})
box[6].addEventListener("click", () => {
    game(box[6]);
})
box[7].addEventListener("click", () => {
    game(box[7]);
})
box[8].addEventListener("click", () => {
    game(box[8]);
})

function game(boxans) {
    console.log("box");
    if (value == "X") {
        console.log(value);
        boxans.innerText = value;
        if ((box[0].innerText == 'X' && box[1].innerText == 'X' && box[2].innerText == 'X') || (box[3].innerText == 'X' && box[4].innerText == 'X' && box[5].innerText == 'X') || (box[6].innerText == 'X' && box[7].innerText == 'X' && box[8].innerText == 'X') || (box[0].innerText == 'X' && box[4].innerText == 'X' && box[8].innerText == 'X') || (box[2].innerText == 'X' && box[4].innerText == 'X' && box[6].innerText == 'X') || (box[0].innerText == 'X' && box[3].innerText == 'X' && box[6].innerText == 'X') || (box[1].innerText == 'X' && box[4].innerText == 'X' && box[7].innerText == 'X') || (box[2].innerText == 'X' && box[5].innerText == 'X' && box[8].innerText == 'X')) {
            console.log("Win X");
            para[0].innerText="X - WON";
            para[1].innerText="O - LOST";
            para[2].innerText="GEME END";
        }
        value = "O";
    }
    else {
        console.log(value);
        boxans.innerText = value;
        if ((box[0].innerText == 'O' && box[1].innerText == 'O' && box[2].innerText == 'O') || (box[3].innerText == 'O' && box[4].innerText == 'O' && box[5].innerText == 'O') || (box[6].innerText == 'O' && box[7].innerText == 'O' && box[8].innerText == 'O') || (box[0].innerText == 'O' && box[4].innerText == 'O' && box[8].innerText == 'O') || (box[2].innerText == 'O' && box[4].innerText == 'O' && box[6].innerText == 'O') || (box[0].innerText == 'O' && box[3].innerText == 'O' && box[6].innerText == 'O') || (box[1].innerText == 'O' && box[4].innerText == 'O' && box[7].innerText == 'O') || (box[2].innerText == 'O' && box[5].innerText == 'O' && box[8].innerText == 'O')) {
            console.log("Win O");
            para[0].innerText="O - WON";
            para[1].innerText="X - LOST";
            para[2].innerText="GEME END";
        }
        value = "X";
    }
}