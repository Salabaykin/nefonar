document.addEventListener("DOMContentLoaded", function() {

// Accordion 

var accordion = (function (element) {
  var _getItem = function (elements, className) { // функция для получения элемента с указанным классом
    var element = undefined;
    elements.forEach(function (item) {
      if (item.classList.contains(className)) {
        element = item;
      }
    });
    return element;
  };
  return function () {
    var _mainElement = {}, // .accordion
      _items = {}, // .accordion-item
      _contents = {}; // .accordion-item-content 
    var _actionClick = function (e) {
      if (!e.target.classList.contains('accordion-item__header')) { // прекращаем выполнение функции если кликнули не по заголовку
        return;
      }
      e.preventDefault(); // отменям стандартное действие
      // получаем необходимые данные
      var header = e.target;
      var item = header.parentElement;
      item.classList.toggle('show');
    },
    _setupListeners = function () {
      // добавим к элементу аккордиона обработчик события click
      _mainElement.addEventListener('click', _actionClick);
    };

    return {
      init: function (element) {
        _mainElement = (typeof element === 'string' ? document.querySelector(element) : element);
        _items = _mainElement.querySelectorAll('.accordion-item');
        _setupListeners();
      }
    }
  }
})();

var group = accordion();
group.init('#accordion');

var btnSearch = document.querySelector('.group-content__news');
var btnClose = document.querySelector('.search-block__head-btn');
var searchBlock = document.querySelector('.search-block');
var btnMenu = document.querySelector('.nav-mobile');
var navBlock = document.querySelector('.nav-wrapper');
var groupAdd = document.querySelector('.group-add__button');
var modal = document.querySelector('.modal');
var modalClose = document.querySelector('.modal__close');

btnSearch.addEventListener('click', function() {
  searchBlock.classList.toggle('open');
}, false);

btnClose.addEventListener('click', function() {
  searchBlock.classList.remove('open');
}, false);

btnMenu.addEventListener('click', function() {
  navBlock.classList.toggle('open');
}, false);

modalClose.addEventListener('click', function() {
  modal.classList.toggle('open');
}, false);

groupAdd.addEventListener('click', function() {
  modal.classList.toggle('open');
}, false);

OverlayScrollbars(document.querySelectorAll(".group-content__main"), { 
  className: 'os-theme-dark'
});

OverlayScrollbars(document.querySelectorAll(".group"), { 
  className: 'os-theme-dark'
});

OverlayScrollbars(document.querySelectorAll(".accordion-item__wrapper"), { 
  className: 'os-theme-dark'
});

});