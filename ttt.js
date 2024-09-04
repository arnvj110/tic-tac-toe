c = [
    document.getElementById("t0").textContent, document.getElementById("t1").textContent, document.getElementById("t2").textContent,
    document.getElementById("t3").textContent, document.getElementById("t4").textContent, document.getElementById("t5").textContent,
    document.getElementById("t6").textContent, document.getElementById("t7").textContent, document.getElementById("t8").textContent,
]
player1Move = "X";
player2Move = "O";
function playerMove(c, player1Move, player2Move, p) {
    if (c[p] === '-') {
        p1 = 0;
        p2 = 0;
        for (let i = 0; i < c.length; i++) {
            if (c[i] == player1Move) {
                p1++;
            }
            else if (c[i] == player2Move) {
                p2++;
            }
        }
        if (p1 == p2) {
            document.getElementById(`t${p}`).textContent = player1Move;
        }
        else {
            document.getElementById(`t${p}`).textContent = player2Move;

        }

    }
}
function checkWinner(c, p, player1Move) {
    if (((c[0] != '-') && (c[0] == c[1]) && (c[1] == c[2])) ||
        ((c[3] != '-') && (c[3] == c[4]) && (c[4] == c[5])) ||
        ((c[6] != '-') && (c[6] == c[7]) && (c[7] == c[8])) ||
        ((c[0] != '-') && (c[0] == c[3]) && (c[3] == c[6])) ||
        ((c[1] != '-') && (c[1] == c[4]) && (c[4] == c[7])) ||
        ((c[2] != '-') && (c[2] == c[5]) && (c[5] == c[8])) ||
        ((c[0] != '-') && (c[0] == c[4]) && (c[4] == c[8])) ||
        ((c[2] != '-') && (c[2] == c[4]) && (c[4] == c[6]))) {
        c[p] == player1Move ? document.getElementById("result").textContent = "Player1 Won!" : document.getElementById("result").textContent = "Player2 Won!";
        return true;
    }
    return false;
}
function checkTie(c) {
    for (let i = 0; i < 9; i++) {
        if (c[i] == "-") {
            return false;
        }
    }
    document.getElementById("result").textContent="It's a Tie!"
    return true;
}
running = true;
function play(p) {
    if (running) {
        playerMove(c, player1Move, player2Move, p);
        c = [
            document.getElementById("t0").textContent, document.getElementById("t1").textContent, document.getElementById("t2").textContent,
            document.getElementById("t3").textContent, document.getElementById("t4").textContent, document.getElementById("t5").textContent,
            document.getElementById("t6").textContent, document.getElementById("t7").textContent, document.getElementById("t8").textContent,
        ]
        if(checkWinner(c, p,player1Move) || checkTie(c)){
            running = false;
        }
        
    }

}
