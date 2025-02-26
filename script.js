// Array collection to store available chess lessons
let lessons = ["Beginner Chess", "Intermediate Chess", "Advanced Chess"];

// Display the lessons dynamically on the page
function displayLessons() {
  const lessonList = document.getElementById("lessonList");
  lessonList.innerHTML = ""; // Clear the list before adding items

  // Loop through the lessons array and add each lesson to the list
  for (let i = 0; i < lessons.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = lessons[i];
    lessonList.appendChild(listItem);
  }
}

// Handle form submission (with a callback to show the result)
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting the usual way

  const lessonName = document.getElementById("lessonName").value;

  if (lessonName && !lessons.includes(lessonName)) {
    lessons.push(lessonName); // Add the new lesson to the array
    displayLessons(); // Update the displayed list

    // Display a success message using a callback
    displayMessage(`New lesson "${lessonName}" added successfully!`, "success");
  } else if (lessons.includes(lessonName)) {
    displayMessage(`The lesson "${lessonName}" already exists.`, "error");
  } else {
    displayMessage("Please enter a valid lesson name.", "error");
  }

  // Reset the form after submission
  document.getElementById("lessonForm").reset();
}

// Display success or error messages
function displayMessage(message, type) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = message;
  
  // Apply a different style based on message type
  if (type === "success") {
    messageDiv.style.color = "green";
  } else if (type === "error") {
    messageDiv.style.color = "red";
  }
}

// Event listener for form submission
document.getElementById("lessonForm").addEventListener("submit", handleFormSubmit);

// Display lessons when the page loads
window.onload = function() {
  displayLessons();
  // Example of form validation
function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_-]{3,9}$/; // Validate username (4-10 alphanumeric)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,12}$/; // Validate password (6-12 characters)

    if (!usernameRegex.test(username)) {
        alert('Invalid username! (4-10 alphanumeric characters)');
        return false;
    }

    if (!passwordRegex.test(password)) {
        alert('Invalid password! (6-12 characters)');
        return false;
    }
    
    return true;
}

// Handling chess piece movement (placeholder logic)
function movePiece(piece, from, to) {
    console.log(`Moving ${piece} from ${from} to ${to}`);
    // Logic to update the board position can go here
}

// Event listeners for game actions
document.getElementById('startGame').addEventListener('click', function() {
    alert("Game Started!");
    // Additional code to start the game
}






);


}
