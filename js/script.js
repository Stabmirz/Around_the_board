const die = document.querySelector(".die");
const roll = document.querySelector(".roll");
const img = document.querySelector("img");

const players = [
    { player: document.querySelector('.player1'), location: 0 }, //0
    { player: document.querySelector('.player2'), location: 0 }, //1
    { player: document.querySelector('.player3'), location: 0 }, //2
    { player: document.querySelector('.player4'), location: 0 }, //3

]

//game state variables
const numPlayers = players.length;
let turn = 0;
const maxRoll = 6;
const maxSpots = getSpots().length - 1; //22spots

//define functions

function rollDie() {
    //console.log("Rolling Die")
    //cloear out the privious number on the die
    roll.textContent = "";
    //then switch the regular pic with the gif
    img.src = `img/Dodecahedron3.gif`;
    setTimeout(() => {
        //get a random number
        const num = Math.ceil(Math.random() * maxRoll);
        //display number
        roll.textContent = num;
        //move the player 
        movePlayer(num, getSpots());
        //then change the turn
        changeTurn()
    }, 1700);
}

function movePlayer(num, spots){
    //increment the players location by how much i rolled (a.k.a num)
    players[turn].location += num;
    //Once I go around the board set it back to zero and then continue
    players[turn].location = (players[turn].location > maxSpots) ? players[turn].location - maxSpots : players[turn].location + 1;
    //going to use appenChild on the spot given that location to add my player element
    spots[players[turn].location].appendChild(players[turn].player)
}

function changeTurn(){
    //If I have reached the last player make it the first players turn. If not its the next players turn.
    turn = (turn >= numPlayers -1 ) ? 0 : turn + 1;
}


//add event listners and run functions
die.addEventListener('click', rollDie)
roll.addEventListener('click', rollDie)