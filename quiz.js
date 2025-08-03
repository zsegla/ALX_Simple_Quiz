// Step 1: Define the function
function checkAnswer() {
  const correctAnswer = "4"; // Step 2: Correct answer

  // Step 3: Get the selected radio input
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  // If nothing is selected, avoid error
  if (!selectedOption) {
    document.getElementById("feedback").textContent = "Please select an answer.";
    return;
  }

  const userAnswer = selectedOption.value;

  // Step 4: Compare and give feedback
  const feedback = document.getElementById("feedback");
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
    feedback.style.color = "red";
  }
}

// Step 5: Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
