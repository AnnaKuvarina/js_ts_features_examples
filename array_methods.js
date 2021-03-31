const users = [
  { name: 'Sherlock', age: 36 },
  { name: 'Sherlock', age: 26 },
  { name: 'John', age: 30 },
];

const result = users.reduce((prev, { name, age }) => ({
  ...prev,
  [name]: age,
}), {});

console.log(result);
