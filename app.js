// 1. Declare an empty array using JS literal notation to store student names in future.
let studentNamesLiteral = [];

// 2. Declare an empty array using JS object notation to store student names in future.
let studentNamesObject = new Array();

// 3. Declare and initialize a strings array.
let stringsArray = ["apple", "banana", "orange"];

// 4. Declare and initialize a numbers array.
let numbersArray = [1, 2, 3, 4, 5];

// 5. Declare and initialize a boolean array.
let booleanArray = [true, false, true, true];

// 6. Declare and initialize a mixed array.
let mixedArray = ["apple", 2, true, "banana", false];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).
let qualificationsArray = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// Display qualificationsArray in the browser console
console.log(qualificationsArray);

// Define arrays to store student names and scores
let studentNames = ["John", "Alice", "Bob"];
let scores = [];

// Function to generate random scores for each student
function generateRandomScores() {
    for (let i = 0; i < studentNames.length; i++) {
        let score = Math.floor(Math.random() * 401) + 100; // Generating random scores between 100 and 500
        scores.push(score);
    }
}

// Function to calculate percentage
function calculatePercentage(score) {
    return ((score / 500) * 100).toFixed(2);
}

// Function to display scores and percentages
function displayScoresAndPercentages() {
    console.log("Student Scores and Percentages:");
    for (let i = 0; i < studentNames.length; i++) {
        console.log(`${studentNames[i]}: Score - ${scores[i]}, Percentage - ${calculatePercentage(scores[i])}%`);
    }
}

// Generate random scores
generateRandomScores();

// Display scores and percentages
displayScoresAndPercentages();

// Initialize an array with color names
let colorsArray = ["red", "green", "blue"];

// Display the array elements in the browser
console.log("Initial array:", colorsArray);

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
let colorToAddBeginning = prompt("Enter a color to add to the beginning of the array:");
colorsArray.unshift(colorToAddBeginning);
console.log("Array after adding color to the beginning:", colorsArray);

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array.
let colorToAddEnd = prompt("Enter a color to add to the end of the array:");
colorsArray.push(colorToAddEnd);
console.log("Array after adding color to the end:", colorsArray);

// c. Add two more colors to the beginning of the array.
colorsArray.unshift("yellow", "orange");
console.log("Array after adding two colors to the beginning:", colorsArray);

// d. Delete the first color in the array.
colorsArray.shift();
console.log("Array after deleting the first color:", colorsArray);

// e. Delete the last color in the array.
colorsArray.pop();
console.log("Array after deleting the last color:", colorsArray);

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to the desired position/index.
let indexToAdd = parseInt(prompt("Enter the index where you want to add the color:"));
let colorToAdd = prompt("Enter the color you want to add:");
colorsArray.splice(indexToAdd, 0, colorToAdd);
console.log("Array after adding color at index:", colorsArray);

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from the user-defined position/index.
let indexToDelete = parseInt(prompt("Enter the index from which you want to delete color(s):"));
let numberOfColorsToDelete = parseInt(prompt("Enter the number of colors you want to delete:"));
colorsArray.splice(indexToDelete, numberOfColorsToDelete);
console.log("Array after deleting colors from index:", colorsArray);


// Define an array to store student scores
let studentScores = [87, 65, 92, 78, 85];

// Sort the array in ascending order using the Array's sort method
studentScores.sort(function(a, b) {
    return a - b;
});

// Display the sorted array
console.log("Student Scores sorted in ascending order:", studentScores);


// Initialize an array with city names
let cities = ["New York", "London", "Tokyo", "Paris", "Sydney"];

// Initialize an empty array to store selected cities
let selectedCities = [];

// Copy three elements from cities array to selectedCities array
selectedCities = cities.slice(0, 3);

// Display the selected cities array
console.log("Selected cities:", selectedCities);


// Initialize the array
var arr = ["This", "is", "my", "cat"];

// Create a single string using the join method
var singleString = arr.join(" ");

// Display the single string
console.log(singleString);


// Initialize an empty array to store values
let fifoArray = [];

// Function to add values to the FIFO array
function addToFifo(value) {
    fifoArray.push(value); // Add the value to the end of the array
}

// Function to remove and return the first value from the FIFO array
function removeFromFifo() {
    return fifoArray.shift(); // Remove and return the first element of the array
}

// Add values one by one to the FIFO array
addToFifo("Value 1");
addToFifo("Value 2");
addToFifo("Value 3");

// Access values in the order in which they were stored
console.log("First value removed:", removeFromFifo()); // Output: "Value 1"
console.log("Second value removed:", removeFromFifo()); // Output: "Value 2"
console.log("Third value removed:", removeFromFifo()); // Output: "Value 3"


// Initialize an empty array to store values
let lifoArray = [];

// Function to add values to the LIFO array
function addToLifo(value) {
    lifoArray.push(value); // Add the value to the end of the array
}

// Function to remove and return the last value from the LIFO array
function removeFromLifo() {
    return lifoArray.pop(); // Remove and return the last element of the array
}

// Add values one by one to the LIFO array
addToLifo("Value 1");
addToLifo("Value 2");
addToLifo("Value 3");

// Access values in reverse order
console.log("First value removed:", removeFromLifo()); // Output: "Value 3"
console.log("Second value removed:", removeFromLifo()); // Output: "Value 2"
console.log("Third value removed:", removeFromLifo()); // Output: "Value 1"


// Store phone manufacturers in an array
let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Start building the select menu HTML
let selectMenuHTML = "<select>";

// Loop through the phone manufacturers array to create option elements
for (let i = 0; i < phoneManufacturers.length; i++) {
    selectMenuHTML += "<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>";
}

// Close the select menu HTML
selectMenuHTML += "</select>";

// Display the select menu in the browser using document.write()
document.write(selectMenuHTML);

