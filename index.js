$('.b3').click(function() {
    var playerName = document.getElementById('name').value;
    localStorage.setItem('playerName', playerName);
})