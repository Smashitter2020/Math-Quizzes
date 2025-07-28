let num1, num2;

function generateQuestion() {
    num1 = (Math.floor(Math.random() * 10000) + 1) / 1000;
    num2 = Math.pow(10, (Math.floor(Math.random() * 2) + 1));

    document.getElementById("question").innerText = `Round ${num1} to the nearest ${num2}th`;
    document.getElementById("result").innerText = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById("answer").value);
    const correctAnswer = Math.round(num1 * num2) / num2;

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
