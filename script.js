function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zeros to hours, minutes, and seconds if they are less than 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = hours + ':' + minutes + ':' + seconds;
    
    // Display the time
    document.getElementById('time').textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display clock right away
updateClock();
