export default class Card {
  constructor(data, selector) {
    this._title = data.title;
    this._price = data.price;
    this._image = data.image;

    this._element = document
      .querySelector(selector)
      .content.querySelector('.card')
      .cloneNode(true);

    this._cardLikeBtn = this._element.querySelector('.card__btn_type_like');
    this._cardCompareBtn = this._element.querySelector(
      '.card__btn_type_compare'
    );
    this._cardTitle = this._element.querySelector('.card__title');
    this._cardImage = this._element.querySelector('.card__image');
    this._cardPrice = this._element.querySelector('.card__price');
    this._cardBuyBtn = this._element.querySelector('.card__basket');
    this._cardBuyBtnText = this._element.querySelector('.card__basket-name');
    this._cardPlusBtn = this._element.querySelector('.card__count-btn_plus');
    this._cardMinusBtn = this._element.querySelector('.card__count-btn_minus');
    this._cardCounter = this._element.querySelector('.card__count-btn__num');
  }

  generateCard() {
    this._cardTitle.textContent = this._title;
    this._cardPrice.textContent = this._price;
    this._cardImage.src = this._image;
    this._cardImage.alt = this._title;
    this._setEventListeres();

    return this._element;
  }

  _setEventListeres() {
    // let count = this._cardCounter.textContent;
    this._cardLikeBtn.addEventListener('click', () => this._handleCardLike());

    this._cardCompareBtn.addEventListener('click', () =>
      this._handleCardCompare()
    );

    this._cardBuyBtn.addEventListener('click', () => {
      this._cardCounter.textContent = 1;
      this._cardBuyBtnText.textContent = 'Добавлено';
    });

    this._cardPlusBtn.addEventListener('click', () => {
      let count = this._cardCounter.textContent;
      count++;
      this._cardCounter.textContent = count;
    });

    this._cardMinusBtn.addEventListener('click', () => {
      let count = this._cardCounter.textContent;
      if (count > 0)
      {count--;
      this._cardCounter.textContent = count;}
    });
  }

  _handleCardLike() {
    this._cardLikeBtn.classList.toggle('card__btn_type_like-active');
  }

  _handleCardCompare() {
    this._cardCompareBtn.classList.toggle('card__btn_type_compare-active');
  }
}
