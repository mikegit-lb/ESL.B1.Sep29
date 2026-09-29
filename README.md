# ESL B1 Speaking Practice Hub (High School Day-to-Day Life)

An interactive, client-side web application containing **30 CEFR B1-level speaking questions** tailored to day-to-day high school life. Built with modern HTML5, CSS3, and vanilla JavaScript.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Level](https://img.shields.io/badge/CEFR%20Level-B1%20Intermediate-green.svg)
![Offline Ready](https://img.shields.io/badge/Offline-100%25%20Ready-brightgreen.svg)

---

## 🌟 Features

- **30 High-Quality B1 Prompts**: Covering 6 real-life high school topics:
  1. 🌅 Morning Routines & Commute
  2. 🏫 School, Classes & Homework
  3. 👥 Friends, Cafeteria & Break Time
  4. 🎨 After-School Hobbies, Sports & Stress Relief
  5. 📱 Smartphone Screen Time & Social Media
  6. 🏡 Family Evenings, Chores & Weekend Plans
- **🎴 Dedicated 120-Word Vocab Flashcard Deck**:
  - Interactive **3D CSS Flip Cards** with smooth flip animations.
  - **Front Face**: Target word, Part of speech, Audio pronunciation, and context topic badge.
  - **Back Face**: Definition, in-context high school example sentence with bolded keywords, Audio pronunciation for example sentences, and direct link to the related speaking prompt.
  - **Study Modes**: 3D Flashcard Flip Deck vs. 120-Word Grid Table Explorer.
  - **Mastery Tracker**: "Need Review" vs. "Mastered" status tracking with progress counters.
- **Scaffolding for Each Question**:
  - 💬 **Sentence Starters** to help formulate initial sentences.
  - 📚 **Target Vocabulary** with definitions and audio.
  - 💡 **CEFR B1 Model Answers** demonstrating natural connective phrasing.
  - ❓ **Follow-Up Questions** to extend conversational fluency.
- **Interactive Tools**:
  - 🗣️ **Text-to-Speech (TTS)**: Built-in audio pronunciation for every question.
  - 🎙️ **Voice Recorder**: Record your own responses and listen back to self-evaluate pronunciation and fluency.
  - ⏱️ **Speaking Practice Timer**: Customizable prep time (15s/30s) and speaking timer (60s/90s/120s) with sound chimes.
  - ⚡ **Speed Drill Mode**: Random 1-minute speaking challenge for classroom warm-ups or exam simulations.
  - 🔍 **Search & Category Filters**: Search questions by keyword, topic, or bookmark status.
  - 📊 **Progress Tracker**: Tracks completed questions and saved favorites in `localStorage`.
  - 🌓 **Dark / Light Mode**: Seamless theme switching with automatic system preference detection.
  - 🖨️ **Printable Student Worksheets**: Clean print CSS to generate paper handouts for classrooms.

---

## 🚀 Getting Started

Simply clone the repository and open `index.html` in any web browser (Chrome, Edge, Safari, Firefox). No build step or installation required!

```bash
# Clone the repository
git clone https://github.com/mikegit-lb/ESL.B1.Sep29.git

# Open the folder
cd ESL.B1.Sep29

# Open index.html in your default browser (Windows)
start index.html
```

---

## 📁 Project Structure

```text
├── index.html     # Semantic UI layout, view tabs, timer modal
├── styles.css     # Responsive design, CSS variables, dark mode & print styles
├── data.js        # 30 speaking questions, scaffolding metadata & B1 speaking tips
├── app.js         # Core application logic, audio TTS, timer, and state management
└── README.md      # Documentation and overview
```

---

## 📄 License

This project is licensed under the MIT License.
