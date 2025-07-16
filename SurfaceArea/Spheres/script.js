let radius;

function generateQuestion() {
    radius = Math.floor(Math.random() * 25) + 1;

    document.getElementById("question").innerText = `What is the surface area of a sphere with radius ${radius}? (Use π ≈ 3.1416)`;
    document.getElementById("result").innerText = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById("answer").value);
    const correctAnswer = 4 * Math.PI * Math.pow(radius, 2);

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
