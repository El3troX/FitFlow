// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


  // Exercise data for each type
  const exercises = {
    gym: ["Bench Press", "Deadlift", "Squats", "Pull-Ups", "Leg Press", "Bicep Curls", "Tricep Dips"],
    yoga: ["Sun Salutation", "Warrior Pose", "Tree Pose", "Downward Dog", "Child's Pose"],
    dance: ["Zumba", "Hip-Hop", "Salsa", "Ballet", "Bollywood Dance"]
  };

  // Load schedule data from localStorage
  let scheduleData = JSON.parse(localStorage.getItem('workoutSchedule')) || [];

  // Function to render the schedule table
  function renderSchedule() {
    const scheduleTable = document.getElementById('scheduleTable');
    if (scheduleData.length > 0) {
      scheduleTable.innerHTML = `
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Exercise</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${scheduleData.map((item, index) => `
              <tr>
                <td>${item.day}</td>
                <td>${item.time}</td>
                <td>${item.exercise}</td>
                <td><button onclick="removeExercise(${index})" class="cta-button">Remove</button></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    } else {
      scheduleTable.innerHTML = `<p>No exercises added yet. Add exercises to create your schedule.</p>`;
    }
  }

  // Function to populate exercises based on selected type
  document.getElementById('exerciseType').addEventListener('change', function () {
    const exerciseType = this.value;
    const exerciseSelect = document.getElementById('exercise');

    // Clear previous options
    exerciseSelect.innerHTML = '<option value="">-- Select Exercise --</option>';

    // Populate exercises based on selected type
    if (exerciseType && exercises[exerciseType]) {
      exercises[exerciseType].forEach(exercise => {
        const option = document.createElement('option');
        option.value = exercise;
        option.textContent = exercise;
        exerciseSelect.appendChild(option);
      });
      exerciseSelect.disabled = false; // Enable the exercise dropdown
    } else {
      exerciseSelect.disabled = true; // Disable the exercise dropdown
    }
  });

  // Function to add an exercise to the schedule
  document.getElementById('scheduleForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const exerciseType = document.getElementById('exerciseType').value;
    const exercise = document.getElementById('exercise').value;
    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;

    // Add the new exercise to the schedule data
    scheduleData.push({ exerciseType, exercise, day, time });

    // Save the updated schedule data to localStorage
    localStorage.setItem('workoutSchedule', JSON.stringify(scheduleData));

    // Re-render the schedule table
    renderSchedule();

    // Reset the form
    document.getElementById('scheduleForm').reset();
    document.getElementById('exercise').disabled = true; // Disable exercise dropdown after reset
  });

  // Function to remove an exercise from the schedule
  function removeExercise(index) {
    scheduleData.splice(index, 1); // Remove the exercise at the specified index
    localStorage.setItem('workoutSchedule', JSON.stringify(scheduleData)); // Update localStorage
    renderSchedule(); // Re-render the schedule table
  }

  // Render the schedule on page load
  renderSchedule();