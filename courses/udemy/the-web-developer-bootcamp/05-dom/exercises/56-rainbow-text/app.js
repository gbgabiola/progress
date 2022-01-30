const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

const spans = document.querySelectorAll('span');
// ===============
// For Loop
// ===============
// for (let i = 0; i < spans.length; i++) {
//   spans[i].style.color = colors[i];
// }

// ===============
// For...Of Loop
// ===============
// let i = 0;
// for (let span of spans) {
//   span.style.color = colors[i];
//   i++;
// }

// ===============
// For...In
// ===============
// for (let span in spans) {
//   spans[span].style.color = colors[span];
// }

// ===============
// ForEach Loop
// ===============
Array.from(spans).forEach((span, i) => {
  span.style.color = colors[i];
});
