//your JS code here. If required.
// Define the async function that waits for a specified delay
async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to handle form submission
async function handleSubmit() {
    // Retrieve user input values
    const text = document.getElementById('text').value;
    const delayTime = parseInt(document.getElementById('delay').value, 10);

    // Validate input values
    if (!text || isNaN(delayTime) || delayTime < 0) {
        alert('Please enter valid text and a non-negative delay value.');
        return;
    }

    // Wait for the specified delay
    await delay(delayTime);

    // Display the text in the output div
    document.getElementById('output').innerText = text;
}

// Attach event listener to the button
document.getElementById('btn').addEventListener('click', handleSubmit);
