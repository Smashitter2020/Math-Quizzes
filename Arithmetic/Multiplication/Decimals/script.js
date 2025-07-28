let num1, num2;

function generateQuestion() {
    num1 = (Math.floor(Math.random() * 1000) / 100) + 0.01;
    num2 = (Math.floor(Math.random() * 1000) / 100) + 0.01;
    document.getElementById("question").innerHTML = `What is <math xmlns="http://www.w3.org/1998/Math/MathML"><mn>${num1}</mn><mo>&#xd7;</mo><mn>${num2}</mn></math>?`;
    document.getElementById("result").innerText = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById("answer").value);
    const correctAnswer = num1 * num2;

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
