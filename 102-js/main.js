// const users = {
//         Viktor: {
//                 age: 25,
//                 isAdmin: false
//         },
//         Max: {
//                 age: 22,
//                 isAdmin: true,
//                 sayHello(name) {
//                         console.log(`Hello ${name}`)
//                 }
//         }
// }

// console.log(users.Max)
// users.Max.sayHello('Max')

const users = [
        {
                name:'Viktor',
                age: 25,
                isAdmin: false
        },
        {
                name:'Max',
                age: 23,
                isAdmin: true
        },
        {
                name:'Anna',
                age: 19,
                isAdmin: true
        },
]

let regularUsers = 0

for (let i = 0; i < users.length; i++) {
        console.log(users[i])
        if (users[i].isAdmin) {
                regularUsers++;
        }
}
console.log(`Обычные пользователи: ${regularUsers}`)

