// 1. Create the array of student objects
const students = [
    { name: "Rahul Sharma", marks: 85, class: "10th A", address: "Bengaluru, Karnataka" },
    { name: "Ananya Iyer", marks: 92, class: "12th B", address: "Chennai, Tamil Nadu" },
    { name: "Amit Patel", marks: 78, class: "11th C", address: "Ahmedabad, Gujarat" },
    { name: "Sneha Reddy", marks: 95, class: "10th A", address: "Hyderabad, Telangana" },
    { name: "Vijay Kumar", marks: 64, class: "12th A", address: "Mumbai, Maharashtra" }
];

// Get references to our HTML elements
const cardContainer = document.getElementById("cardContainer");
const searchBox = document.getElementById("searchBox");

// 2. Function to render/display the cards on the screen
function displayStudents(studentArray) {
    // Clear out any old cards first
    cardContainer.innerHTML = "";

    // If no students match the search, show a message
    if (studentArray.length === 0) {
        cardContainer.innerHTML = "<p>No students found.</p>";
        return;
    }

    // Loop through each student in the array and create their HTML card
    studentArray.forEach(student => {
        const card = document.createElement("div");
        card.className = "student-card";

        card.innerHTML = `
            <h3>${student.name}</h3>
            <p><strong>Marks:</strong> ${student.marks}</p>
            <p><strong>Class:</strong> ${student.class}</p>
            <p><strong>Address:</strong> ${student.address}</p>
        `;

        // Add the newly made card to our main container
        cardContainer.appendChild(card);
    });
}

// 3. Function to filter students using JavaScript's .filter() method
function filterStudents() {
    // Get what the user typed and convert it to lowercase for easy matching
    const searchText = searchBox.value.toLowerCase();

    // Filter the original array based on the name attribute
    const filteredList = students.filter(student => {
        return student.name.toLowerCase().includes(searchText);
    });

    // Re-render the cards using only the filtered list
    displayStudents(filteredList);
}

// Initial call: Show all students when the page first loads up!
displayStudents(students);
