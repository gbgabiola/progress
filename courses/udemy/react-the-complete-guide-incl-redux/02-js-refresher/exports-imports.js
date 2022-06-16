// person.js
const person = {
  name: 'Genesis',
};

export default person;

// utility.js
export const clean = () => {
  'Clean';
};
export const baseData = 10;

// app.js
import person from './person.js';
import prs from './person.js';

import { baseData } from './utility.js';
import { clean } from './utility.js';
