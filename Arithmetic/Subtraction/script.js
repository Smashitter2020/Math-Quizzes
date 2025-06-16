let num1, num2;

function generateQuestion() {
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);

    // Ensure num1 is greater than num2 to avoid negative answers
    if (num1 < num2) {
        [num1, num2] = [num2, num1];
    }

    document.getElementById("question").innerText = `What is ${num1} - ${num2}?`;
    document.getElementById("result").innerText = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("answer").value);
    const correctAnswer = num1 - num2;

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
