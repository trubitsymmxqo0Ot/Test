import { expect, test, describe } from "vitest";
import { getCounterValue } from "./getCounterValue";

describe('reduce tests', () => {
    test('empty state', () => {
        expect(getCounterValue({})).toBe(0);
    })
    test('with filled state', () => {
        expect(getCounterValue({
            counter: {
                count: 100,
            }
        })).toBe(100)
    })

    /*
    Тут мы покрыли тестом само состояние из redux
        Что мы сделали тут? Все просто, первым кейсом мы передаем просто пустой объект, а он возращает нам undefined, но так как в getCounterValue мы передали
        значение по умолчанию (export const getCounterValue = state => state?.counter?.value || 0;), мы обезопасили себя от undefined и вместо него получили 0, 
        соответственно, этот кейс отработал.

        Во второй же тест кейс в expect мы передаем запрос к нашему стейту slice, куда передаем какое-то дефолтное значение (указали мы его в store.js, вот его
        код - preloadedState: initialState), засчет этого дефолтного значения в тест кейсах мы смогли прокинуть какое-то значение и проверить его, то есть,
        мы сказали, что дефолтное значение у нас будет 100 и так как мы его ни увеличиваем, ни уменьшаем, то ожидается, что наше value Так и останется 100 
    */
})