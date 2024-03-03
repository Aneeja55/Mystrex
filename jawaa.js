function convertToButton() {
    const inputVal = document.getElementById('text').value; // Get the input value
    if (inputVal.trim() === '') {
        alert('add a task!');
        return;
    }
    const newButton = document.createElement('button'); // Create a new button element

    newButton.textContent = inputVal; // Set the button text to the input value
    newButton.onclick = function() { // Optionally, add an onclick event to the new button
        alert('Button clicked: ' + inputVal);
        fetch('data.html')
        // Append the script element to the document's head
        document.head.appendChild(buttonElement);
    };

    document.getElementById('buttonContainer').appendChild(newButton); // Append the new button to the container
    document.getElementById('inputValue').value = ''; // Optional: clear the input field
}
    