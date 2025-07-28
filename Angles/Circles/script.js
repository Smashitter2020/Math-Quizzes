let num1, num2;

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 2;
    num2 = Math.floor(Math.random() * num1);

    document.getElementById("question").innerHTML = `What is the angle of a circle shaded <math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>${num2}</mn><mn>${num1}</mn></mfrac></math>?`;
    document.getElementById("result").innerText = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById("answer").value);
    const correctAnswer = (num2 / num1) * 360;

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
