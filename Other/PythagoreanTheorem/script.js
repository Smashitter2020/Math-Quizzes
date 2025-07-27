let num1, num2;

function generateQuestion() {
    num1 = Math.floor(Math.random() * 49) + 1;
    num2 = Math.floor(Math.random() * 49) + 1;

    document.getElementById("question").innerText = `What is the pythagorean theorem of a right triangle with (a) ${num1} and (b) ${num2}?`;
    document.getElementById("result").innerText = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById("answer").value);
    const correctAnswer = Math.sqrt(Math.pow(num1, 2) + Math.pow(num2, 2));

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
