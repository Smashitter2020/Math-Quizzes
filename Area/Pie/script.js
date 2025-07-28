let radius, degrees;

function generateQuestion() {
    radius = Math.floor(Math.random() * 25) + 1;
    degrees = Math.floor(Math.random() * 359) + 1;
    document.getElementById("question").innerText = `What is the area of a pie with radius ${radius} and a central angle of ${degrees} degrees? (Use π ≈ 3.1416)`;
    document.getElementById("result").innerText = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById("answer").value);
    const correctAnswer = (degrees / 360) * Math.PI * Math.pow(radius, 2);

    if (Math.abs(userAnswer - correctAnswer) < 0.01) {
        document.getElementById("result").innerText = "Correct! 🎉";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").innerText = "Incorrect. Try again.";
        document.getElementById("result").style.color = "red";
    }

    setTimeout(generateQuestion, 2000); // Generate a new question after 2 seconds
}

window.onload = generateQuestion;
