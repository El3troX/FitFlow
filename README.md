# 🌟 FitFlow - Fitness and Diet Planner

FitFlow is your **ultimate fitness and diet planning web application**, designed to help you achieve your health and fitness goals. With features like workout tutorials, a BMI calculator, a diet planner, and a calorie tracker, FitFlow is your all-in-one solution for a healthier lifestyle. Built using **HTML**, **CSS**, and **JavaScript**, the app ensures data persistence with `localStorage`.

---

## 👥 Team Members
- **Divyam Pandey 23BDS0139**
- **Srujan Rajput 23BCT0104**

## 🚀 Features

### 🏋️‍♂️ Workouts
- **Gym Workouts**: Tutorials for exercises like Bench Press, Deadlifts, and Squats.
- **Yoga Workouts**: Step-by-step guides for poses like Sun Salutation, Warrior Pose, and Tree Pose.
- **Dance Workouts**: Fun and energetic routines to burn calories.
- **Workout Schedule Generator**: Create and manage your personalized workout schedule.

### 🥗 Diet Planner
- **Food Selection**: Choose from a wide range of food items fetched from a CSV file.
- **Calorie and Nutrient Tracking**: Monitor calories, protein, carbs, and fat for selected foods.
- **Search Functionality**: Quickly find food items by typing the first 3-4 letters.
- **Diet Plan Storage**: Save your diet plan in `localStorage` for future use.

### 📊 BMI Calculator
- Calculate your **Body Mass Index (BMI)** based on weight and height.
- Receive personalized workout and diet recommendations tailored to your BMI.

### 💎 Membership
- Unlock premium features and personalized fitness plans by joining FitFlow.

---

## 🗂️ Pages Overview

| Page                  | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| **Home** (`index.html`)        | Landing page with a hero section and links to other pages.            |
| **Workouts** (`workouts.html`) | Explore Gym, Yoga, and Dance workouts and access the Diet Planner.    |
| **Gym Workouts** (`gym.html`)  | Detailed tutorials for gym exercises.                                |
| **Yoga Workouts** (`yoga.html`)| Step-by-step instructions for yoga poses.                            |
| **Dance Workouts** (`Dance.html`)| Detailed dance instructions.                            |
| **Diet Planner** (`diet-planner.html`) | Plan meals and track calorie and nutrient intake.               |
| **Membership** (`membership.html`) | Join FitFlow to access premium features.                          |

---

## 🛠️ Setup Instructions

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).
- A local server (e.g., Live Server in VS Code) to run the project.

### Steps to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/El3TroX/FitFlow.git
   ```
2. Navigate to the project directory:
   ```bash
   cd FitFlow
   ```
3. Open the project in your code editor (e.g., VS Code).
4. Start a local server (e.g., using Live Server in VS Code).
5. Open the app in your browser:
   ```
   http://localhost:5500/index.html
   ```

---

## 📁 File Structure

```plaintext
FitFlow/
├── index.html                # Home page
├── workouts.html             # Workouts page
├── gym.html                  # Gym workouts page
├── yoga.html                 # Yoga workouts page
├── Dance.html                 # Dance workouts page
├── diet-planner.html         # Diet planner page
├── membership.html           # Membership page
├── styles.css                # Global styles
├── script.js                 # JavaScript for index.html
├── diet-planner.js           # JavaScript for diet planner
├── food-data-group1.csv      # CSV file containing food data
├── media/                    # Folder for images
|   ├── ballet.jpg
|   ├── dancehero.jpg
|   ├── workout-schedule.jpg
|   ├── hiphop.jpg
|   ├── zumba.jpg
│   ├── gym.webp              # Gym workout image
│   ├── yoga.webp             # Yoga workout image
│   ├── dance.jpg             # Dance workout image
│   ├── food-plate.jpg       # Diet planner image
│   └── hero.mp4              # Hero section video
└── README.md                 # Project documentation
```

---

## 🎯 Usage Guide

### 🏋️ Workouts
1. Visit the **Workouts** page to explore Gym, Yoga, and Dance workouts.
2. Click on a workout card to view detailed tutorials.

### 🥗 Diet Planner
1. Visit the **Diet Planner** page.
2. Search for food items by typing the first 3-4 letters.
3. Select food items and add them to your diet plan.
4. View total calories, protein, carbs, and fat for your diet plan.
5. Your diet plan is saved in `localStorage` and persists across page refreshes.

### 📊 BMI Calculator
1. Visit the **Gym** or **Yoga** page.
2. Enter your weight and height to calculate your BMI.
3. Get personalized workout and diet recommendations based on your BMI.

### 💎 Membership
1. Visit the **Membership** page to join FitFlow and unlock premium features.

---

## 🛠️ Technologies Used
- **HTML**: Structure of the web pages.
- **CSS**: Styling and layout.
- **JavaScript**: Dynamic functionality and interactivity.
- **CSV**: Food data storage and parsing.
- **LocalStorage**: Persistent storage for diet plans.

---

Start your fitness journey today with **FitFlow**! 💪✨
