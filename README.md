# Lock In - Programming Quiz Game

Welcome to Lock In! This is an interactive multiple-choice quiz application built with Astro to test your programming knowledge and help you lock in your skills.

## Features

- � Multiple programming languages (C++, Java, Python)
- 🎯 Multiple choice questions with instant feedback
- 📊 Score tracking and grade calculation
- 🎨 Beautiful, responsive design
- 🔄 Retake quizzes and switch between languages

## Project Structure

```
src/
├── components/
│   ├── ClassSelector.astro    # Language selection
│   ├── QuizScreen.astro      # Quiz question display
│   ├── QuizExplanation.astro # Answer explanations
│   └── QuizResults.astro     # Results and scoring
├── data/
│   ├── cpp-class.json         # C++ programming questions
│   ├── java-class.json        # Java programming questions
│   └── python-class.json      # Python programming questions
├── layouts/
│   └── Layout.astro           # Main page layout
├── pages/
│   └── index.astro           # Main quiz application
├── styles/
│   └── quiz.ts               # Centralized quiz styles
├── types/
│   └── quiz.ts               # TypeScript interfaces
└── utils/
    └── quiz-helpers.ts       # Shared utility functions
```

## Quiz Question Format

Each JSON file in the `src/data/` directory represents a different programming language. Questions follow this schema:

```json
{
  "question": "Question text here?",
  "a": "Option A",
  "b": "Option B", 
  "c": "Option C",
  "d": "Option D",
  "answer": "b"
}
```

## Adding New Programming Languages

1. Create a new JSON file in `src/data/` (e.g., `javascript-class.json`)
2. Add programming questions following the schema above
3. Update the `availableClasses` array in `src/components/ClassSelector.astro`

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the local server URL

4. Click "Start Quiz Game" from the home page

## How to Play

1. **Select a Programming Language**: Choose from C++, Java, or Python
2. **Answer Questions**: Read each programming question and select your answer (A, B, C, or D)
3. **Submit**: Click "Submit Answer" to proceed to the next question
4. **View Results**: See your final score, percentage, and grade
5. **Retake or Switch**: Choose to retake the same quiz or try a different programming language

## Grading Scale

- A: 90-100%
- B: 80-89%
- C: 70-79%
- D: 60-69%
- F: Below 60%

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## Technologies Used

- **Astro**: Static site generator and framework
- **TypeScript**: Type-safe JavaScript
- **CSS**: Custom styling with modern CSS features
- **JSON**: Question data storage

Enjoy learning and testing your programming knowledge! 💻🎓
