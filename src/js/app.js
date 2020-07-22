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

var groupContent = document.getElementById('group-content');
groupContent.scrollTop = groupContent.scrollHeight;

var searchBlock = $('.search-block');
$(document).on('click', '.group-content__search', function () {
  searchBlock.slideToggle();
  return false;
});

var btnSearch = document.querySelector('.group-content__search');
var btnClose = document.querySelector('.search-block__head-btn');
var searchBlock = document.querySelector('.search-block');

btnSearch.addEventListener('click', function() {
  searchBlock.classList.toggle('open');
}, false);

btnClose.addEventListener('click', function() {
  searchBlock.classList.remove('open');
}, false);

$('.group-content__main').mCustomScrollbar({
  axis: 'y',              
  theme: 'dark',  // тема 
  scrollInertia: '330',   // продолжительность прокрутки, значение в миллисекундах 
  mouseWheel: {
      deltaFactor: 80    // кол-во пикселей на одну прокрутку колёсика мыши 
  }
});
$('.group').mCustomScrollbar({
  axis: 'y',              
  theme: 'dark',  // тема 
  scrollInertia: '330',   // продолжительность прокрутки, значение в миллисекундах 
  mouseWheel: {
      deltaFactor: 80    // кол-во пикселей на одну прокрутку колёсика мыши 
  }
});