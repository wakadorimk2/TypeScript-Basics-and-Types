const person = {
    name: 'John',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
};

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}