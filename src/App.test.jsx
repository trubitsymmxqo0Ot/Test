import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
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
    test('renders get by find', async () => {
        render(<App/>)
        screen.debug(); //Перем тем, как мы получили элемент
        const elem = await screen.findByText(/text/i);
        expect(elem).toBeInTheDocument();
        screen.debug(); //После изменения в dom дереве
    })
    test('react btn', () => {
        render(<App/>);
        const btn = screen.getByTestId('toggle-button');
        const elem = screen.queryByTestId('toggle-text');
        expect(screen.queryByTestId('toggle-text')).toBeNull(); //пока что блока div не существует, т.к. кнопка не была нажата
        fireEvent.click(btn); //fireEvent позволяет получать какие-то события из блоков кода. Например click, change и т.д
        expect(screen.queryByTestId('toggle-text')).toBeInTheDocument(); //После первого нажатия toggle стал true и div отрисовался
        fireEvent.click(btn, /*Можем передать какие-то доп опции*/); //Второе нажатие
        expect(screen.queryByTestId('toggle-text')).toBeNull(); //Теперь toggle стал false и div размонтировался со страницы

        /*
            Очень важное замечание, что если мы положим ссылку на проверяемый объект в переменную (в моем примере это elem) и будем
            работать далее с этой переменной, то мы как бы в переменной зафиксируем первоначальное состояние ссылки на объект, условно,
            объект был null, а потом заполнился чем-то, но, так как он в ссылке, у него и останется null, т.к. тесты будут проверять
            все сразу и не будут дожидаться изменений. В таком случае, мы можем либо сделать тест ассинхронным и дожидаться 
            изменений, либо просто вложить путь к объекту внутрь expect, как сделано выше. Таким образом мы всегда будем получать
            актуальное состояние проверяемого объекта
        */
    })
    test('Новый инпут', () => {
        render(<App/>);
        const input = screen.getByPlaceholderText('new input');
        expect(screen.queryByTestId('h1Test')).toContainHTML(''); //Проверяем, что содержимое h1 === ''
        fireEvent.input(input, {
            target: { value: '123' } //Передаем value так, как будто бы мы что-то написали в input через e.target.value
        })
        expect(screen.queryByTestId('h1Test')).toContainHTML('123') //Говорим о том, что h1 теперь содержит текст 123
        /*
            fireEvent позволяет эмулировать только событие, то есть, нажатие, изменение и прочее. Однако, если же мы хотим 
            эмулировать полное поведение пользователя, ам нужно использовать userEvent, там мы прям сможем любое поведение,
            нажатие на любую клавишу, движение мыши, использовать
        */
    })
    test('user event', async () => {
        const user = userEvent.setup();
        render(<App/>);
        const input = screen.getByPlaceholderText('user event input');
        expect(screen.queryByTestId('userH1')).toContainHTML('');
        await user.type(input, '321');
        expect(screen.queryByTestId('userH1')).toContainHTML('321');
    })
})
