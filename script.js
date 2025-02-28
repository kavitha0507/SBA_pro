
// Predefined login credentials (For testing only, do not use in production)
const correctUsername = "rahul";
const correctPassword = "chess123";

// Game history collection (array of objects)
const gameHistory = [
    { gameName: "Game 1", opponent: "John", result: "Win" },
    { gameName: "Game 2", opponent: "Mike", result: "Loss" },
    { gameName: "Game 3", opponent: "Emma", result: "Draw" }
];

// Function to handle login
function handleLogin(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the username and password entered by the user
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the username and password match the predefined credentials
    if (username === correctUsername && password === correctPassword) {
        document.getElementById("login-status").innerHTML = "<p style='color: green;'>Login successful! Welcome, " + username + ".</p>";
        // Redirect to the game page or profile page
        window.location.href = "game.html";  // Replace with the desired page
    } else {
        document.getElementById("login-status").innerHTML = "<p style='color: red;'>Invalid username or password.</p>";
    }
}

// Function to handle the submission of a new game (simulated)
function handleGameSubmission(event) {
    event.preventDefault(); // Prevent form submission to the server

    // Get form input values
    const gameName = document.getElementById("game-name").value;
    const opponent = document.getElementById("opponent").value;
    const result = document.getElementById("result").value;

    // Create a new game object and add it to the game history
    const newGame = { gameName, opponent, result };
    gameHistory.push(newGame); // Add new game to the history

    // Display the submitted data in a status div
    const statusDiv = document.getElementById("submit-status");
    statusDiv.innerHTML = `
        <p style="color: green;">Game submitted successfully!</p>
        <p><strong>Game Name:</strong> ${gameName}</p>
        <p><strong>Opponent's Name:</strong> ${opponent}</p>
        <p><strong>Result:</strong> ${result}</p>
    `;

    // Optionally, reset the form after submission
    document.getElementById("submit-game-form").reset();
}

// Function to display the game history on the profile page
function displayGameHistory() {
    const table = document.getElementById("game-history-table");

    // Loop through the game history array and create table rows dynamically
    gameHistory.forEach((game, index) => {
        const row = table.insertRow();
        row.insertCell(0).textContent = game.gameName;
        row.insertCell(1).textContent = game.opponent;
        row.insertCell(2).textContent = game.result;
    });
}

// Adding event listeners to forms
document.getElementById("login-form").addEventListener("submit", handleLogin);
document.getElementById("submit-game-form").addEventListener("submit", handleGameSubmission);

// Call the displayGameHistory function when the page loads
window.onload = function() {
    displayGameHistory();
};
