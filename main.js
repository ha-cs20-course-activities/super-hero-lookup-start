// Superhero Lookup

// Add Event Listener
document.getElementById("superhero-select").addEventListener("change", setSuperhero);

// Event Function
function setSuperhero() {
    // Set the main image based on the user's search input

    // Get user input
    let supername = document.getElementById("superhero-select").value;

    // Test variable name
    if (supername == "Black Panther") {
        // Black Panther Settings
        document.getElementById("super-title").innerHTML = supername.toUpperCase();
        document.getElementById("super-img").src = "images/black-panther.png";
        document.getElementById("super-link").href = "https://en.wikipedia.org/wiki/Black_Panther_(comics)";
        document.body.style.backgroundColor = "black";
    } else if (supername == "Thor") {
        // Thor Settings
        document.getElementById("super-title").innerHTML = supername.toUpperCase();
        document.getElementById("super-img").src = "images/thor.jpg";
        document.getElementById("super-link").href = "https://en.wikipedia.org/wiki/Thor_(Marvel_Comics)";
        document.body.style.backgroundColor = "#FFFD90";
    } else if (supername == "Hulk") {
         // Hulk Settings
         document.getElementById("super-title").innerHTML = supername.toUpperCase();
         document.getElementById("super-img").src = "images/hulk.jpg";
         document.getElementById("super-link").href = "https://en.wikipedia.org/wiki/Hulk_(comics)";
         document.body.style.backgroundColor = "#4EB528";
    } else if (supername == "Spiderman") {
         // Spiderman Settings
         document.getElementById("super-title").innerHTML = supername.toUpperCase();
         document.getElementById("super-img").src = "images/spiderman.jpg";
         document.getElementById("super-link").href = "https://en.wikipedia.org/wiki/Spider-Man";
         document.body.style.backgroundColor = "#B4000C";
    } 

}

