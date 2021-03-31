// Array destructuring
const array = ['test', { key: 'test' }, 'third'];
console.log('array:', array);

const [value1, value2, value3, ...values] = array;
console.log('value1:', value1);
console.log('value2:', value2);
console.log('value3:', value3);

// Object destructuring
const obj = {
  test: 1,
  key: 2,
  obj: {
    key: 3111,
  }
};
console.log('obj:', obj);

const { obj: { key }, defaultValue, test } = obj;
console.log('test:', test);
console.log('key:', key);
console.log('defaultValue:', defaultValue);
