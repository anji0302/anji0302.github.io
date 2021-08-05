const leftHand = document.querySelector('#leftHand');
const rightHand = document.querySelector('#rightHand');
const handsContainer = document.querySelector('#handsContainer');
const shuffleBtn = document.querySelector('#shuffle');

const handEmoji = '&#128074;';
const okEmoji = '&#128076;';
let isShuffleDone = true;
let selectedHand = null;
let randomHand = null;

function shuffle() {
  isShuffleDone = true;
  resetView();
  handsContainer.classList.add('animate-hands');
  handsContainer.classList.remove('select-msg');
  setTimeout(() => {
    handsContainer.classList.add('select-msg');
  }, 2000);
}

shuffle();

function showResult(hand) {
  if (!isShuffleDone) {
    shuffle();
    return;
  }

  selectedHand = hand;
  resetView();
  const randomNumber = Math.round(Math.random());
  randomHand = (randomNumber === 0) ? 'left' : 'right';
  if (randomNumber === 0) {
    updateView(leftHand);
  } else {
    updateView(rightHand);
  }

  const isWinner = selectedHand === randomHand;
  handsContainer.classList.remove('won');
  handsContainer.classList.remove('lost');
  if (isWinner) {
    handsContainer.classList.add('won');
  } else {
    handsContainer.classList.add('lost');
  }

  isShuffleDone = false;
  highlightSelectedHand(hand);
}


function updateView(htmlElement) {
  htmlElement.innerHTML = okEmoji;
  htmlElement.classList.add('show-rock');
}

function resetView() {
  leftHand.innerHTML = handEmoji;
  leftHand.classList.remove('show-rock');
  leftHand.classList.remove('highlight');

  rightHand.innerHTML = handEmoji;
  rightHand.classList.remove('show-rock');
  rightHand.classList.remove('highlight');

  handsContainer.classList.remove('won');
  handsContainer.classList.remove('lost');

  handsContainer.classList.remove('animate-hands');
}

function highlightSelectedHand(hand) {
  leftHand.classList.remove('highlight');
  rightHand.classList.remove('highlight');
  if (hand === 'left') {
    leftHand.classList.add('highlight');
  } else {
    rightHand.classList.add('highlight');
  }
}