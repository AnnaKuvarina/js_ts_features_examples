// Array destructuring
const array = ['test', { key: 'test' }, 'third'];
console.log('array:', array);

const [value1, value2, value3] = array;
console.log('value1:', value1);
console.log('value2:', value2);
console.log('value3:', value3);

// Object destructuring
const obj = {
  test: 1,
  key: 2,
  obj: {
    key: 3,
  }
};
console.log('obj:', obj);

const { test, key, obj: newObject, defaultValue = 'default' } = obj;
console.log('objValue1:', test);
console.log('objValue2:', key);
console.log('objValue3:', newObject);
console.log('defaultValue:', defaultValue);
