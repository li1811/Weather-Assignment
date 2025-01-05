// Grab html elements
const showTemp = document.getElementById("temp");
const showCond = document.getElementById("cond");
const showCloud = document.getElementById("cloud");
const startButton = document.getElementById("start");
const countDown = document.getElementById("countdown");
const message = document.getElementById("message");

const currWeather = {
    temperature: -10,
    condition: "Snow",
    cloudcover: 0.2,
    changeWeather() {
        this.temperature = Math.floor(Math.random() * 51) - 10; // randomly generate temperature between -10 and 40

        this.cloudcover = Math.random(); // generates random number between 0 and 1, i will change this to a percentage later


        let conditions = ["Rain", "Clear", "Snow"];
        if (currWeather.temperature > 2) {
            conditions.pop(); // If the temperature is warmer than 2 degrees, i remove snow as an option
            console.log(conditions);
        } else if (currWeather.temperature < -2) {
            conditions.shift(); // I also remove rain if it's colder than -2 degrees
            console.log(conditions);

        }
        this.condition = conditions[Math.floor(Math.random() * conditions.length)] // generates random index for conditions array
    }
}




update = () => {
    currWeather.changeWeather();
    showTemp.innerText = `Temperature: ${currWeather.temperature}°C`;
    showCond.innerText = `Condition: ${currWeather.condition}`;
    let cloudCoverPercent = Math.floor(currWeather.cloudcover * 100); // converts from decimal to percentage
    showCloud.innerText = `Cloudiness: ${cloudCoverPercent}%`;

    if (currWeather.condition == "Snow" && currWeather.temperature < -9) {
        message.innerText = "The weather conditions are not safe, please DO NOT GO OUTSIDE!";
        message.style.color = "red";
    } else {
        message.innerText = "Make sure to stay updated on weather changes!"
    }
}


timer = () => {
    let time = 180; // the time to countdown in seconds
    update();
    setInterval(function() {
        
        let minutes = Math.floor(time / 60); // divides time into minutes
        let seconds = time % 60; // gives us remaining seconds after time has been divided into minutes
        time--;
        countDown.innerText = `New report in ${minutes} minutes and ${seconds} seconds`; // shows remaining time until new report
        
        if (time == -1) {
            time = 180; // when time is out we reset timer and then update the weather again
            update();
        }
    }, 1000)
}
