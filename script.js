var arr = ["rock", "paper", "scissors"];
function computerPlay() {
    rad = Math.floor(Math.random() * 3);
    return arr[rad];
}
function play(player, computer) {
    let res = "";
    if(player == computer) res = "Draw!";
    else {
        if (player == "rock") 
            res = computer == "paper" ? "You loser!" : "You winner!";
        if (player == "paper")
            res = computer == "scissors" ? "You loser!" : "You winner!";
        if (player == "scissors")
            res = computer == "rock" ? "You loser!" : "You winner!";
    }
    let s = "You are: " + player + "\nComputer are: " + computer + "\n";
    alert(s + res);
}


//TEST
while(true) {
    let computer = computerPlay();
    let user = prompt("Enter your move");
    user = user.toLowerCase();
    if (!arr.includes(user)) break;
    play(user, computer);
}
