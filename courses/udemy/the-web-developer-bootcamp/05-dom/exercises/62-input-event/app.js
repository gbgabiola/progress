const input = document.querySelector('#username');
const h1 = document.querySelector('h1');

input.addEventListener('input', function () {
  if (!this.value) {
    h1.innerText = 'Enter Your Username';
  } else {
    h1.innerText = `Welcome, ${this.value}`;
  }
});
