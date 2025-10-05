// Get elements from HTML
const calculateButton = document.getElementById("calculateButton");
const resultElement = document.getElementById("result");

// Pet age formulas
const dogYears = [15, 9]; // First year = 15, second = 9, then 5 for each after
const catYears = [15, 9]; // First year = 15, second = 9, then 4 after


// Listen for click on the button
calculateButton.addEventListener("click", function () {
  // Get the selected pet type and age entered by the user
  const petType = document.getElementById("petType").value;
  const petAge = parseInt(document.getElementById("petAge").value);

  // Check if the input is a number
  if (isNaN(petAge) || petAge < 1) {
    resultElement.textContent = "⚠️ Please enter a valid age❗";
    return;
  }

  // Function to convert to human years
  function convertToHumanYears(petAge, petArray) {
    let humanYears = 0;

    if (petAge === 1) {
      humanYears = petArray[0];
    } else if (petAge === 2) {
      humanYears = petArray[0] + petArray[1];
    } else {
      humanYears = petArray[0] + petArray[1];

      // Add extra years
      for (let i = 3; i <= petAge; i++) {
        if (petArray === dogYears) {
          humanYears += 5;
        } else if (petArray === catYears) {
          humanYears += 4;
        }
      }
    }

    return humanYears;
  }

  let humanAge;

  if (petType === "dog") {
    humanAge = convertToHumanYears(petAge, dogYears);
  } else if (petType === "cat") {
    humanAge = convertToHumanYears(petAge, catYears);
  } else {
    resultElement.textContent = "❗ Please select a valid pet type";
    return;
  }

  // Show the result
  resultElement.textContent = `🎉 Your ${petType} is about ${humanAge} human years old! 🎈`;
});


// Mouseover effect
function hoverEffect() {
  console.log("Button hovered! 🐾");
}
