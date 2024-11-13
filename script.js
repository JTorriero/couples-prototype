// List of questions
const questions = [
    'What’s your opinion on how we divide household chores?',
    'How do you feel about sharing finances in a marriage?',
    'What are your thoughts on parenting styles?',
    'How do you feel about spending time with extended family?',
    'What’s your idea of a perfect weekend together?',
    'What’s one thing you’ve always wanted to try together?',
    'How do you handle conflict in a relationship?',
    'What role does communication play in your relationship?',
    'What’s the most meaningful memory we’ve shared?',
    'How do you feel about taking time for yourself in a relationship?'
];

// Track the current question
let currentQuestionIndex = 0;

// Quick start button event listener
document.getElementById('quick-start-btn').addEventListener('click', function() {
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('question-section').style.display = 'block';
    displayNextQuestion();
});

// Display next question function
function displayNextQuestion() {
    // Check if there are still questions left
    if (currentQuestionIndex < questions.length) {
        document.getElementById('question').textContent = questions[currentQuestionIndex];
        currentQuestionIndex++;  // Move to the next question
        document.getElementById('message').style.display = 'none';  // Hide message if there are more questions
    } else {
        document.getElementById('question').textContent = "No more questions available.";
        document.getElementById('next-question-btn').textContent = 'Start Over';  // Change button text
        document.getElementById('message').style.display = 'block';  // Display message
    }
}

// Next question button event listener
document.getElementById('next-question-btn').addEventListener('click', function() {
    if (currentQuestionIndex >= questions.length) {
        // Reset to the first question
        currentQuestionIndex = 0;
        document.getElementById('next-question-btn').textContent = 'Next Question';  // Reset button text
    }
    displayNextQuestion();
});
