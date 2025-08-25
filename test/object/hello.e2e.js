import HelloPage from '../pages/hello.page.js';
describe('My hello world page', () => {
    it('test', async() => {
        //Тут мы просто уже описываем поведение, которое ожидаем от страницы
        await HelloPage.open(); //Открываем как бы соединение
        await HelloPage.toggleTitle('hello') //Это наш ассинхронный метод, в который мы получили input, button, h1, передаем внутрь него текст
        await expect(HelloPage.title).toBeExisting(); //Ожидаем, что теперь наш title появился на странице
        await HelloPage.toggleBtn.click();
        await expect(HelloPage.title).not.toBeExisting();
    })
    it('catch test', async () => {
    await HelloPage.open();
    await HelloPage.toggleTitle('dfgsdfg');
    await expect(HelloPage.title).not.toBeExisting();
    })
})

//Если хотим запустить определенный тест - npm run wdio --spec example.e2e.js