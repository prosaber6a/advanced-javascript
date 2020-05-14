const students = [
    {id: 21, name: "Omar Sunny"},
    {id: 45, name: "Mannna"},
    {id: 33, name: "DeepJol"},
    {id: 71, name: "Mousumi"}
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
console.log(names);
console.log(ids);


const bigger = students.filter(s => s.id > 40);
console.log(bigger);


const biggerOne = students.find(s => s.id > 40);
console.log(biggerOne);