function updateClock() {
    var clock = document.getElementById('clock');
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Add leading zeros to minutes and seconds
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    // Format the time as HH:MM:SS
    var formattedTime = hours + ":" + minutes + ":" + seconds;

    // Display the formatted time in the clock element
    clock.innerHTML = formattedTime;
}

// Call the updateClock function once to initialize the clock
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
