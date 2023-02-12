import '../vendor/normalize.css';
import './index.scss';
import Card from '../components/Card';
import {
  initialCards,
  recentCard,
  interestingCard,
} from '../components/initialCards';

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
} from '../components/constants';
//Создание карточки
function createCard(title, price, image) {
  const data = {
    title: title,
    price: price,
    image: image,
  };
  const card = new Card(data, '#card-template');
  return card.generateCard();
}
//Генерация карточек на вкладке "популярные товары"
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

//Функция переключения между табами
function showTab(containerHidden, containerHid) {
  containerHidden.replaceChildren();
  containerHid.replaceChildren();
}
//Слушатели переключения между табами
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
  //Генерация карточек на вкладке "вас может заинтересовать"
  interestingCard.forEach((item) => {
    const card = createCard(item.title, item.price, item.image);
    initialContainerInt.append(card);
  });
  showTab(initialContainer, initialContainerRecent);
  createSlider('.cards__interesting');
});

//Слайдер
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
      -cardWidth * (cardItems.length - elements)
    );
    cardList.style.marginLeft = cardPosition + 'px';
  });
}
