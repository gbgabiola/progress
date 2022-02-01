const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', () => {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
});

const getRandomColor = () => {
  const r = getRandomNumber();
  const g = getRandomNumber();
  const b = getRandomNumber();

  if (r < 150 && g < 150 && b < 150) {
    h1.style.color = '#fff';
  } else {
    h1.style.color = '#000';
  }

  return `rgb(${r}, ${g}, ${b})`;
};

const getRandomNumber = () => Math.floor(Math.random() * 256);
