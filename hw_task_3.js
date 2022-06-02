const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ];

// Задания:
// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

// **Пример:**

// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)

for (let i in enterprises) {
    let countEmployees = 0
        for (let j in enterprises[i].departments) {
            countEmployees = countEmployees + enterprises[i].departments[j].employees_count
        }
        
        if(countEmployees == 0) {
            console.log(`${enterprises[i].name} (нет сотрудников)`);
        } else {
            console.log(`${enterprises[i].name} (${countEmployees} сотрудников)`);
        }    

        for (let j in enterprises[i].departments) {

            if(enterprises[i].departments[j].employees_count ==0) {
                console.log(`- ${enterprises[i].departments[j].name} (нет сотрудников)`)
            } else {
            console.log(`- ${enterprises[i].departments[j].name} (${enterprises[i].departments[j].employees_count} сотрудников)`)
            }
        }
};

// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).

// Пример:
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 2

const getEnterpriseName = function(arg) {

    if (typeof(arg) == "number") {

        for (let i in enterprises) {

            if (enterprises[i].id == arg) {
                return enterprises[i].name
            }
          for (let j in enterprises[i].departments) {

              if (enterprises[i].departments[j].id == arg) {
                  return enterprises[i].name
              }
        }
        }
    }

    if (typeof(arg) == "string") {

      for (let i in enterprises) {

          if (enterprises[i].id == arg) {
              return enterprises[i].name
          }
        for (let j in enterprises[i].departments) {

            if (enterprises[i].departments[j].name == arg) {
                return enterprises[i].name
            }
      }
      }
  }
};

console.log(getEnterpriseName(1)); //Предприятие 1
console.log(getEnterpriseName(7)); //Предприятие 2
console.log(getEnterpriseName("Отдел разработки")); //Предприятие 2
console.log(getEnterpriseName("Отдел аналитики")); //Предприятие 3

// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

// Пример:
// addEnterprise("Название нового предприятия")

const addEnterprise = function(nameEnterprise) {

  nameEnterprise = String(nameEnterprise)
  enterprises.push(nameEnterprise)
};

addEnterprise("Предприятие 4");

console.log(enterprises[3]);

// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

// Пример:
// addDepartment(1, "Название нового отдела")

// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

// Пример:
// editEnterprise(1, "Новое название предприятия")


// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

// Пример:
// editDepartment(7, "Новое название отдела")


// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

// Пример:
// deleteEnterprise(1)


// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

// Пример:
// deleteDepartment(3)


// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

// Пример:
// moveEmployees(2, 3)