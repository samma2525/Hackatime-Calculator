function calculate() {
    const goal = parseFloat(document.getElementById("goal").value);
    const timeMade = parseFloat(document.getElementById("time-made").value);
    const timeLeft = parseFloat(document.getElementById("time-left").value);
    const addTime = parseFloat(document.getElementById("additional-time").value);

    if (isNaN(goal) || isNaN(timeMade) || isNaN(timeLeft)) {
        alert("Please fill in the main fields.")
        return;
    }

    if (isNaN(addTime)) {
        let addTime = 15;
    }
    const hoursLeft = goal - timeMade;
    const actualTime = hoursLeft + (hoursLeft * (addTime / 60));
    const efficiency = (actualTime / goal) * 100;
    const dailyTime = actualTime / timeLeft;

    if (timeMade >= goal) {
        document.getElementById("results").innerHTMl = `
        <p> You already hit your goal!!!</p>`;
        return;
    }

    document.getElementById("results").innerHTML = `
    <p>Actual time needed: ${actualTime.toFixed(2)} hrs</p>
    <p>Coding time efficiency: ${efficiency.toFixed(2)}%</p>
    <p>You could do ${dailyTime.toFixed(2)} hrs daily to finish it!`;


}
document.getElementById("submitBtn").addEventListener("click", calculate);

function toHoursAndMins(decimal) {
    const hours = Math.floor(decimal);
    const mins = Math.round((decimal % 1) * 60);
    return `${hours}h ${mins}m`;
}