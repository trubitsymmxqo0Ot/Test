const mapArrToString = require('./mapArrToString');

describe('Тесты', () => {
    test('Валидное значение', () => {
        expect(mapArrToString([1,2,3])).toEqual(["1","2","3"]); //toEqual - нужен для глубокого сравнения значений массива, а не сравнения массива по ссылкам
    })
    test('Мешанина', () => {
        expect(mapArrToString([1,2,null,undefined,'123dasd'])).toEqual(["1","2"]);
    })
    test('Пусто', () => {
        expect(mapArrToString([])).toEqual([]);
    })
    test('Отрицание', () => {
        expect(mapArrToString([1,2])).not.toEqual(["1","2", "3"]) //not - отрицание, мы говорим о том, что таким массив не станет
    })
})