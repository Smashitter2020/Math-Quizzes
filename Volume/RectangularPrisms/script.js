let length, width, height;

function generateQuestion() {
    length = Math.floor(Math.random() * 10) + 1;
    width = Math.floor(Math.random() * 10) + 1;
    height = Math.floor(Math.random() * 10) + 1;

    document.getElementById("question").innerText = `What is the volume of a rectangular prism with its dimensions? ${length} × ${width} × ${height}`;
    document.getElementById("result").innerText = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("answer").value);
    const correctAnswer = length * width * height;

    if (Math.abs(userAnswer - correctAnswer)) {
        document.getElementById("result").innerText = "Correct! 🎉";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").innerText = "Incorrect. Try again.";
        document.getElementById("result").style.color = "red";
    }

    setTimeout(generateQuestion, 2000); // Generate a new question after 2 seconds
}

window.onload = generateQuestion;
