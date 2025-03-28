Letplayercout=0;
Letdealercount=0;
function startgame() {
playercount = getcards() + getcards();
dealercount = getcards() + getcards();
if (playercount > 21) {
console.log("you lose");
} else(
// console.log("hit or stay?");
prompt("hit or stay?");
if(prompt == "hit") {
     playercount = getcards()
} else {
    
}

}

function getcards() {
    return Math.random()*11;
}