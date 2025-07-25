let num1, num2;

function generateQuestion() {
    num1 = Math.floor(Math.random() * 49) + 1;
    num2 = Math.floor(Math.random() * 49) + 1;

    document.getElementById("question").innerText = `What is the least common multiple of ${num1} and ${num2}?`;
    document.getElementById("result").innerText = "";
    document.getElementById("answer").value = "";
}

// GCD using Euclidean algorithm
function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

// LCM using GCD
function lcm(a, b) {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / gcd(a, b);
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById("answer").value);
    const correctAnswer = lcm(num1, num2);

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
