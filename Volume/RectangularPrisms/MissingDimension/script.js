let length, width, height, totalvolume;

function generateQuestion() {
    length = Math.floor(Math.random() * 10) + 1;
    width = Math.floor(Math.random() * 10) + 1;
    height = Math.floor(Math.random() * 10) + 1;
    totalvolume = length * width * height;

    document.getElementById("question").innerText = `Find the missing height for total volume of ${totalvolume} of a rectangular prism when length ${length} and width ${width}.`;
    document.getElementById("result").innerText = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("answer").value);
    const correctAnswer = height;

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
