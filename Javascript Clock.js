function updateClock()
{
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var milliseconds = now.getMilliseconds();


var currentTime = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;


var myClock = document.getElementById('clock');

myClock.innerHTML = currentTime;
}
