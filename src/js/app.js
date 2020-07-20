// Accordion 

var accordion = (function (element) {

    var _getItem = function (elements, className) { // функция для получения элемента с указанным классом
      var element;
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

      var _addItemHeaderCount = function () {
        // количество подпунктов в пункте
        var headers = _mainElement.querySelectorAll('.accordion-item-header');
        headers.forEach(function (header) {
          var countElement = document.createElement('div');
          countElement.className = 'accordion-item-header-count';
          countElement.textContent = header.parentElement.querySelectorAll('.accordion-subitem').length;
          header.appendChild(countElement);
        });
      },
        _actionClick = function (e) {
          if (!e.target.classList.contains('accordion-item-header')) { // прекращаем выполнение функции если кликнули не по заголовку
            return;
          }
          e.preventDefault();   // Отменям стандартное действие
          // получаем необходимые данные
          var header = e.target,
            item = header.parentElement,
            itemActive = _getItem(_items, 'show');

          if (itemActive === undefined) { // добавляем класс show к элементу (в зависимости от выбранного заголовка)
            item.classList.add('show');
          } else {
            // удаляем класс show у ткущего элемента
            itemActive.classList.remove('show');
            // если следующая вкладка не равна активной
            if (itemActive !== item) {
              // добавляем класс show к элементу (в зависимости от выбранного заголовка)
              item.classList.add('show');
            }
          }
        },
        _setupListeners = function () {
          // добавим к элементу аккордиона обработчик события click
          _mainElement.addEventListener('click', _actionClick);
        };

      return {
        init: function (element) {
          _mainElement = (typeof element === 'string' ? document.querySelector(element) : element);
          _items = _mainElement.querySelectorAll('.accordion-item');
          _addItemHeaderCount();
          _setupListeners();
        }
      };

    };
  })();

  var accordion = accordion();
  accordion.init('#accordion-1');