const allLinks = document.querySelectorAll('a');
const h2 = document.querySelector('h2');

for (let link of allLinks) {
  // link.innerText = 'I AM A LINK!!!!';
  link.style.color = 'rgb(0, 108, 134)';
  link.style.textDecorationColor = 'magenta';
  link.style.textDecorationStyle = 'wavy';
}

// ================
// ATTRIBUTES
// ================
// h2.getAttribute('class');
// h2.setAttribute('class', 'purple');
// h2.setAttribute('class', 'border');
// let currentClasses = h2.getAttribute('class');
// h2.setAttribute('class', `${currentClasses} purple`);

// ================
// CLASSLIST
// ================
// h2.classList.add('purple');
// h2.classList.add('border');
// h2.classList.remove('border');
// h2.classList.contains('purple');
// h2.classList.toggle('purple');
// h2.classList.toggle('purple');

// ================
// TRAVERSING
// ================
const firstBold = document.querySelector('b');
// firstBold.parentElement;
// firstBold.parentElement.parentElement;
// firstBold.parentElement.parentElement.parentElement;

const paragraph = firstBold.parentElement;
paragraph.children;
paragraph.children[0];
paragraph.children[0].parentElement;

const squareImg = document.querySelector('.square');
// squareImg.parentElement;
// squareImg.nextSibling;
// squareImg.previousSibling;
squareImg.nextElementSibling;
squareImg.previousElementSibling;

// ================
// CREATE ELEMENT
// ================
const newImg = document.createElement('img');
newImg.src =
  'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80';
newImg.classList.add('square');
// document.body.appendChild(newImg);

const newH3 = document.createElement('h3');
newH3.innerText = 'I am new h3!';
// document.body.appendChild(newH3);

const p = document.querySelector('p');
// p.append('I am new text yaaaaaayyy!!! ', 'Second content on append method');

const newB = document.createElement('b');
newB.append('Hi!');
// p.prepend(newB);

const newH2 = document.createElement('h2');
// newH2.append('Are adorable chickens');

const h1 = document.querySelector('h1');
// h1.insertAdjacentElement('afterend', newH2);
// h1.after(newH3);

// ================
// REMOVE ELEMENT
// ================
const firstLi = document.querySelector('li');
const ul = firstLi.parentElement;
// ul.removeChild(firstLi);

// firstBold.parentElement.removeChild(firstBold);
// firstBold.remove();
