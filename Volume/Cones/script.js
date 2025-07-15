let radius, height;

function generateQuestion() {
    radius = Math.floor(Math.random() * 10) + 1;
    height = Math.floor(Math.random() * 10) + 1;

    document.getElementById("question").innerText = `What is the volume of a cone with radius ${radius} and height ${height}? (Use π ≈ 3.1416)`;
    document.getElementById("result").innerText = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById("answer").value);
    const correctAnswer = ((1 / 3) * Math.PI * Math.pow(radius, 2) * height);

    if (Math.abs(userAnswer - correctAnswer) < 0.01) { // Allow small rounding tolerance
        document.getElementById("result").innerText = "Correct! 🎉";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").innerText = "Incorrect. Try again.";
        document.getElementById("result").style.color = "red";
    }

    setTimeout(generateQuestion, 2000); // Generate a new question after 2 seconds
}

window.onload = generateQuestion;
