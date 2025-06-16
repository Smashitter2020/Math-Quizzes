let num1, num2;

function generateQuestion() {
    num2 = Math.floor(Math.random() * 10) + 1; // Avoid division by zero
    num1 = num2 * (Math.floor(Math.random() * 10) + 1); // Ensure num1 is a multiple of num2
    document.getElementById("question").innerText = `What is ${num1} ÷ ${num2}?`;
    document.getElementById("result").innerText = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById("answer").value);
    const correctAnswer = num1 / num2;

    if (userAnswer === correctAnswer) {
        document.getElementById("result").innerText = "Correct! 🎉";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").innerText = "Wrong! Try again.";
        document.getElementById("result").style.color = "red";
    }

    setTimeout(generateQuestion, 2000); // Generate a new question after 2 seconds
}

window.onload = generateQuestion;
