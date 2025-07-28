let num1, num2;

function generateQuestion() {
    num1 = Math.floor(Math.random() * 1000) / 100;
    num2 = Math.floor(Math.random() * 1000) / 100;

    // Ensure num1 is greater than num2 to avoid negative answers
    if (num1 < num2) {
        [num1, num2] = [num2, num1];
    }

    document.getElementById("question").innerHTML = `What is <math xmlns="http://www.w3.org/1998/Math/MathML"><mn>${num1}</mn><mo>&#x2212;</mo><mn>${num2}</mn></math>?`;
    document.getElementById("result").innerText = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById("answer").value);
    const correctAnswer = num1 - num2;

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
