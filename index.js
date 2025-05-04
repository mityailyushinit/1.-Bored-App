const button = document.querySelector('button');
const output = document.querySelector('.output');

button.addEventListener('click', function() {
    output.innerHTML = `
        <p>Форсаж</p>
    <p>Плохие парни</p>
    <p>Неудержимые</p>
    <p>Перевозчик</p>
    <p>Остаться в живых</p>
    <p>Кремнивая долина</p>
    <p>Стражи галлактики</p>
    <p>Сваты</p>
    `;
});
