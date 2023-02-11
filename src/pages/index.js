import '../vendor/normalize.css';
import './index.scss';
const itemNum = document.querySelectorAll('.card__count-btn__num');
import Card from '../components/Card';
import { initialCards } from '../components/initialCards';
const page = document.querySelector(".page");
const initialContainer = page.querySelector(".cards");

function createCard(title, price, image) {
  const data = {
    title: title,
    price: price,
    image: image,
  }

  const card = new Card(data, '#card-template');
  return card.generateCard();
}

initialCards.forEach((item) => {
  const card = createCard(item.title, item.price, item.image);
  initialContainer.append(card);
});
