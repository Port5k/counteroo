let countdown = () => {
    const year = new Date().getFullYear();
    let startPoint = new Date(year, 1, 01, 00, 00, 00).getTime();
    let currentTime = new Date().getTime();
    let endPoint = new Date((year), 4, 01, 00, 00, 00).getTime();
    let majorTimeFrame = endPoint - currentTime;
    let minorTimeFrame = currentTime - startPoint;

    // Today
    let now = new Date().toLocaleDateString();
    document.querySelector('.now').textContent = now;


    //Time Scheme
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;
    const weeks = days * 7;
    const months = weeks * 4;

    //SUMMARY
    let summaryLeftFunction = (unit1, unit2) => {
        return Math.floor((majorTimeFrame % unit1) / unit2)
    }

    let summaryElapsedFunction = (unit1, unit2) => {
        return Math.floor((minorTimeFrame % unit1) / unit2)
    }

    // Summary of Total Time Left
    let summaryDaysLeft = Math.floor(majorTimeFrame / days);
    let summaryHoursLeft = summaryLeftFunction(days, hours);
    let summaryMinutesLeft = summaryLeftFunction(hours, minutes);
    let summarySecondsLeft = summaryLeftFunction(minutes, seconds);
    let summaryLeft = `${summaryDaysLeft} : ${summaryHoursLeft} : ${summaryMinutesLeft} : ${summarySecondsLeft} `;

    //Summary of Total Time Elapsed
    let summaryDaysElapsed = Math.floor((endPoint - startPoint) / days) - Math.floor(majorTimeFrame / days);
    let summaryHoursElapsed = summaryElapsedFunction(days, hours);
    let summaryMinutesElapsed = summaryElapsedFunction(hours, minutes);
    let summarySecondsElapsed = summaryElapsedFunction(minutes, seconds);
    let summaryElapsed = `${summaryDaysElapsed} : ${summaryHoursElapsed} : ${summaryMinutesElapsed} : ${summarySecondsElapsed} `;

    //Display Summary of Total Time
    //Summary Left
    document.querySelector('.time_left').textContent = summaryLeft;

    // //Summary Elapsed
    document.querySelector('.time_elapsed').textContent = summaryElapsed;


    let timeLeft = (unit) => {
        return Math.floor((majorTimeFrame) / unit);
    }

    let timeElapsed = (unit) => {
        return Math.floor((minorTimeFrame) / unit);
    }

    //MONTHS

    // Months Left 
    let monthsLeft = timeLeft(months);
    document.querySelector('.months_remaining').textContent = monthsLeft;

    //Months Elapsed
    let monthsElapsed = timeElapsed(months);
    document.querySelector('.months_elapsed').textContent = monthsElapsed;

    //WEEKS

    // Weeks Left 
    let weeksLeft = timeLeft(weeks);
    document.querySelector('.weeks_remaining').textContent = weeksLeft;

    // Weeks Elapsed
    let weeksElapsed = timeElapsed(weeks);
    document.querySelector('.weeks_elapsed').textContent = weeksElapsed;

    //DAYS

    //Days Left
    let daysLeft = timeLeft(days);
    document.querySelector('.days_remaining').textContent = daysLeft;

    //Days Elapsed
    let daysElapsed = timeElapsed(days);
    document.querySelector('.days_elapsed').textContent = daysElapsed;

    //HOURS

    //Hours Left
    let hoursLeft = timeLeft(hours);
    document.querySelector('.hours_remaining').textContent = hoursLeft;

    //Hours Elapsed
    let hoursElapsed = timeElapsed(hours);
    document.querySelector('.hours_elapsed').textContent = hoursElapsed;

    //MINUTES

    //Minutes Left
    let minutesLeft = timeLeft(minutes);
    document.querySelector('.minute_remaining').textContent = minutesLeft;

    //Minutes Elapsed
    let minutesElapsed = timeElapsed(minutes);
    document.querySelector('.minute_elapsed').textContent = minutesElapsed;

    //SECONDS

    //Seconds Left
    let secondsLeft = timeLeft(seconds);
    document.querySelector('.seconds_remaining').textContent = secondsLeft;

    //Seconds Elapsed
    let secondsElapsed = timeElapsed(seconds);
    document.querySelector('.seconds_elapsed').textContent = secondsElapsed;

}

setInterval(() => {
    countdown()
}, 1000);


// UI

/* Remove animation div after animation ends */

let animationDiv = document.querySelector(".entry_animation");
setTimeout(() => {
    animationDiv.remove();
}, 10000);

/* Light and Dark Mode Toggler*/

let toggler = document.querySelector(".toggler");

let addLightMode = () => {
    toggler.classList.remove("dark_mode")
    toggler.classList.add("light_mode");
    document.body.classList.remove('dark_theme');
}

let addDarkMode = () => {
    toggler.classList.remove("light_mode");
    toggler.classList.add("dark_mode");
    document.body.classList.add('dark_theme');
}

/* Change theme according to current time */

let time = new Date().getHours();
console.log(time);

if ((time <= 6) || (time >= 19))
    addDarkMode();
else
    addLightMode();

/* Chane theme based on button click */

toggler.addEventListener('click', () => {
    if (toggler.classList.contains("light_mode"))
        addDarkMode();
    else if (toggler.classList.contains("dark_mode"))
        addLightMode();
})
