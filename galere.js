var nach,kon;

const razmer = document.querySelectorAll('.razmer');
       
razmer.forEach(e => e.addEventListener("click", rclick));


function rclick(e) {
var ww=document.querySelectorAll('.sleva');
 ww.forEach(e => e.style.width="20%");
  //document.querySelector('.sleva').width="20%";
};

const lcards = document.querySelectorAll('.left-card');

lcards.forEach(e => e.addEventListener('click', lflipCard));
function lflipCard() {
   this.classList.toggle('flip');
}


const bcards = document.querySelectorAll('.back-card');

bcards.forEach(e => e.addEventListener('click', bflipCard));
function bflipCard() {
   this.classList.toggle('flip');
}


//******************************************************
const cards = document.querySelectorAll('.memory-card');


let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;




function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // second click
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(e => e.addEventListener('click', flipCard));

function zanova() {
   cards.forEach(e => {
      e.classList.remove('flip');
      e.addEventListener('click', flipCard)
    let randomPos = Math.floor(Math.random() * 12);
    e.style.order = randomPos;



   });

}

function zal(zal_prm) {
//  alert(document.body.querySelector('.left').innerHTML);
 if (zal_prm=="4") {
document.body.querySelector('.left').innerHTML='left side '+zal_prm;
document.body.querySelector('.right').innerHTML='right side '+zal_prm;
document.body.querySelector('.back').innerHTML='right side '+zal_prm;
var xhr = new XMLHttpRequest()  // Создаём локальную переменную XHR, которая будет объектом XMLHttpRequest
   xhr.open('GET', 'zal4.html')     // Задаём метод запроса и URL  запроса
   xhr.onload = function(){        // Используем обработчик событий onload, чтобы поймать ответ сервера XMLHttpRequest
    alert(xhr.response);           // Выводим в консоль содержимое ответа сервера. Это строка!
      document.body.querySelector('.back').innerHTML=xhr.response  // Содержимое ответа, помещаем внутрь элемент "body" 
   }
   xhr.send()  // Инициирует запрос. Посылаем запрос на сервер.

 } else {
document.body.querySelector('.left').innerHTML='left side '+zal_prm;
document.body.querySelector('.right').innerHTML='right side '+zal_prm;
document.body.querySelector('.back').innerHTML='right side '+zal_prm;
  }
}


