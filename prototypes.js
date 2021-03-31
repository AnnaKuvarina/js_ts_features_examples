const father = {
  name: 'Father',
  lastname: 'Smith'
}

const child = {
  name: 'Child'
}

console.log(father);
father.__proto__ = null;
Object.setPrototypeOf(child, father);

console.log(child);
console.log(Object.getPrototypeOf(child));
console.log(father);

