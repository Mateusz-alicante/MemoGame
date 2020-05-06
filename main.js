var memo_emojis = [
    '🐯','🐯',
    '🦁','🦁',
    '🐷', '🐷',
    '🐔','🐔',
    '🐴', '🐴'
]

var Score = 0

var lookingForPair = false
var currenPick = false

const handleClick = (div) => {
    if (lookingForPair == true) {
        if (div.innerHTML == currenPick.innerHTML && div.style.visibility == 'hidden') {
            div.style.visibility = 'visible'
            console.log('pair_found')
            lookingForPair = false
            currenPick = false
            Score = Score + 1
            document.getElementById("Score").innerHTML = "Score: " + Score.toString()
            if (Score == 5) {
                alert("Congratulation, you found all the pair in")}
        } else if (div.style.visibility == 'hidden') {
            div.style.visibility = 'visible'
            hideOnTimeout(div, currenPick)
            lookingForPair = false
            currenPick = false
        }
    } else {
        div.style.visibility = 'visible'
        currenPick = div
        lookingForPair = true
    }
}

const hideOnTimeout = (divi, currenPicki) => {
    setTimeout(() => {
    divi.style.visibility = 'hidden'
    currenPicki.style.visibility = 'hidden'
    }, 100)
}

Array.from(document.getElementsByClassName("game_p")).forEach(function(item) {
    current_emoji_index = Math.floor(Math.random() * memo_emojis.length)
    item.innerHTML = memo_emojis[current_emoji_index];
    memo_emojis.splice(current_emoji_index,1)
});


const StartGame = () => {
    console.log("Game Started")
    Array.from(document.getElementsByClassName("game_p")).forEach(function(item) {
        item.style.visibility = 'hidden';
    });

    Array.from(document.getElementsByClassName("game_box")).forEach(function(item) {
        item.addEventListener("click",() => handleClick(item.childNodes[0]));
    });
}

window.onload = function() {
    var secs = -5;
        var id = setInterval(function(){ 
            if (Score < 5) {
                secs++; document.getElementById('Timer').innerHTML = "Timer: " + secs.toString() + "s" 
            }
        }, 1000);
    };

alert("You have 5 secounds to memorize all the fields!")
setTimeout(StartGame, 5000)

Console.log('Hello World!')