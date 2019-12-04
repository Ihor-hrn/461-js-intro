// Декларуємо змінні:
// var - старе, не використовуємо
// let - звичайна змінна
// const - стала змінна

// Primitive Data Types:
// Number
// String
// Boolean - true, false
// null - пусто
// undefined - не визначено
// Object - об'єкт
// Symbol - унікальний незмінний ідентифікатр

let bestGreetings = 'Hello';
alert(bestGreetings);
bestGreetings = 'JavaScript';
alert(bestGreetings);

const age = Number(prompt('Enter your age'));
alert('Your age is: ' + age);

const nextAge = addOne(age);
alert('Next Year you will be: ' + nextAge)

// logical operator
// > < >= <= != !== == === || &&
if (age >= 18) {
alert('you are adolt')
} else {
alert('you are underaged')
}

function addOne(num) {
    const incremented = num + 1;
    return incremented;
}