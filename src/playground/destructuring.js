const person = {
    name:'Andrew',
    age: 27,
    location: {
        city: 'Philadelphia',
        temp: 11
    }
};

const { name, age } = person;

const {city, temp} = person.location

city&&temp ? console.log( `It is ${temp} in ${city}`) : console.log('null')

const Book = {
    title: "Ego is the enemy",
    author: "Ryan Holiday",
    publisher: {
        name:' Penguin'
    }
};

const { name: publisherName = "Self-Published"} = Book.publisher
// console.log(publisherName);

// ARRAY DESTRUCTURING

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];



const [street, site, state, zip] = address;
console.log(`You are now in ${site} ${state}. `);

const items = ['Coffee (hot)', '$2.00', '$2.50', ' $2.75'];
const itemArray = ['Coffee (iced)', '$3.00', '$3.50', ' $3.75'];

const [item, ,price] = items;
const [ thing, , ,amount] = itemArray;
console.log(`A medium ${item} costs ${price}`);
console.log(`A large ${thing} costs ${amount}`);