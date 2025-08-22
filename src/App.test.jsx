import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from './App';

describe('renders learn react link', () => {
    test('Вводная', () => {
        render(<App/>) //Сюда мы передаем любой компонент, который мы будем покрывать тестами
        const linkElement = screen.getByText(/hello world/i); 
        const btn = screen.getByRole('button');
        const input = screen.getByPlaceholderText('some input...');
        /*
            Тут мы с помощью screen можем обращаться к api react testing library, с помощью getByText мы ищем какой-то jsx с написанным текстом.
            Сам текст всегда лучше писать через регулярное выражение, а не через кавычки. Все потому, что нам нужно точное совпадение. И если мы 
            будем писать текст через кавычки, то мы жестко захаркодим заданное значение, а при таком стиле записи нам только важно, чтобы 
            текст совпадал с регулярным выражением
        */
        expect(linkElement).toBeInTheDocument();    //Тут мы с помощью toBeInTheDocument проверяем, существует ли в DOM дереве какой-либо jsx тег с таким текстом
        expect(btn).toBeInTheDocument();
        expect(input).toBeInTheDocument();
        //Если вдруг что-то не так, что-то ломается и нужно понять причину поломимки, то мы можем вызвать этот метод:
        screen.debug();
        //Тогда мы получим в терминале всю jsx структуру компонента 
        /*
            Если мы хотим снять снепшот у jsx, то мы можем просто написать точно также, как и писали ранее. Таким образом, если,
            например в placeholder input что-то изменить, то снапшот отреагирует на изменения и предупредит нас, что они произошли.
            А дальше мы можем либо откатиться и исправить input, либо указать, что изменения валидные и перезаписать snapshot
        */
        expect(input).toMatchSnapshot();
    })
})