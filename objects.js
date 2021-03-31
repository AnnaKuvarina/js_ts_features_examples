const obj = {
  test: 1,
  key: 2,
  obj: {
    key: 3,
  }
};
console.log('obj:', obj);
// Object.assign()
const newObj = Object.assign(obj);
console.log('newObj:', newObj);
console.log('newObj === obj:', newObj === obj);
console.log('----------------');

// Object.freeze()
Object.freeze(newObj);
newObj.newKey = 'test';
newObj.key = 'test';
console.log('newObj after Object.freeze:', newObj);
console.log('----------------');

// Object.keys()
const keys = Object.keys(obj);
console.log('keys:', keys);
console.log('----------------');

// Object.values()
const values = Object.values(obj);
console.log('values:', values);
console.log('----------------');

// Object.entries()
const entries = Object.entries(obj);
console.log(entries);
console.log('----------------');

// Object.proto.hasOwnProperty()
console.log('obj has property "test":', obj.hasOwnProperty('test'));
console.log('obj has property "abc":', obj.hasOwnProperty('abc'));



