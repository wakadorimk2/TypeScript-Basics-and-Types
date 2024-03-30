enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
}

const person = {
    name: 'John',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
    console.log('管理者ユーザ');
}