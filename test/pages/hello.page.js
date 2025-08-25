import Page from "./page.js"; //Это рутовый элемент, от которого мы будем наследоваться

class HelloPage extends Page {
  /*
        Мы получаем какие-то элементы из DOM дерева также, как если бы мы их получали в css, где класс - ., id - #, тег - div и т.д.
        get мы пишем везде, где нам нужно получить какой-то элемент
    */
  get toggleBtn() {
    return $("#toggle"); //Получаем кнопку button с id toggle
  }
  get input() {
    return $("#search"); //Получаем input
  }
  get title() {
    return $("#title"); //Получаем заголовок h1
  }

  //Все методы, которые будут выполнять какие-то действия мы обязательно делаем ассинхронными, т.к. работа уже в реальном браузере,
  // на выполнение каждого действие нужно какое-то время
  async toggleTitle(text) {
    await this.input.setValue(text); //Передаем какой-то текст в input
    await this.toggleBtn.click(); //Кликаем на кнопку
  }

  open() {
    return super.open("hello"); //Мы будем отсылаться на страницу: htts://localhost:3000/hello, именно на странице hello будут проводиться тесты
  }
}

export default new HelloPage(); //Экспортируем отсюда объект, чтобы реализовать тестирование, этот объект будет использоваться в папке object (e2e), файл hello.e2e.js
