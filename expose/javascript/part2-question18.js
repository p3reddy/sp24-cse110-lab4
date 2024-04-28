function printDate() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
let intervalID = setInterval(printDate, 1000);