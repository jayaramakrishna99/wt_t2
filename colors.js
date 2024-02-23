var playerName = localStorage.getItem('playerName');
$('#playerName').text("Welcome "+playerName+" !");
$(".color").mouseenter(function(){
    $(".color").css({
        backgroundColor:"grey"
    })
    $("h1").text("Leave Me!");
    $(".color").mouseleave(function(){
        var Colors=['red','yellow','white','black','violet','blue','green','grey','orange']
        var randomColor = Colors[Math.floor(Math.random() * Colors.length)];
        $(".color").css({backgroundColor:randomColor})
        if (randomColor==='black' || randomColor==='blue'){
            $(".hoverme").text("Guess the Color?").css({color:'white'})
        }else{
        $(".hoverme").text("Guess the Color?").css({color:'black'})}
    })
})
var score=0
$(".red, .yellow, .white, .black, .violet, .blue, .green, .orange, .grey").click(function() {
    $("#playerName").slideUp();
    var randomone = $(".color").css("background-color");
    randomone = randomone.replace(/\s/g, '');
    var guessedone = $(this).attr("id");
    guessedone = guessedone.replace('color ', '');
    if (guessedone === randomone) {
        score++;
        $("p").text("Score: " + score).slide();
    }
    else{
        $("p").text(playerName+"!     Your Streak is "+score);
        score=0
    }
});

