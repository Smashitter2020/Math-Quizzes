let num1, num2, x1, y1;

function generateQuestion() {
    num1 = Math.floor(Math.random() * 19) + 1;
    num2 = Math.floor(Math.random() * 19) + 1;
    x1 = Math.floor(Math.random() * 19) + 1;
    y1 = Math.floor(Math.random() * 19) + 1;

    document.getElementById("question").innerHTML = `Evaluate <math xmlns="http://www.w3.org/1998/Math/MathML"><mn>${num1}</mn><mi>x</mi><mo>+</mo><mn>${num2}</mn><mi>y</mi></math> when <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>x</mi><mo>=</mo><mn>${x1}</mn></math> and <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>y</mi><mo>=</mo><mn>${y1}</mn></math>.`;
    document.getElementById("result").innerText = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById("answer").value);
    const correctAnswer = (num1 * x1) + (num2 * y1);

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
