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
  cardsInvisibility,
} from '../components/constants.js';

// Слайдер
function createSlider(element) {
  let cardWidth;
  function resize() {
    if (document.documentElement.clientWidth > 1440) {
      cardWidth = 356;
    } else {
      cardWidth = 280;
    } return cardWidth;
  }

  window.onresize = resize();

  let elements = 1;
  let cardPosition = 0;
  let cardList = slider.querySelector(element);
  let cardItems = cardList.querySelectorAll('.card');

  leftArrow.addEventListener('click', () => {
    window.onresize = resize();
    cardPosition += cardWidth * elements;
    cardPosition = Math.min(cardPosition, 0);
    cardList.style.marginLeft = cardPosition + 'px';
  });

  rightArrow.addEventListener('click', () => {
    window.onresize = resize();
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
function showTab(containerVis, containerHidden, containerHid) {
  containerVis.classList.remove(cardsInvisibility);
  containerHidden.classList.add(cardsInvisibility);
  containerHid.classList.add(cardsInvisibility);
}

// Генерация карточек на вкладке "популярные товары"
initialCards.forEach((item) => {
  const card = createCard(item.title, item.price, item.image);
  initialContainer.append(card);
  createSlider('.cards__main');
});
// Генерация карточек на вкладке "недавно купили"
recentCard.forEach((item) => {
  const card = createCard(item.title, item.price, item.image);
  initialContainerRecent.append(card);
});
// Генерация карточек на вкладке "вас может заинтересовать"
interestingCard.forEach((item) => {
  const card = createCard(item.title, item.price, item.image);
  initialContainerInt.append(card);
});

tabMain.addEventListener('click', () => {
  showTab(initialContainer, initialContainerInt, initialContainerRecent);
});

// Слушатели переключения между табами
tabRecentBtn.addEventListener('click', () => {
  showTab(initialContainerRecent, initialContainer, initialContainerInt);
  createSlider('.cards__recent');
});

tabInteresting.addEventListener('click', () => {
  showTab(initialContainerInt, initialContainer, initialContainerRecent);
  createSlider('.cards__interesting');
});
// Функция для добавления стикеров на карточку товара
function printSticker(item, url) {
  const list = document.querySelectorAll('.card');
  const child = list[item].firstElementChild;
  child.classList.add('card__sticker_active');
  child.src = url;
}

printSticker(2, stickerHit);
printSticker(3, stickerNew);
printSticker(5, stickerNew);
// Функция добавления сновой цены
function printSale(item, newPriceLabel) {
  const list = document.querySelectorAll('.card');
  const oldPrice = list[item].querySelector('.card__price_old');
  const newPrice = list[item].querySelector('.card__price');
  oldPrice.classList.remove('card__price_old_hidden');
  oldPrice.textContent = newPrice.textContent;
  newPrice.textContent = newPriceLabel + ' ₽';
}

printSale(1, 200);
printSale(0, 500);
