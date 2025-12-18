const questions = [
  { q: "What does HTML stand for?", a: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks Text Mark Language"], correct: 0 },
  { q: "Which symbol is used for comments in JavaScript?", a: ["//", "<!-- -->", "/* */"], correct: 0 },
  { q: "CSS stands for?", a: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"], correct: 1 },
  { q: "Which tag is used for JavaScript?", a: ["<java>", "<script>", "<js>"], correct: 1 },
  { q: "Which property changes text color in CSS?", a: ["text-color", "fontColor", "color"], correct: 2 },
  { q: "Inside which HTML element do we put CSS?", a: ["<style>", "<css>", "<design>"], correct: 0 },
  { q: "JavaScript is a ___ language.", a: ["compiled", "programming", "styling"], correct: 1 },
  { q: "Which of the following is NOT a programming language?", a: ["Python", "HTML", "Java"], correct: 1 },
  { q: "CSS can be added to HTML in how many ways?", a: ["1", "2", "3"], correct: 2 },
  { q: "What does DOM stand for?", a: ["Document Object Model", "Data Object Module", "Digital Ordinance Model"], correct: 0 }
];

let index = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreSection = document.getElementById("score-section");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  questionEl.textContent = questions[index].q;
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";

  questions[index].a.forEach((option, i) => {
    const div = document.createElement("div");
    div.className = "option";
    div.textContent = option;
    div.onclick = () => checkAnswer(div, i);
    optionsEl.appendChild(div);
  });
}

function checkAnswer(selected, i) {
  const correctIndex = questions[index].correct;
  const options = document.querySelectorAll(".option");

  options.forEach(opt => opt.style.pointerEvents = "none");

  if (i === correctIndex) {
    selected.classList.add("correct");
    score++;
  } else {
    selected.classList.add("incorrect");
    options[correctIndex].classList.add("correct");
  }

  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
  index++;
  if (index < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-section").style.display = "none";
    scoreSection.style.display = "block";
    scoreEl.textContent = `${score} / ${questions.length}`;
  }
};

loadQuestion();
