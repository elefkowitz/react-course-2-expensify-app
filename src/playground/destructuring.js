// const person = {
//     name: 'Elie',
//     age: 24,
//     location: {
//         city: 'New York',
//         temp: 34
//     }
// };

// const { name:firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

const address = ['123 Flamingo Drive', 'Miami', 'FL', '33140'];
const [, city, state = 'New York'] = address
console.log(`You are in ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ cof, , price] = item;

console.log(`A medium ${cof} costs ${price}`);
