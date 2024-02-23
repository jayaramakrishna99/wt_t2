var Score=0;
var playerName = localStorage.getItem('playerName');
$('#playerName').text("Welcome "+playerName+" !");
setInterval(function(){
    var char='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var randomChar=char[Math.floor(Math.random()*char.length)]
    $(".letter").text(randomChar);
},"2000")
$(".b2,.b3").click(function(){
    $('#playerName').slideUp();
    var guessedone = $(this).attr("class");
    var randomchar=$(".letter").text();
    var isCorrect = false;
    if (guessedone === 'b2' && !isNaN(parseInt(randomchar))) {
        isCorrect = true;
    } else if (guessedone === 'b3' && isNaN(parseInt(randomchar))) {
        isCorrect = true;
    }
    if (isCorrect) {
        Score+=1;
        $(".score").text("Score: "+Score);
    }else{
        $(".score").text(playerName+"!     Your Streak is "+Score);
        Score=0;
    }

})