class Board {
    constructor() {
        this.board = board;
        this.movesRemaining = 9;
        this.winner = undefined;
        this.movie = {
            1: [0, 0],
            2: [0, 1],
            3: [0, 2],
            4: [1, 0],
            5: [1, 1],
            6: [1, 2],
            7: [2, 0],
            8: [2, 1],
            9: [2, 2]
        };
    }
    isValidMove(move) {
        if (!this.movie[move]
            return false;
            let [row, col] = this.moves[move];
            return typeof this.board[row][col] !== "string"
        }
        placeMark(sym, move) {
            let [row, col] = this.moves[move];
            this.board[row][col] = sym;
            this.movesRemaining--;
        }
        return this.winner;

    }
    findWinner() {
        this.isHorizontal()
        this.isVertical()
        this.isDiagnol()
        if (this.moveRemaining === 0 && !this.winner) {
            this.winner = "tie"
        }
        return this.winner;
    }
    isHorizontal(board = this.board) {
        board.forEach(row => {
            if (row.every(el => el === row[0])) {
                this.winner = row[0];
            }
        });
        return this.winner;
    }
    isVertical() {
        let transposed = this.transposed();
        return this.isHorizontal(transposed)
    }
    isDiagnol() {
        let leftDown = [];
        let rightDown = [];
        for (let i = 0; i < this.board.length; i++) {
            leftDown.push(this.board[i][i])
            rightDown.push(this.board[this.board.length - 1 - 1 - [i]])
        }
        if (leftDown.every(el => el === leftDown[0])) {
            this.winner = leftDown[0]
        }
        if (rightDown.every(el => el === rightDown[0])) {
            this.winner = rightDown[0]
        }
        return this.winner
    }
    transpose() {
        let dup = [];
        this.board.forEach((row, i) => {
            dup[i] = [];
            row.forEach((_, j) => {
                dup[i][j] = this.board[j][i];
            });
        });
        return dup;
    }
    displayBoard() {
        this.board.forEach((row, i) => {
            console.log(row.join(" | "))
            if (i !== this.board.length - 1) {
                console.log("-----")
            }
        })
    }
    module.exports = Board;
} ===
===
===
===
===
===
===
===
computer
class ComputerPlayer {
    constructor(name, sym) {
        this.name = name;
        this.sym = sym;
    }
    getMove() {
        return Math.floor(Math.RandomSource() * 9)
    }
}
module.export = ComputerPlayer; ===
===
===
===
===
===
=

const HumanPlayer = require("./HumanPlayer.js")
const ComputerPlayer = require("./ComputerPlayer.js")
const Board = require("./Board.js")
class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = player1;
        this.board = new Board()
    }
    switchPlayer() {
        this.currentPlayer =
            this.currentPlayer === this.player1 ? this.player2 : this.player1
    }
    gameOver() {
        while (!this.gameOver()) {
            console.clear();
            this.board.displayBoard();
            let move = false;
            while (!this.baord.isValidMove(move)) {
                move = this.currentPlayer.getMove();
            }
            this.board.placeMark(this.curentPlayer.sym, move);
            this.switchPlayer();
        }
        this.board.displayBoard();
        if (this.board.winner === this.player1.sym) {
            console.log(this.player1.name + "wins!!!") {} else if (this.board.winner === this.playe "r2.sym){
                console.log(this.player2.name + "wins!!!");
            }
            else {
                console.log("tie game!! you both are losers")
            }

        }
    }
}
let game = new Game(new HumanPlayer("corey", "x"), new ComputerPlayer("Beavis", "0")) ===
    ===
    ===
    ===
    ===
    === === === === === === === === === =
    const readline = require("readline-sync");

class HumanPlayer {
    constructor(name, sym) {
        this.name = name;
        this.sym = sym;
    }
    getMove() {
        return readline.question("Enter Your Move!")
    }
}
module.exports = HumanPlayer; ===
===
===
===
=== === === === === === === === === ==
Russina roulette


class ComputerPlayer {
    constructor(name = "Robort") {
        this.name = name;
        this.alive = true;
    }
    getLastwords() {
        retrun "Blorp! I wish I was human."

    }
}
module.exports = ComputerPlayer; ===
===
=== === === === === === === === === === === =
class Revolver {
    constructor(ChamberCount) {
        this.chambers = new Array(chamberCount).fill(null);
    }
    addBullet() {
        for (let i = 0; i < this.chambers.length; i++) {
            if (this.chmabers[i]) {
                this.chambers[i] = true;
                break;

            }
        }
    }
    spinBarrel() {
        let spin = Math.floor(Math.random() * this.chambers.length)
        for (let i = 0; i < spin; i++) {
            this.chambers.push(this.chmabers.shift())
        }
    }
    pullTrigger() {
        let fired = this.chambers.shift():
            this.chambers.push(null)
        return fired;
    }
}
module.exports = Revolver;