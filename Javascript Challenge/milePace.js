/*

Mile Pace
Given a number of miles ran, and a time in "MM:SS" (minutes:seconds) it took to run those miles, return a string for the average time it took to run each mile in the format "MM:SS".

Add leading zeros when needed.

Tests
Waiting:1. milePace(1, "01:00") should return "01:00".
Waiting:2. milePace(2, "02:00") should return "01:00".
Waiting:3. milePace(2, "01:01") should return "00:30".
Waiting:4. milePace(5, "02:00") should return "00:48".
Waiting:5. milePace(5, "02:01") should return "00:47".
Tests
Failed:1. milePace(3, "24:00") should return "08:00".
Failed:2. milePace(1, "06:45") should return "06:45".
Failed:3. milePace(2, "07:00") should return "03:30".
Failed:4. milePace(26.2, "120:35") should return "04:36".


*/

function milePace(miles, time) {
    // give simple solution
    let [minutes, seconds] = time.split(":").map(Number);
    let totalSeconds = minutes * 60 + seconds;
    let paceSeconds = Math.round(totalSeconds / miles);
    let paceMinutes = Math.floor(paceSeconds / 60);
    let paceSecondsRemainder = paceSeconds % 60;
    return `${paceMinutes}:${paceSecondsRemainder}`;

}


function milePace(miles, time) {
    const [minStr, secStr] = time.split(':');
    const totalMin = parseInt(minStr, 10);
    const totalSec = parseInt(secStr, 10);
    const totalSeconds = totalMin * 60 + totalSec;
    const secondsPerMile = totalSeconds / miles;
    const paceMin = Math.floor(secondsPerMile / 60);
    const paceSec = Math.floor(secondsPerMile % 60);
    const paceMinStr = paceMin.toString().padStart(2, '0');
    const paceSecStr = paceSec.toString().padStart(2, '0');
    return `${paceMinStr}:${paceSecStr}`;
}