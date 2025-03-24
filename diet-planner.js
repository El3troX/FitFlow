// Fetch food data from CSV
async function fetchFoodData() {
    const response = await fetch('FOOD-DATA-GROUP1.csv');
    const data = await response.text();
    return data;
  }
  
  // Parse CSV data into an array of objects
  function parseCSV(csv) {
    const rows = csv.split('\n').slice(1); // Remove header row
    return rows.map(row => {
      const columns = row.split(',');
      return {
        food: columns[2], // Food Name
        calories: parseFloat(columns[3]), // Caloric Value
        fat: parseFloat(columns[4]), // Fat (g)
        saturatedFats: parseFloat(columns[5]), // Saturated Fats (g)
        monounsaturatedFats: parseFloat(columns[6]), // Monounsaturated Fats (g)
        polyunsaturatedFats: parseFloat(columns[7]), // Polyunsaturated Fats (g)
        carbs: parseFloat(columns[8]), // Carbohydrates (g)
        sugars: parseFloat(columns[9]), // Sugars (g)
        protein: parseFloat(columns[10]), // Protein (g)
        dietaryFiber: parseFloat(columns[11]), // Dietary Fiber (g)
        cholesterol: parseFloat(columns[12]), // Cholesterol (mg)
        sodium: parseFloat(columns[13]), // Sodium (mg)
        water: parseFloat(columns[14]), // Water (g)
        vitaminA: parseFloat(columns[15]), // Vitamin A (IU)
        vitaminB1: parseFloat(columns[16]), // Vitamin B1 (mg)
        vitaminB11: parseFloat(columns[17]), // Vitamin B11 (mcg)
        vitaminB12: parseFloat(columns[18]), // Vitamin B12 (mcg)
        vitaminB2: parseFloat(columns[19]), // Vitamin B2 (mg)
        vitaminB3: parseFloat(columns[20]), // Vitamin B3 (mg)
        vitaminB5: parseFloat(columns[21]), // Vitamin B5 (mg)
        vitaminB6: parseFloat(columns[22]), // Vitamin B6 (mg)
        vitaminC: parseFloat(columns[23]), // Vitamin C (mg)
        vitaminD: parseFloat(columns[24]), // Vitamin D (IU)
        vitaminE: parseFloat(columns[25]), // Vitamin E (mg)
        vitaminK: parseFloat(columns[26]), // Vitamin K (mcg)
        calcium: parseFloat(columns[27]), // Calcium (mg)
        copper: parseFloat(columns[28]), // Copper (mg)
        iron: parseFloat(columns[29]), // Iron (mg)
        magnesium: parseFloat(columns[30]), // Magnesium (mg)
        manganese: parseFloat(columns[31]), // Manganese (mg)
        phosphorus: parseFloat(columns[32]), // Phosphorus (mg)
        potassium: parseFloat(columns[33]), // Potassium (mg)
        selenium: parseFloat(columns[34]), // Selenium (mcg)
        zinc: parseFloat(columns[35]), // Zinc (mg)
        nutritionDensity: parseFloat(columns[36]) // Nutrition Density
      };
    }).filter(food => !isNaN(food.calories)); // Filter out invalid rows
  }
  
  // Populate food items in the dropdown
  function populateFoodItems(foodData, searchQuery = '') {
    const foodItemsSelect = document.getElementById('foodItems');
    foodItemsSelect.innerHTML = ''; // Clear previous options
  
    // Filter food items based on search query (first 3-4 letters)
    const filteredFoods = foodData.filter(food =>
      food.food.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  
    // Populate the dropdown with filtered food items
    filteredFoods.forEach(food => {
      const option = document.createElement('option');
      option.value = food.food;
      option.textContent = `${food.food} (${food.calories} kcal)`;
      foodItemsSelect.appendChild(option);
    });
  }
  
  // Add selected food items to the diet table
  function addFoodToDiet(foodData) {
    const selectedItems = Array.from(document.getElementById('foodItems').selectedOptions);
    const dietTableBody = document.querySelector('#dietTable tbody');
    const totalCalories = document.getElementById('totalCalories');
    const totalProtein = document.getElementById('totalProtein');
    const totalCarbs = document.getElementById('totalCarbs');
    const totalFat = document.getElementById('totalFat');
  
    selectedItems.forEach(item => {
      const food = foodData.find(f => f.food === item.value);
      if (food) {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${food.food}</td>
          <td>${food.calories}</td>
          <td>${food.protein}</td>
          <td>${food.carbs}</td>
          <td>${food.fat}</td>
          <td><button onclick="removeFood(this)" class="cta-button">Remove</button></td>
        `;
        dietTableBody.appendChild(row);
  
        // Update totals
        totalCalories.textContent = (parseFloat(totalCalories.textContent) + food.calories).toFixed(2);
        totalProtein.textContent = (parseFloat(totalProtein.textContent) + food.protein).toFixed(2);
        totalCarbs.textContent = (parseFloat(totalCarbs.textContent) + food.carbs).toFixed(2);
        totalFat.textContent = (parseFloat(totalFat.textContent) + food.fat).toFixed(2);
  
        // Save the updated diet plan to localStorage
        saveDietPlan();
      }
    });
  }
  
  // Remove food item from the diet table
  function removeFood(button) {
    const row = button.closest('tr');
    const cells = row.querySelectorAll('td');
    const totalCalories = document.getElementById('totalCalories');
    const totalProtein = document.getElementById('totalProtein');
    const totalCarbs = document.getElementById('totalCarbs');
    const totalFat = document.getElementById('totalFat');
  
    // Subtract values from totals
    totalCalories.textContent = (parseFloat(totalCalories.textContent) - parseFloat(cells[1].textContent)).toFixed(2);
    totalProtein.textContent = (parseFloat(totalProtein.textContent) - parseFloat(cells[2].textContent)).toFixed(2);
    totalCarbs.textContent = (parseFloat(totalCarbs.textContent) - parseFloat(cells[3].textContent)).toFixed(2);
    totalFat.textContent = (parseFloat(totalFat.textContent) - parseFloat(cells[4].textContent)).toFixed(2);
  
    // Remove the row
    row.remove();
  
    // Save the updated diet plan to localStorage
    saveDietPlan();
  }
  
  // Save the diet plan to localStorage
  function saveDietPlan() {
    const dietTableBody = document.querySelector('#dietTable tbody');
    const dietPlan = Array.from(dietTableBody.children).map(row => {
      const cells = row.querySelectorAll('td');
      return {
        food: cells[0].textContent,
        calories: parseFloat(cells[1].textContent),
        protein: parseFloat(cells[2].textContent),
        carbs: parseFloat(cells[3].textContent),
        fat: parseFloat(cells[4].textContent)
      };
    });
  
    localStorage.setItem('dietPlan', JSON.stringify(dietPlan));
  }
  
  // Load the diet plan from localStorage
  function loadDietPlan() {
    const dietPlan = JSON.parse(localStorage.getItem('dietPlan')) || [];
    const dietTableBody = document.querySelector('#dietTable tbody');
    const totalCalories = document.getElementById('totalCalories');
    const totalProtein = document.getElementById('totalProtein');
    const totalCarbs = document.getElementById('totalCarbs');
    const totalFat = document.getElementById('totalFat');
  
    // Clear the table
    dietTableBody.innerHTML = '';
  
    // Populate the table with saved diet plan
    dietPlan.forEach(food => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${food.food}</td>
        <td>${food.calories}</td>
        <td>${food.protein}</td>
        <td>${food.carbs}</td>
        <td>${food.fat}</td>
        <td><button onclick="removeFood(this)" class="cta-button">Remove</button></td>
      `;
      dietTableBody.appendChild(row);
  
      // Update totals
      totalCalories.textContent = (parseFloat(totalCalories.textContent) + food.calories).toFixed(2);
      totalProtein.textContent = (parseFloat(totalProtein.textContent) + food.protein).toFixed(2);
      totalCarbs.textContent = (parseFloat(totalCarbs.textContent) + food.carbs).toFixed(2);
      totalFat.textContent = (parseFloat(totalFat.textContent) + food.fat).toFixed(2);
    });
  }
  
  // Initialize the diet planner
  async function initDietPlanner() {
    const csvData = await fetchFoodData();
    const foodData = parseCSV(csvData);
  
    // Populate food items initially
    populateFoodItems(foodData);
  
    // Load saved diet plan
    loadDietPlan();
  
    // Add event listener for search input
    const searchInput = document.getElementById('searchFood');
    searchInput.addEventListener('input', () => {
      const searchQuery = searchInput.value.trim();
      populateFoodItems(foodData, searchQuery);
    });
  
    // Add event listener for "Add to Diet" button
    document.getElementById('addFood').addEventListener('click', () => addFoodToDiet(foodData));
  }
  
  // Start the app
  initDietPlanner();