import { UsersForTest } from "../../src/components/UsersForTest/UsersForTest.jsx";
import ClassUsers from "../pages/users.page.js";
describe('Users pages', () => {
    it('load data', async () => {
        await ClassUsers.loadData(); //Ждем, пока функция выполнится
    })
    it('delete user', async () => {
        await ClassUsers.loadData();
        await ClassUsers.deleteUser(); 
    })
})