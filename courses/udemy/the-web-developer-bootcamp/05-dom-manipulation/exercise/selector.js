/**
 * Come up with 4 different ways to select the first <p> tag
 */

var p = document.getElementById('first');
var p = document.getElementsByClassName('special')[0]
var p = document.getElementsByTagName('p')[0];
var p = document.querySelector('#first');
var p = document.querySelector('.special');
var p = document.querySelector('p'); // automatically select the first one
var p = document.querySelectorAll('.special')[0];
var p = document.querySelectorAll('p')[0];
var p = document.querySelector('h1 + p'); // + means first element adjacent to the first query