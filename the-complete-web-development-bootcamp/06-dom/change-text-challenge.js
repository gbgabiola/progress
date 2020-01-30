/*
  Challenge: Change the text of the third list from "Third" to "your Name".
  Check the dom.html file.
*/

// The first one will not work because it is internal script
// document.firstElementChild.lastElementChild.lastElementChild.lastElementChild;
document.querySelector("ul").lastElementChild.innerHTML = "Genesis";