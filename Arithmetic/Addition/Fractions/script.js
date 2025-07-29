let num1, num2;
let num3, num4;

function generateQuestion() {
    num1 = Math.floor(Math.random() * 99) + 1;
    num2 = Math.floor(Math.random() * num1);
    num3 = Math.floor(Math.random() * 99) + 1;
    num4 = Math.floor(Math.random() * num3);
    document.getElementById("question").innerHTML = `What is <math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mi>${num2}</mi><mi>${num1}</mi></mfrac><mo>+</mo><mfrac><mi>${num4}</mi><mi>${num3}</mi></mfrac></math>?`;
    document.getElementById("result").innerText = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById("answer").value);
    const correctAnswer = (num2 / num1) + (num4 / num3);

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
