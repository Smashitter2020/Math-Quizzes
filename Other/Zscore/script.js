let mean, deviation, score;

function generateQuestion() {
    mean = Math.floor(Math.random() * 500) + 1;
    deviation = Math.floor(Math.random() * 500) + 1;
    score = Math.floor(Math.random() * 1000) + 1;

    document.getElementById("question").innerText = `What is the z-score when the standard deviation is ${deviation}?, mean ${mean}, and scored ${score}? Round to the nearest hundredth.`;
    document.getElementById("result").innerText = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById("answer").value);
    const correctAnswer = Math.round(((score - mean) / deviation) * 100) / 100;

    if (userAnswer === correctAnswer) {
        document.getElementById("result").innerText = "Correct! 🎉";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").innerText = "Incorrect. Try again.";
        document.getElementById("result").style.color = "red";
    }

    setTimeout(generateQuestion, 2000); // Generate a new question after 2 seconds
}

window.onload = generateQuestion;
