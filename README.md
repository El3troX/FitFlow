# FitFlow - Fitness and Diet Planner

FitFlow is a **fitness and diet planning web application** designed to help users achieve their health and fitness goals. It includes workout tutorials, a BMI calculator, a diet planner, and a calorie tracker. The app is built using **HTML**, **CSS**, and **JavaScript**, with data stored in `localStorage` for persistence.

---

## Features

### 1. Workouts
- **Gym Workouts**: Detailed tutorials for gym exercises like Bench Press, Deadlifts, and Squats.
- **Yoga Workouts**: Step-by-step instructions for yoga poses like Sun Salutation, Warrior Pose, and Tree Pose.
- **Dance Workouts**: Fun and energetic dance routines to burn calories.
- **Workout Schedule Generator**: Create and manage your workout schedule.

### 2. Diet Planner
- **Food Selection**: Choose from a wide range of food items fetched from a CSV file.
- **Calorie and Nutrient Tracking**: Track calories, protein, carbs, and fat for selected food items.
- **Search Functionality**: Search for food items by typing the first 3-4 letters.
- **Diet Plan Storage**: Save your diet plan in `localStorage` for future reference.

### 3. BMI Calculator
- Calculate your **Body Mass Index (BMI)** based on your weight and height.
- Get personalized workout and diet recommendations based on your BMI.

### 4. Membership
- Join FitFlow to access premium features and personalized fitness plans.

---

## Pages

### 1. Home (`index.html`)
- Landing page with a hero section and links to other pages.

### 2. Workouts (`workouts.html`)
- Explore popular workouts (Gym, Yoga, Dance) and access the Diet Planner.

### 3. Gym Workouts (`gym.html`)
- Detailed tutorials for gym exercises.

### 4. Yoga Workouts (`yoga.html`)
- Step-by-step instructions for yoga poses.

### 5. Diet Planner (`diet-planner.html`)
- Plan your meals and track your calorie and nutrient intake.

### 6. Membership (`membership.html`)
- Join FitFlow to access premium features.

---

## Setup Instructions

### 1. Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).
- A local server (e.g., Live Server in VS Code) to run the project.

### 2. Running the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/FitFlow.git
2. Navigate to the project directory:
   ```bash
   cd FitFlow
3. Open the project in your code editor (e.g., VS Code).

4. Start a local server (e.g., using Live Server in VS Code).

5. Open the app in your browser:
   http://localhost:5500/index.html
   
## File Structure
FitFlow/
├── index.html                # Home page
├── workouts.html             # Workouts page
├── gym.html                  # Gym workouts page
├── yoga.html                 # Yoga workouts page
├── diet-planner.html         # Diet planner page
├── membership.html           # Membership page
├── styles.css                # Global styles
├── script.js                 # JavaScript for index.html
├── diet-planner.js           # JavaScript for diet planner
├── food-data-group1.csv      # CSV file containing food data
├── media/                    # Folder for images
│   ├── gym.webp              # Gym workout image
│   ├── yoga.webp             # Yoga workout image
│   ├── dance.jpg             # Dance workout image
│   ├── diet.jpg              # Diet planner image
│   └── hero.mp4              # Hero section video
└── README.md                 # Project documentation
Usage
1. Workouts
Visit the Workouts page to explore Gym, Yoga, and Dance workouts.

Click on a workout card to view detailed tutorials.

2. Diet Planner
Visit the Diet Planner page.

Search for food items by typing the first 3-4 letters.

Select food items and add them to your diet plan.

View the total calories, protein, carbs, and fat for your diet plan.

Your diet plan is saved in localStorage and persists across page refreshes.

3. BMI Calculator
Visit the Gym or Yoga page.

Enter your weight and height to calculate your BMI.

Get personalized workout and diet recommendations based on your BMI.

4. Membership
Visit the Membership page to join FitFlow and access premium features.

### Technologies Used
HTML: Structure of the web pages.

CSS: Styling and layout.

JavaScript: Dynamic functionality and interactivity.

CSV: Food data storage and parsing.

LocalStorage: Persistent storage for diet plans.
