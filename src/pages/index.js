/* eslint-disable prefer-const */
/* eslint-disable prefer-template */
import '../vendor/normalize.css';
import './index.scss';
import Card from '../components/Card.js';
import {
  initialCards,
  recentCard,
  interestingCard,
} from '../components/initialCards.js';

import {
  initialContainer,
  initialContainerRecent,
  initialContainerInt,
  tabRecentBtn,
  tabInteresting,
  tabMain,
  slider,
  leftArrow,
  rightArrow,
  stickerHit,
  stickerNew,
} from '../components/constants.js';

// Слайдер
function createSlider(element) {
  let cardWidth = 356;
  let elements = 1;
  let cardPosition = 0;
  let cardList = slider.querySelector(element);
  let cardItems = cardList.querySelectorAll('.card');

  leftArrow.addEventListener('click', () => {
    cardPosition += cardWidth * elements;
    cardPosition = Math.min(cardPosition, 0);
    cardList.style.marginLeft = cardPosition + 'px';
  });

  rightArrow.addEventListener('click', () => {
    cardPosition -= cardWidth * elements;
    cardPosition = Math.max(
      cardPosition,
      -cardWidth * (cardItems.length - elements),
    );
    cardList.style.marginLeft = cardPosition + 'px';
  });
}

// Создание карточки
function createCard(title, price, image) {
  const data = {
    title,
    price,
    image,
  };
  const card = new Card(data, '#card-template');
  return card.generateCard();
}

// Функция переключения между табами
function showTab(containerHidden, containerHid) {
  containerHidden.replaceChildren();
  containerHid.replaceChildren();
}

// Генерация карточек на вкладке "популярные товары"
initialCards.forEach((item) => {
  const card = createCard(item.title, item.price, item.image);
  initialContainer.append(card);
  createSlider('.cards__main');
});

tabMain.addEventListener('click', () => {
  initialCards.forEach((item) => {
    const card = createCard(item.title, item.price, item.image);
    initialContainer.append(card);
    createSlider('.cards__main');
  });
  showTab(initialContainerInt, initialContainerRecent);
});

// Слушатели переключения между табами
tabRecentBtn.addEventListener('click', () => {
  // Генерация карточек на вкладке "недавно купили"
  recentCard.forEach((item) => {
    const card = createCard(item.title, item.price, item.image);
    initialContainerRecent.append(card);
  });
  showTab(initialContainer, initialContainerInt);
  createSlider('.cards__recent');
});

tabInteresting.addEventListener('click', () => {
  // Генерация карточек на вкладке "вас может заинтересовать"
  interestingCard.forEach((item) => {
    const card = createCard(item.title, item.price, item.image);
    initialContainerInt.append(card);
  });
  showTab(initialContainer, initialContainerRecent);
  createSlider('.cards__interesting');
});

function printSticker(item, url) {
  const list = document.querySelectorAll('.card');
  const child = list[item].firstElementChild;
  child.classList.add('card__sticker_active');
  child.src = url;
}

printSticker(2, stickerHit);
printSticker(3, stickerNew);
printSticker(5, stickerNew);
