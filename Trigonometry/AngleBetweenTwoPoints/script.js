let x1, y1, x2, y2;
const dx = x2 - x1;
const dy = y2 - y1;

function generateQuestion() {
    x1 = Math.floor(Math.random() * 50);
    y1 = Math.floor(Math.random() * 50);
    x2 = Math.floor(Math.random() * 50);
    y2 = Math.floor(Math.random() * 50);
    document.getElementById("question").innerText = `What is the angle between the first point (${x1}, ${y1}) and the second point (${x2}, ${y2})?`;
    document.getElementById("result").innerText = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("answer").value);
    const correctAnswer = Math.atan2(dy, dx) * (180 / Math.PI);

    if (userAnswer === correctAnswer) {
        document.getElementById("result").innerText = "Correct!";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").innerText = "Incorrect. Try again.";
        document.getElementById("result").style.color = "red";
    }

    setTimeout(generateQuestion, 2000); // Generate a new question after 2 seconds
}

window.onload = generateQuestion;
