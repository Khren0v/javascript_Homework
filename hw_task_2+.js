// Task 2*** Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, описанной в задании

// fs.readFile('/Users/kirill/29_QA_Course/task2.json', (err, data) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     console.log(data)
//   })

const fs = require('fs');

const dataUsers = JSON.parse(fs.readFileSync('/Users/kirill/29_QA_Course/Lesson4/task2.json'));

const createUsersName = function(data) {

    let UsersName = [data.length]

    for (let reg in data) {

        UsersName[reg] = data[reg].name
    }

    return UsersName
};

console.log(createUsersName(dataUsers));
