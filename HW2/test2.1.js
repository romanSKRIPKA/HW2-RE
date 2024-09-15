var a = prompt('Количество вопросов', 0);
var b = prompt('Количество вариантов ответа', 0);

//Универсальная ф-ия для генерации элементов
function genElem(newElem, parElem, text, attrs, style,) {
  var newElem; // лишня строчка
  var elem = document.createElement(newElem);
//добавление атрибутов
  if (attrs) {
    for (key in attrs) {
        if (key == 'class') {
            elem.className = attrs[key];
        } else if (key == 'id') {
            elem.id = attrs[key];
        }
        else {
            elem.setAttribute(key, attrs[key]);
        }
    }
}  
//добавление стилей
  if (style) {
    for (key in style) {
        elem.style[key] = style[key];
    }
}
//добавление текста
  if (text) {
    elem.appendChild(document.createTextNode(text));
}
parElem.appendChild(elem);
};



//header
genElem('h2', document.body, 'Тест по программированию', {'id': 'myTest'}, {'text-align':'center', 'marginBottom': '50px', 'fontFamily': 'Tahoma'});
function getQuestion(a, b) {
  for(var i = 1; i <= a; i++) {
    //questions
    genElem('div', document.body, i + '. Вопрос№' + i, {'id': 'myDiv'+i}, {'margin': '50px 100px', 'fontSize': '25px', 'fontFamily': 'Tahoma'});
  for (var j = 1; j <= b; j++) {
    //inner divs
    var innDiv = document.getElementById('myDiv'+i);
    genElem('div', innDiv);
    //checkboxes
    genElem('input', innDiv, '', {'type': 'checkbox'}, {'margin': '30px 15px 17px 25px'});
    //Variants text
    genElem('label', innDiv, 'Вариант ответа №'+j, {}, {'fontSize': '17px'});
    // для label можна було ще добавить атрибут for
  }
  }
};
getQuestion(a,b);


//button
genElem('div', document.body, '', {'id': 'button'}, {'text-align':'center', 'fontFamily': 'Tahoma'});
var resButt = document.getElementById('button');
genElem('input', resButt, 'dca', {'type': 'submit', 'value': 'Проверить мои результаты'});

// Ну так уже лучше! :)
// функцию подмутил десь? ) главно шоб поняв як воно фунциклируе!
// наповниш если шо про стилизацию кода, бо читать полотном не сильно удобно.
// І не заводь на кажду домашку отдельний репозиторий ) Просто добавляй папку в текущий и роби новий комит.
