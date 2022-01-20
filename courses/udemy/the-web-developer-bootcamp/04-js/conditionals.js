// =====================
// BASIC IF/ELSE
// =====================
let random = Math.random();
if (random < 0.5) {
  console.log('YOUR NUMBER IS LESS THAN 0.5!!!');
} else {
  console.log('YOUR NUMBER IS GREATER (OR EQUAL) THAN 0.5!!!');
}
console.log(random);

// =====================
// PROMPT EXAMPLE
// =====================
const dayOfWeek = prompt('ENTER A DAY').toLowerCase();

if (dayOfWeek === 'monday') {
  console.log('UGHHH I HATE MONDAYS!');
} else if (dayOfWeek === 'saturday') {
  console.log('YAY I LOVE SATURDAYS!');
} else if (dayOfWeek === 'friday') {
  console.log('FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!');
} else {
  console.log('MEH');
}

// =====================
// TICKET PRICE EXAMPLE
// =====================

// 0-5 - FREE
// 5 - 10 CHILD $10
// 10 - 65 ADULT $20
// 65+ SENIOR $10

const age = 890;

if (age < 5) {
  console.log('You are a baby.  You get in for free!');
} else if (age < 10) {
  console.log('You are a child.  You pay $10');
} else if (age < 65) {
  console.log('You are an adult. You pay $20');
} else {
  console.log('You are a senior. You pay $10');
}

// =====================
// NESTING CONDITIONALS
// =====================
const password = prompt('please enter a new password');

// Password must be 6+ characters
if (password.length >= 6) {
  // Password cannot include space
  if (password.indexOf(' ') === -1) {
    console.log('Valid Password!');
  } else {
    console.log('Password cannot contain spaces!');
  }
} else {
  console.log('PASSWORD TOO SHORT! Must be 6+ characters');
}

// =====================
// SWITCH STATEMENTS
// =====================
const day = 6;

// if (day === 1) {
//   console.log('MONDAY');
// } else if (day === 2) {
//   console.log('TUESDAY');
// } else if (day === 3) {
//   console.log('WEDNESDAY');
// } else if (day === 4) {
//   console.log('THURSDAY');
// } else if (day === 5) {
//   console.log('FRIDAY');
// } else {
//   console.log('I DONT KNOW THAT!');
// }

switch (day) {
  case 1:
    console.log('MONDAY');
    break;
  case 2:
    console.log('TUESDAY');
    break;
  case 3:
    console.log('WEDNESDAY');
    break;
  case 4:
    console.log('THURSDAY');
    break;
  case 5:
    console.log('FRIDAY');
    break;
  case 6:
  case 7:
    console.log('WEEKEND');
    break;
  default:
    console.log('I DONT KNOW THAT!');
}
