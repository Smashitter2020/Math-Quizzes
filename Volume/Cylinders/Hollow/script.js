let outerradius, innerradius, height;

function generateQuestion() {
    outerradius = Math.floor(Math.random() * 10) + 1;
    innerradius = Math.floor(Math.random() * 10) + 1;
    height = Math.floor(Math.random() * 10) + 1;

    // Ensure inner radius is less than outer radius to avoid negative numbers
    if (outerradius <= innerradius) {
      [outerradius, innerradius] = [innerradius, outerradius];
      innerradius--;
    }

    document.getElementById("question").innerText = `What is the volume of a hollow cylinder with outer radius ${outerradius}, inner radius ${innerradius}, and height ${height}? (Use π ≈ 3.1416)`;
    document.getElementById("result").innerText = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById("answer").value);
    const correctAnswer = Math.PI * (Math.pow(outerradius, 2) - Math.pow(innerradius, 2)) * height;

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
