const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

function waitFor(button, value) {
  return new Promise((resolve, reject) => {
    button.addEventListener('mousedown', (event) => {
      if (event.which === 1) {
        resolve(value);
      }
      if (event.which === 3) {
        reject('Error');
      }
    })
  })
}

async function init() {
  const result1 = await waitFor(button1, 100);
  console.log('Success 1:', result1);

  const result2 = await waitFor(button2, 200);
  console.log('Success 2:', result2);
  return result1 + result2;
}

/*
async function init() {
  try {
    const result1 = await waitFor(button1, 100);
    console.log('Success 1:', result1);

    const result2 = await waitFor(button2, 200);
    console.log('Success 2:', result2);
    return result1 + result2;
  } catch (e) {
    console.log('Error:', e)
    return 999;
  } finally {
    console.log('Finally');
  }

  console.log('After try catch');
}*/

init()
  .then(data => console.log('Result:', data));
