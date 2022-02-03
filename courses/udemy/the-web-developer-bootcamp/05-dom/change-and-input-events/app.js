const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// input.addEventListener('change', e => {
//   console.log('Change Event!');
// });

input.addEventListener('input', e => {
  h1.innerText = input.value;
});
