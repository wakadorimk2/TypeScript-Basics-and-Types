var person = {
    name: 'John',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
};
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
