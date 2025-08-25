import Page from "./page";
class ClassUsers extends Page {
  get loadingTitle() {
    return $("#users-loading");
  }
  get usersList() {
    return $("#users-list");
  }
  get usersItem() {
    return $$('[data-testid="user-item"]'); //Если 1 $ - это это 1 элемент, если $$ - то это массив элементов, в качестве аргумента указываем название компонента
  }
  async loadData() {
    try {
      await this.open();
      await this.loadingTitle.waitForDisplayed({ timeout: 10000 }); //Мы ждем, пока появится элемент, т.к. запрос ушел на сервер. Если за 2 секунды он не появится, то будет ошибка
      await this.usersList.waitForDisplayed({ timeout: 10000 }); //Тоже самое, ждем, пока появится компонент в течении 2-ух секунд
    } catch (e) {
      throw new Error("Не удалось загрузить пользователей");
    }
  }
  async deleteUser() {
    try {
      const usersCount = await this.usersItem.length;
      if (!usersCount) throw new Error("Пользователи не найдены");
      await this.usersItem[0].$("#user-delete").click();
      const usersCountAfterDelete = await this.usersItem.length;
      if(usersCount - usersCountAfterDelete !== 1) {
        throw new Error('Удаление не произошло или удалился больше чем 1 пользователь')
      }
    } catch (e) {
      throw new Error('Не удалось создать пользователя: ' + e.message);
    }
  }
  open() {
    return super.open("users-test");
  }
}

export default new ClassUsers();
