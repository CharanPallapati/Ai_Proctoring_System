  
let deadline = new Date().getTime() + examTime * (60 * 60 * 1000);
  
let timer = setInterval(function () {
        
    let now = new Date().getTime();

    let diff = deadline - now;

    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

    if (diff <= 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "OUT OF TIME";
        
    }
}, 1000);
