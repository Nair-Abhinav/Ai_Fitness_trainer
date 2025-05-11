# FitFuture - AI-Powered Fitness Platform

FitFuture is a comprehensive fitness application that combines AI technology with fitness expertise to provide users with a complete workout and nutrition solution. The platform features real-time exercise evaluation using computer vision, personalized meal plans, and health tracking tools.

![FitFuture Logo](https://via.placeholder.com/800x200?text=FitFuture+Logo)

## 📋 Table of Contents

- Features
- Technology Stack
- Project Structure
- Installation
- Usage
- API Reference
- Screenshots
- Contributing
- License

## ✨ Features

### 🏋️‍♂️ AI Exercise Evaluation
- Real-time form analysis using computer vision
- Exercise rep counting
- Personalized feedback on technique
- Video tutorials for proper form

### 🥗 Personalized Meal Plans
- Customized nutrition plans based on fitness goals
- Categorized plans: Weight Loss, Muscle Gain, Maintenance
- Detailed nutritional breakdown (calories, protein, carbs, fat)
- Easy-to-follow meal descriptions

### 📊 BMI & Health Tracking
- BMI calculator
- Visual progress tracking
- Health metrics monitoring
- Personalized insights

### 🍎 Calorie Counter
- Track daily caloric intake
- Exercise calorie burn calculator
- Nutritional information database

## 🛠️ Technology Stack

### Frontend
- **Framework**: [Next.js](https://nextjs.org/)
- **UI Library**: [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **State Management**: React Hooks

### Backend
- **Framework**: [Flask](https://flask.palletsprojects.com/)
- **Computer Vision**: [OpenCV](https://opencv.org/), [MediaPipe](https://mediapipe.dev/)
- **Data Processing**: [NumPy](https://numpy.org/)
- **Audio**: [PyGame](https://www.pygame.org/)

## 📂 Project Structure

```
FitFuture/
├── Frontend/                   # Next.js frontend application
│   ├── app/                    # Next.js app directory
│   │   ├── exercise/           # Exercise evaluation features
│   │   ├── meal-plans/         # Meal planning features
│   │   └── ...
│   ├── components/             # Reusable React components
│   │   ├── ui/                 # UI components (buttons, cards, etc.)
│   │   └── ...
│   ├── lib/                    # Utility functions
│   ├── public/                 # Static assets
│   └── styles/                 # Global styles
│
└── Backend/                    # Flask backend application
    ├── static/                 # Static files (CSS, JS)
    ├── templates/              # HTML templates
    ├── app.py                  # Main Flask application
    ├── listofexercises.py      # Exercise definitions
    └── requirements.txt        # Python dependencies
```

## 🚀 Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+)
- [Python](https://www.python.org/) (v3.8+)
- [pip](https://pip.pypa.io/en/stable/installation/)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Frontend Setup

```bash
# Navigate to frontend directory
cd Frontend

# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev
# or
pnpm dev
```

### Backend Setup

```bash
# Navigate to backend directory
cd Backend

# Create and activate virtual environment (optional but recommended)
python -m venv venv
source venv/bin/activate  # For Linux/Mac
venv\Scripts\activate     # For Windows

# Install dependencies
pip install -r requirements.txt

# Start Flask server
python app.py
```

## 💻 Usage

1. **Start both Frontend and Backend servers** using the instructions above
2. Access the application at `http://localhost:3000`
3. Navigate through the different sections:
   - Homepage: Overview of features
   - Exercise: Select exercises and get real-time feedback
   - Meal Plans: Browse and select personalized meal plans
   - BMI Calculator: Calculate and track BMI
   - Calorie Calculator: Track caloric intake and expenditure

## 📡 API Reference

### Backend API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Home page |
| `/exercise1` | GET | Exercise page |
| `/contact` | GET | Contact page |
| `/bmi` | GET | BMI calculator |
| `/calorie` | GET | Calorie calculator |

## 📸 Screenshots

### Home Page
![Home Page](Frontend/Screenshots/home_page.png)
*Landing page showing the main features and navigation of FitFuture*

### Exercise Pages
![Exercise Selection Page](Frontend/Screenshots/exercise_page_1.png)
*Browse through different exercise categories and options*

![Exercise Detail Page](Frontend/Screenshots/exercise_page_2.png)
*Detailed view of exercise categories with instructions*

### Individual Exercise Analysis
![Individual Exercise](Frontend/Screenshots/individual_excercise.png)
*Step-by-step guidance for performing specific exercises*

### Posture Analysis
<div style="display: flex; justify-content: space-between;">
  <div style="width: 48%;">
    <img src="Frontend/Screenshots/right_posture.png" alt="Correct Posture" width="100%"/>
    <p align="center"><em>Correct exercise form detected</em></p>
  </div>
  <div style="width: 48%;">
    <img src="Frontend/Screenshots/wrong_posture.png" alt="Incorrect Posture" width="100%"/>
    <p align="center"><em>Incorrect exercise form detected with feedback</em></p>
  </div>
</div>

### Health Calculators
![BMI Calculator](Frontend/Screenshots/BMI_calc_page.png)
*Calculate and track your Body Mass Index*

![Calorie Calculator](Frontend/Screenshots/calorie_calc.png)
*Track daily caloric intake and expenditure*

## 👥 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Original creators: Abhinav Nair, Diksha Velhal, and Bhumit Mehta
- Exercise form recognition powered by MediaPipe
- UI components from shadcn/ui library

---

Built with ❤️ by Abhinav Nair, Diksha Velhal, Bhumit Mehta