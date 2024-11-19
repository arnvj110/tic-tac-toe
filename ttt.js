
let c = document.querySelectorAll("button");
console.log(c.length);
const player1Move = "X";
const player2Move = "O";
function playerMove(c, player1Move, player2Move, p) {
    if (c[p].textContent === '') {
        p1 = 0;
        p2 = 0;
        for (let i = 0; i < c.length; i++) {
            if (c[i].textContent == player1Move) {
                p1++;
            }
            else if (c[i].textContent == player2Move) {
                p2++;
            }
        }
        if (p1 == p2) {
            document.getElementById(`t${p}`).textContent = player1Move;
            document.getElementById("player").textContent = `Move : ${player2Move}`;
        }
        else {
            document.getElementById(`t${p}`).textContent = player2Move;
            document.getElementById("player").
                textContent = `Move : ${player1Move}`;
        }

    }
}
function checkWinner(c, p, player1Move) {
    if (((c[0].textContent != '') && (c[0].textContent == c[1].textContent.textContent) && (c[1].textContent.textContent == c[2].textContent.textContent)) ||
        ((c[3].textContent != '') && (c[3].textContent == c[4].textContent) && (c[4].textContent == c[5].textContent)) ||
        ((c[6].textContent != '') && (c[6].textContent == c[7].textContent) && (c[7].textContent == c[8])) ||
        ((c[0].textContent != '') && (c[0].textContent == c[3].textContent) && (c[3].textContent == c[6].textContent)) ||
        ((c[1].textContent != '') && (c[1].textContent == c[4].textContent) && (c[4].textContent == c[7].textContent)) ||
        ((c[2].textContent != '') && (c[2].textContent == c[5].textContent) && (c[5].textContent == c[8])) ||
        ((c[0].textContent != '') && (c[0].textContent == c[4].textContent) && (c[4].textContent == c[8])) ||
        ((c[2].textContent != '') && (c[2].textContent == c[4].textContent) && (c[4].textContent == c[6].textContent))) {
        if (c[p].textContent == player1Move) {
            document.getElementById("result").textContent = "Player1 Won!";
        }
        else { document.getElementById("result").textContent = "Player2 Won!"; }
        document.getElementById("player").textContent = '';

        return true;
    }
    return false;
}
function checkTie(c) {
    for (let i = 0; i < 9; i++) {
        if (c[i].textContent == "") {

            return false;
        }
    }
    document.getElementById("result").textContent = "It's a Tie!"

    document.getElementById("player").textContent = '';
    return true;
}


let running = true;
document.getElementById("player").textContent = `Move : ${player1Move}`;
function play(p) {
    if (running) {
        playerMove(c, player1Move, player2Move, p);
        c = document.querySelectorAll("button");
        if (checkWinner(c, p, player1Move) || checkTie(c)) {
            console.log("Ho gya!");
            running = false;
        }

    }

}
