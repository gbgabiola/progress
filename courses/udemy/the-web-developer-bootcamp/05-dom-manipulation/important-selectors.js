var highlight = document.getElementById('highlight');

var bolded = document.getElementsByClassName('bolded');

var lis = document.getElementsByTagName('li');

// querySelector will give us the very first match even though there are multiple elements with the same selector
var h1 = document.querySelector('h1'); // will return the first match
var firstBolded = document.querySelector('.bolded'); // will return the first class bolded

var h1 = document.querySelectorAll('h1'); // will return all the h1
var firstBolded = document.querySelector('.bolded'); // will return all the bolded class