const date = document.getElementById('date');
const time = document.getElementById('time');

function announceTime(clock) {
    clock = clock || Date;
    date.innerHTML = new Date(clock.now()).toLocaleDateString();
    const now = new Date(clock.now());
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; 

    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
    
    time.innerHTML = formattedTime;
}

setInterval(announceTime, 1000);

const home = document.getElementById('home');
