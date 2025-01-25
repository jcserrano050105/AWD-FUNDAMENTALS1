// VARIABLES AND DATA TYPES DEMO 
document.getElementById("variables").addEventListener("mouseenter", function () {
    const demo = document.getElementById("variables-demo");
    let name = "Alice";
    let age = 25;
    let hobbies = ["Reading", "Hiking", "Coding"];

    demo.innerHTML = `
      <p>Name: <span class="demo-output">${name}</span></p>
      <p>Age: <span class="demo-output">${age}</span></p>
      <p>Hobbies: <span class="demo-output">${hobbies.join(", ")}</span></p>
    `;
});

// INPUT AND OUTPUT DEMO
document.getElementById("input-output").addEventListener("mouseenter", function () {
    const demo = document.getElementById("input-output-demo");

    if (!demo.innerHTML.trim()) {
        demo.innerHTML = `
          <p>Enter your name:</p>
          <input type="text" id="userInput" placeholder="Your name here" />
          <button id="submitButton">Submit</button>
          <p id="output" class="demo-output"></p>
        `;

        const button = document.getElementById("submitButton");
        button.addEventListener("click", function () {
            const userInput = document.getElementById("userInput").value;
            const output = document.getElementById("output");

            if (userInput) {
                output.textContent = `Hello, ${userInput}! Welcome to the Input and Output demo.`;
            } else {
                output.textContent = "Please enter your name!";
            }
        });
    }
});

// CONDITIONAL STATEMENTS DEMO (Input-Based)
document.getElementById("conditional").addEventListener("mouseenter", function () {
    const demo = document.getElementById("conditional-demo");

    
    if (!demo.innerHTML.trim()) {
        demo.innerHTML = `
          <p>Select a condition to check:</p>
          <select id="conditionSelect">
            <option value="" disabled selected>Select an option</option>
            <option value="weather">Weather (Temperature)</option>
            <option value="grade">Grade Evaluation</option>
            <option value="age">Age Category</option>
          </select>
          <div id="inputSection" style="margin-top: 10px;"></div>
          <div id="conditionOutput" class="demo-output" style="margin-top: 10px;"></div>
        `;

        const conditionSelect = document.getElementById("conditionSelect");
        const inputSection = document.getElementById("inputSection");
        const conditionOutput = document.getElementById("conditionOutput");

        
        conditionSelect.addEventListener("change", function () {
            const selectedCondition = conditionSelect.value;

            if (selectedCondition === "weather") {
                // Weather Input
                inputSection.innerHTML = `
                  <p>Enter temperature (°C):</p>
                  <input type="number" id="weatherInput" placeholder="Temperature in °C" />
                  <button id="weatherSubmit">Submit</button>
                `;

                const weatherSubmit = document.getElementById("weatherSubmit");
                weatherSubmit.addEventListener("click", function () {
                    const temperature = parseFloat(document.getElementById("weatherInput").value);
                    if (isNaN(temperature)) {
                        conditionOutput.textContent = "Please enter a valid temperature.";
                    } else {
                        conditionOutput.innerHTML = `
                          <p>Temperature: <span>${temperature}°C</span></p>
                          <p>Condition: ${
                              temperature >= 30
                                  ? "It's a hot day!"
                                  : temperature >= 15
                                  ? "The weather is pleasant."
                                  : "It's quite cold today."
                          }</p>
                        `;
                    }
                });
            } else if (selectedCondition === "grade") {
                // Grade Input
                inputSection.innerHTML = `
                  <p>Enter a grade (0-100):</p>
                  <input type="number" id="gradeInput" placeholder="Grade" />
                  <button id="gradeSubmit">Submit</button>
                `;

                const gradeSubmit = document.getElementById("gradeSubmit");
                gradeSubmit.addEventListener("click", function () {
                    const grade = parseInt(document.getElementById("gradeInput").value, 10);
                    if (isNaN(grade) || grade < 0 || grade > 100) {
                        conditionOutput.textContent = "Please enter a valid grade (0-100).";
                    } else {
                        conditionOutput.innerHTML = `
                          <p>Grade: <span>${grade}</span></p>
                          <p>Evaluation: ${
                              grade >= 90
                                  ? "Excellent"
                                  : grade >= 75
                                  ? "Good"
                                  : grade >= 50
                                  ? "Pass"
                                  : "Fail"
                          }</p>
                        `;
                    }
                });
            } else if (selectedCondition === "age") {
                // Age Input
                inputSection.innerHTML = `
                  <p>Enter age:</p>
                  <input type="number" id="ageInput" placeholder="Age" />
                  <button id="ageSubmit">Submit</button>
                `;

                const ageSubmit = document.getElementById("ageSubmit");
                ageSubmit.addEventListener("click", function () {
                    const age = parseInt(document.getElementById("ageInput").value, 10);
                    if (isNaN(age) || age < 0) {
                        conditionOutput.textContent = "Please enter a valid age.";
                    } else {
                        conditionOutput.innerHTML = `
                          <p>Age: <span>${age}</span></p>
                          <p>Category: ${
                              age < 13
                                  ? "Child"
                                  : age < 20
                                  ? "Teenager"
                                  : age < 60
                                  ? "Adult"
                                  : "Senior"
                          }</p>
                        `;
                    }
                });
            }
        });
    }
});

// LOOPING STATEMENTS DEMO 
document.getElementById("looping").addEventListener("mouseenter", function () {
    const demo = document.getElementById("looping-demo");

    
    if (!demo.innerHTML.trim()) {
        demo.innerHTML = `
          <p>Enter the item you want to loop:</p>
          <input type="text" id="loopItemInput" placeholder="Enter an item (e.g., Apple)" />
          <p>Enter the number of times to loop:</p>
          <input type="number" id="loopCountInput" placeholder="Enter the number of repetitions" />
          <button id="loopSubmit">Generate List</button>
          <div id="loopOutput" class="demo-output" style="margin-top: 10px;"></div>
        `;

        const loopSubmit = document.getElementById("loopSubmit");
        const loopOutput = document.getElementById("loopOutput");

        
        loopSubmit.addEventListener("click", function () {
            const loopItem = document.getElementById("loopItemInput").value;
            const loopCount = parseInt(document.getElementById("loopCountInput").value, 10);

            if (!loopItem.trim()) {
                loopOutput.textContent = "Please enter a valid item to loop.";
            } else if (isNaN(loopCount) || loopCount <= 0) {
                loopOutput.textContent = "Please enter a valid positive number for the loop count.";
            } else {
                let output = "<ul>";
                for (let i = 1; i <= loopCount; i++) {
                    output += `<li class="demo-output">${i}. ${loopItem}</li>`;
                }
                output += "</ul>";
                loopOutput.innerHTML = output;
            }
        });
    }
});

