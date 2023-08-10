function setup() {
    createCanvas(800,600);
}

function getMinuteDegrees(minute) {
    return ((TWO_PI * minute) / 60) - HALF_PI;
}

function getHourDegrees(hour) {
    const myhour = (TWO_PI * hour) / 12;
    return (myhour) - HALF_PI;
}

function getSecondDegrees(second) {
    const mySecond = (TWO_PI * second) / 60000;
    return (mySecond) - HALF_PI;
}

const radius = 200
const hourRadius = radius * 0.5
const minutesRadius = radius * 0.7
const secondsRadius = radius * 0.9

function draw() {
    strokeWeight(3)
    background(200,50);
    translate(width/2,height/2);
    circle(0,0,400);
    strokeWeight(5);

    const currentHour = hour();
    const currentMinute = minute();
    const currentSecond = Date.now();

    const hourAngle = getHourDegrees(currentHour) + minute() / 60;
    const minuteAngle = getMinuteDegrees(currentMinute);
    const secondAngle = getSecondDegrees(currentSecond);

    line(0, 0, hourRadius*cos(hourAngle), hourRadius*sin(hourAngle));
    line(0, 0, minutesRadius*cos(minuteAngle), minutesRadius*sin(minuteAngle));
    line(0, 0, secondsRadius*cos(secondAngle), secondsRadius*sin(secondAngle));
}