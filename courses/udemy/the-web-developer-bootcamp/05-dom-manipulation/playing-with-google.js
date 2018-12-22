var logo = document.querySelector('#hplogo');

logo.setAttribute('srcset', 'https://www.eastcottvets.co.uk/uploads/Animals/gingerkitten.jpg');

logo.style.height = '100px';
logo.style.width = '200px';
logo.style.border = '2px solid purple';

var links = document.getElementsByTagName('a');

for (var i = 0; i < links.length; i++) {
  // console.log(links[i].textContent);
  // links[i].style.background = 'pink';
  // links[i].style.border = '1px dashed purple';
  // links[i].style.color = 'orange';
  // console.log(links[i].getAttribute('href'));
  links[i].setAttribute('href', 'http://www.bing.com');
}