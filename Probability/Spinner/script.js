let num1, num2;

function generateQuestion() {
    num1 = Math.floor(Math.random() * 20) + 5;
    num2 = Math.floor(Math.random() * num1);
    document.getElementById("question").innerText = `What is the probability of landing on ${num2} pieces on the spinner but ${num1 - num2} pieces missing? Round to the nearest hundredth.`;
    document.getElementById("result").innerText = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById("answer").value);
    const correctAnswer = num2 / num1;

    if (Math.abs(userAnswer - correctAnswer) < 0.01) {
        document.getElementById("result").innerText = "Correct!";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").innerText = "Incorrect. Try again.";
        document.getElementById("result").style.color = "red";
    }

    setTimeout(generateQuestion, 2000); // Generate a new question after 2 seconds
}

window.onload = generateQuestion;
