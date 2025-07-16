// 1. Создание объекта с описанием и методом
const myProfile = {
    name: "Gleb",
    age: 25,
    profession: "Pilot",
    greet: function (userName) {
        return `Hello \"${userName}\"`;
    }
};
console.log(myProfile.greet("Алексей")); 

// 2. Создание массива объектов пользователей
const users = [
    { name: "Иван", isAdmin: false },
    { name: "Ольга", isAdmin: true },
    { name: "Петр", isAdmin: false },
    { name: "Мария", isAdmin: false },
    { name: "Дмитрий", isAdmin: true }
]; 

// 3. Подсчет количества обычных пользователей
let simpleUsers = 0;
for (let i = 0; i < users.length; i++) {
    if (!users[i].isAdmin) {
        simpleUsers++;
    }
}
console.log("Количество простых пользователей:", simpleUsers);
