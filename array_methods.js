const users = [
  { name: 'Sherlock', age: 36 },
  { name: 'Alex', age: 26 },
  { name: 'John', age: 30 },
]

const callback = (prev, user) => {
  return {
    ...prev,
    [user.name]: user.age,
  }
}

const result = users.reduce(callback, {})
console.log(result)
