const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
  // link.innerText = 'I AM A LINK!!!!';
  link.style.color = 'rgb(0, 108, 134)';
  link.style.textDecorationColor = 'magenta';
  link.style.textDecorationStyle = 'wavy';
}
