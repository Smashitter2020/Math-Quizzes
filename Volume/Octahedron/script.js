let edge;

function generateQuestion() {
    edge = Math.floor(Math.random() * 10) + 1;

    document.getElementById("question").innerText = `What is the volume of a octahedron with edge (a) ${radius}?`;
    document.getElementById("result").innerText = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById("answer").value);
    const correctAnswer = (Math.sqrt(2))/3 * Math.pow(edge, 3);

    if (Math.abs(userAnswer - correctAnswer) < 0.01) { // Allow small rounding tolerance
        document.getElementById("result").innerText = "Correct! 🎉";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").innerText = "Incorrect. Try again.";
        document.getElementById("result").style.color = "red";
    }

    setTimeout(generateQuestion, 2000); // Generate a new question after 2 seconds
}

window.onload = generateQuestion;
