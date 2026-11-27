// Flashcard logic. CARDS comes from data/cards.js, loaded before this file.

let current = 0;
let showingAnswer = false;

const cardEl = document.getElementById("card");
const sideEl = document.getElementById("card-side");
const textEl = document.getElementById("card-text");
const counterEl = document.getElementById("counter");
const flipBtn = document.getElementById("flip-btn");
const nextBtn = document.getElementById("next-btn");

function showCard() {
  const card = CARDS[current];

  if (showingAnswer) {
    sideEl.textContent = "Answer";
    textEl.textContent = card.answer;
    cardEl.classList.add("flipped");
  } else {
    sideEl.textContent = "Question";
    textEl.textContent = card.question;
    cardEl.classList.remove("flipped");
  }

  counterEl.textContent = "Card " + (current + 1) + " of " + CARDS.length;
}

function flipCard() {
  showingAnswer = !showingAnswer;
  showCard();
}

function nextCard() {
  current = (current + 1) % CARDS.length;
  showingAnswer = false;
  showCard();
}

flipBtn.addEventListener("click", flipCard);
nextBtn.addEventListener("click", nextCard);

showCard();
