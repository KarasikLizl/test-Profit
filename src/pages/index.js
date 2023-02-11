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
  cardsInvisibility,
} from '../components/constants';

function createCard(title, price, image) {
  const data = {
    title: title,
    price: price,
    image: image,
  };

  const card = new Card(data, '#card-template');
  return card.generateCard();
}

initialCards.forEach((item) => {
  const card = createCard(item.title, item.price, item.image);
  initialContainer.append(card);
});

recentCard.forEach((item) => {
  const card = createCard(item.title, item.price, item.image);
  initialContainerRecent.append(card);
});

interestingCard.forEach((item) => {
  const card = createCard(item.title, item.price, item.image);
  initialContainerInt.append(card);
});

function showTab(containerVis, containerHidden, containerHid) {
  containerVis.classList.remove(cardsInvisibility);
  containerHidden.classList.add(cardsInvisibility);
  containerHid.classList.add(cardsInvisibility);
}

tabRecentBtn.addEventListener('click', () => {
  showTab(initialContainerRecent, initialContainer, initialContainerInt);
});

tabInteresting.addEventListener('click', () => {
  showTab(initialContainerInt, initialContainer, initialContainerRecent);
});

tabMain.addEventListener('click', () => {
  showTab(initialContainer, initialContainerInt, initialContainerRecent);
});
