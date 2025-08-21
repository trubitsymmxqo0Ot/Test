const getData = require('./getData');
const axios = require('axios');

jest.mock('axios'); //Все сторонние модули мы мокаем таким образом, сейчас мы замокали axios

describe('getData', () => {
        let response;
        beforeEach(() => {
            response = {
                data: [
                        {
                          "userId": 1,
                          "id": 1,
                          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                        },
                        {
                          "userId": 1,
                          "id": 2,
                          "title": "qui est esse",
                          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                        },
                        {
                          "userId": 1,
                          "id": 3,
                          "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                          "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
                        },
                        {
                          "userId": 1,
                          "id": 4,
                          "title": "eum et est occaecati",
                          "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
                        },
                ]
            }
        }) //По сути, это схема того, что потенциально должен вернуть нам бэк1 
    test('Схема', async() => {
        axios.get.mockReturnValue(response); //Он как бы подхватывает данные из схемы и передает их в метод get у axios
        const data = await getData();
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(data).toEqual(["1","2","3","4"]) 
        expect(data).toMatchSnapshot();
        /*
            Возращаем именно 4 потому, что мы достали из запроса только id внутри нашей функции getData, а внутри теста мы в качестве схемы прокинули всего
            4 пользователя, поэтому и достаем 4 элемента id этих пользователей 

            Функция toMatchSnapshot нужна для того, чтобы мы в отдельном окне, в отдельном файле сохраняли результат каких-то вычислений, в нашем случае это массив
            [
              "1",
              "2",
              "3",
              "4",
            ]
            Рассмотри на нашем примере для чего снапшоты нужны. Представим, что на разработку пришел какой-нибудь новый разработчик и удалил функцию, которая 
            перводит числа в строки, соотвественно, с помощью снапшота разработчик увидит, что произошли какие-то изменения и сможет сделать это наглядно.
            То есть, снапшоты будут сравниваться с текущей версией блока кода и если они отличаются, то будет выводить уведлмение, если нет, то все окей, 
            ничего не будет.

            Если же нам вывели уведомление, мы понимаем, что версия изменилась, но это изменение валидно, то мы можем просто подтвердить изменения (везде по-разному,
            у меня в терминале нужно вписать u, в любом случае, это пишется в информации о снапшоте) и тогда уже новая версия заменит собой старую и будет
            сравниваться с новыми изменениями.
        */
       
    })
})