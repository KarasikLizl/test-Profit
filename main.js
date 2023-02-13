(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,i){for(var r=0;r<i.length;r++){var n=i[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,a=function(t,i){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==e(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===e(a)?a:String(a)),n)}var a}var i=function(){function e(t,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=t.title,this._price=t.price,this._image=t.image,this._element=document.querySelector(i).content.querySelector(".card").cloneNode(!0),this._cardLikeBtn=this._element.querySelector(".card__btn_type_like"),this._cardCompareBtn=this._element.querySelector(".card__btn_type_compare"),this._cardTitle=this._element.querySelector(".card__title"),this._cardImage=this._element.querySelector(".card__image"),this._cardPrice=this._element.querySelector(".card__price"),this._cardOldPrice=this._element.querySelector(".card__price_old"),this._cardBuyBtn=this._element.querySelector(".card__basket"),this._cardBuyBtnText=this._element.querySelector(".card__basket-name"),this._cardPlusBtn=this._element.querySelector(".card__count-btn_plus"),this._cardMinusBtn=this._element.querySelector(".card__count-btn_minus"),this._cardCounter=this._element.querySelector(".card__count-btn__num")}var i,r;return i=e,(r=[{key:"generateCard",value:function(){return this._cardTitle.textContent=this._title,this._cardPrice.textContent="".concat(this._price," ₽"),this._cardOldPrice.textContent=" ₽",this._cardImage.src=this._image,this._cardImage.alt=this._title,this._setEventListeres(),this._element}},{key:"_setEventListeres",value:function(){var e=this;this._cardLikeBtn.addEventListener("click",(function(){return e._handleCardLike()})),this._cardCompareBtn.addEventListener("click",(function(){return e._handleCardCompare()})),this._cardBuyBtn.addEventListener("click",(function(){e._cardCounter.textContent=1,e._cardBuyBtnText.textContent="Добавлено"})),this._cardPlusBtn.addEventListener("click",(function(){var t=e._cardCounter.textContent;t++,e._cardCounter.textContent=t})),this._cardMinusBtn.addEventListener("click",(function(){var t=e._cardCounter.textContent;t>0&&(t--,e._cardCounter.textContent=t,0===t&&(e._cardBuyBtnText.textContent="В корзину"))}))}},{key:"_handleCardLike",value:function(){this._cardLikeBtn.classList.toggle("card__btn_type_like-active")}},{key:"_handleCardCompare",value:function(){this._cardCompareBtn.classList.toggle("card__btn_type_compare-active")}}])&&t(i.prototype,r),Object.defineProperty(i,"prototype",{writable:!1}),e}(),r=document.querySelector(".page"),n=r.querySelector(".cards"),a=r.querySelector(".cards__recent"),c=r.querySelector(".cards__interesting"),s=r.querySelector(".header__btn_recent"),u=r.querySelector(".header__btn_int"),o=r.querySelector(".header__btn_main"),l="cards_display_none",d=document.getElementById("slider"),p=d.querySelector(".cards__slider-btn_left"),_=d.querySelector(".cards__slider-btn_right"),m="https://sun9-53.userapi.com/impg/x5p_kp2yXKi2YcJ4f7sCDW_5MqDY9bZThEtwjA/I__t3YFLDQc.jpg?size=50x51&quality=96&sign=12241f641ec7496521feffc1ab3fad0d&type=album";function g(e){var t;function i(){return t=document.documentElement.clientWidth>1440?356:280}window.onresize=i();var r=0,n=d.querySelector(e),a=n.querySelectorAll(".card");p.addEventListener("click",(function(){window.onresize=i(),r+=1*t,r=Math.min(r,0),n.style.marginLeft=r+"px"})),_.addEventListener("click",(function(){window.onresize=i(),r-=1*t,r=Math.max(r,-t*(a.length-1)),n.style.marginLeft=r+"px"}))}function f(e,t,r){return new i({title:e,price:t,image:r},"#card-template").generateCard()}function y(e,t,i){e.classList.remove(l),t.classList.add(l),i.classList.add(l)}function b(e,t){var i=document.querySelectorAll(".card")[e].firstElementChild;i.classList.add("card__sticker_active"),i.src=t}function h(e,t){var i=document.querySelectorAll(".card"),r=i[e].querySelector(".card__price_old"),n=i[e].querySelector(".card__price");r.classList.remove("card__price_old_hidden"),r.textContent=n.textContent,n.textContent=t+" ₽"}[{title:"Тарелка керамическая ручной работы ⌀ 12",price:"600",image:"",counter:0},{title:"Кашпо для цветов керамическое СИМПЛГРЕЙ",price:"450",image:"https://sun9-26.userapi.com/impg/FwS_1vv-3AQGlTiPGhpB9fbTf3soeEf9u9jctQ/2LPTgsw-kiA.jpg?size=334x334&quality=96&sign=4cc3e3ed9eaa15be7e759b1f9a1d14ec&type=album",counter:0},{title:"Умные часы SMARTWATCH XM 109 черный",price:"12 999",image:"https://sun9-7.userapi.com/impg/117l4p7NuVbXAw2Bgyym57fa2PSOxEI1B4i8Uw/j2w5mMI3los.jpg?size=334x334&quality=96&sign=c445f868b169d5a13a9b340b0fd36ed4&type=album",counter:0},{title:"Золотое кольцо МАЛИКА с аметистом и фианитами",price:"15 700",image:"https://sun9-3.userapi.com/impg/Uw_pD7J0o0saJT5LrEVgf37SQr07ep3gVFWeuA/6BnSfD_8ThM.jpg?size=334x334&quality=96&sign=124054a2a774ca9ba505b2de6cdf6057&type=album",counter:0},{title:"Золотое кольцо МАЛИКА с аметистом и фианитами",price:"15 700",image:"https://sun9-3.userapi.com/impg/Uw_pD7J0o0saJT5LrEVgf37SQr07ep3gVFWeuA/6BnSfD_8ThM.jpg?size=334x334&quality=96&sign=124054a2a774ca9ba505b2de6cdf6057&type=album",counter:0},{title:"Золотое кольцо МАЛИКА с аметистом и фианитами",price:"15 700",image:"https://sun9-3.userapi.com/impg/Uw_pD7J0o0saJT5LrEVgf37SQr07ep3gVFWeuA/6BnSfD_8ThM.jpg?size=334x334&quality=96&sign=124054a2a774ca9ba505b2de6cdf6057&type=album",counter:0},{title:"Тарелка керамическая ручной работы ⌀ 12",price:"600",image:"",counter:0},{title:"Кашпо для цветов керамическое СИМПЛГРЕЙ",price:"450",image:"https://sun9-26.userapi.com/impg/FwS_1vv-3AQGlTiPGhpB9fbTf3soeEf9u9jctQ/2LPTgsw-kiA.jpg?size=334x334&quality=96&sign=4cc3e3ed9eaa15be7e759b1f9a1d14ec&type=album",counter:0},{title:"Умные часы SMARTWATCH XM 109 черный",price:"12 999",image:"https://sun9-7.userapi.com/impg/117l4p7NuVbXAw2Bgyym57fa2PSOxEI1B4i8Uw/j2w5mMI3los.jpg?size=334x334&quality=96&sign=c445f868b169d5a13a9b340b0fd36ed4&type=album",counter:0}].forEach((function(e){var t=f(e.title,e.price,e.image);n.append(t),g(".cards__main")})),[{title:"Золотое кольцо МАЛИКА с аметистом и фианитами",price:"600",image:"https://sun9-3.userapi.com/impg/Uw_pD7J0o0saJT5LrEVgf37SQr07ep3gVFWeuA/6BnSfD_8ThM.jpg?size=334x334&quality=96&sign=124054a2a774ca9ba505b2de6cdf6057&type=album",counter:0},{title:"Кашпо для цветов керамическое СИМПЛГРЕЙ",price:"450",image:"https://sun9-26.userapi.com/impg/FwS_1vv-3AQGlTiPGhpB9fbTf3soeEf9u9jctQ/2LPTgsw-kiA.jpg?size=334x334&quality=96&sign=4cc3e3ed9eaa15be7e759b1f9a1d14ec&type=album",counter:0},{title:"Умные часы SMARTWATCH XM 109 черный",price:"12 999",image:"https://sun9-7.userapi.com/impg/117l4p7NuVbXAw2Bgyym57fa2PSOxEI1B4i8Uw/j2w5mMI3los.jpg?size=334x334&quality=96&sign=c445f868b169d5a13a9b340b0fd36ed4&type=album",counter:0},{title:"Кашпо для цветов керамическое СИМПЛГРЕЙ",price:"450",image:"https://sun9-26.userapi.com/impg/FwS_1vv-3AQGlTiPGhpB9fbTf3soeEf9u9jctQ/2LPTgsw-kiA.jpg?size=334x334&quality=96&sign=4cc3e3ed9eaa15be7e759b1f9a1d14ec&type=album",counter:0},{title:"Умные часы SMARTWATCH XM 109 черный",price:"12 999",image:"https://sun9-7.userapi.com/impg/117l4p7NuVbXAw2Bgyym57fa2PSOxEI1B4i8Uw/j2w5mMI3los.jpg?size=334x334&quality=96&sign=c445f868b169d5a13a9b340b0fd36ed4&type=album",counter:0}].forEach((function(e){var t=f(e.title,e.price,e.image);a.append(t)})),[{title:"Кашпо для цветов керамическое СИМПЛГРЕЙ",price:"450",image:"https://sun9-26.userapi.com/impg/FwS_1vv-3AQGlTiPGhpB9fbTf3soeEf9u9jctQ/2LPTgsw-kiA.jpg?size=334x334&quality=96&sign=4cc3e3ed9eaa15be7e759b1f9a1d14ec&type=album",counter:0},{title:"Умные часы SMARTWATCH XM 109 черный",price:"12 999",image:"https://sun9-7.userapi.com/impg/117l4p7NuVbXAw2Bgyym57fa2PSOxEI1B4i8Uw/j2w5mMI3los.jpg?size=334x334&quality=96&sign=c445f868b169d5a13a9b340b0fd36ed4&type=album",counter:0}].forEach((function(e){var t=f(e.title,e.price,e.image);c.append(t)})),o.addEventListener("click",(function(){y(n,c,a)})),s.addEventListener("click",(function(){y(a,n,c),g(".cards__recent")})),u.addEventListener("click",(function(){y(c,n,a),g(".cards__interesting")})),b(2,"https://sun9-42.userapi.com/impg/zDAJQymgfd4YTlV7a02xYvKhDSnhg7LddBa7PA/e_Udsa8luks.jpg?size=50x50&quality=96&sign=0a43fae13b4623024144b54e14fc3a54&type=album"),b(3,m),b(5,m),h(1,200),h(0,500)})();