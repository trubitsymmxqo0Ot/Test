import { describe, test, expect } from "vitest";
import { decrement, increment } from "../counterReducer";
import counterReducer from "../counterReducer";
describe('getCounterValue', () => {
    test('increment', () => {
        expect(counterReducer({count: 0}, increment())).toEqual({count: 1});
    })
    test('dicrement', () => {
        expect(counterReducer({count: 0}, decrement())).toEqual({count: -1})
    })
    test('with empty state', () => {
        expect(counterReducer(undefined, decrement())).toEqual({count: -1})
        expect(counterReducer(undefined, increment())).toEqual({count: 1})
    })

    /*
    Тут мы покрыли тестами наш reducer
        Что мы тут сделали? Мы обратились к нашему стейту counterReducer (на самом деле это counterSlice, просто мы поменяли имя на counterReducer), 
        затем, внутрь редьюссера мы передали 2 аргумента, это наше начально состояние count (initialState) и функция, которая как-то с начальным состоянием
        работает. После чего эта функция отработала (например, инкремент) и логично, что наше состояние изменится, что мы и ожидаем в toEqual, что наше состояние,
        а именно переменная count в нем станет 1, toEqual мы используем для глубокого сравнения содержимого объектов.

        Все отлично, но почему последний тест кейс отрабатывает нормально и мы в count получаем -1 или 1? Все дело в том, что в getCounterValue мы передали
        дефолтное значение (export const getCounterValue = state => state?.counter?.value || 0;), засчет проверки ?. мы себя обезопасили от undefined, который 
        мы как раз передаем и вместо unefined += 1 или undefined -= 1 (наши методы increment и decrement), мы по факту передаем 0.

        Отлично, но зачем это нужно? Такой подход может быть полезен, если мы используем ассинхронный редьюсер для получения каких-то данных в состояние
        и вот пока мы их не получили, мы можем получать undefined, а этот тест кейс будет обрабатывать такое временное состояние.
    */
})