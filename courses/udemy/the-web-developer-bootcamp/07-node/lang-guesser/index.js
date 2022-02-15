import { franc, francAll } from 'franc';
import langs from 'langs';
import colors from 'colors';

const input = process.argv[2];
const langCode = franc(input);
if (langCode === 'und') {
  console.log(`SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!`.red);
} else {
  const language = langs.where('3', langCode);
  if (language === undefined) {
    console.log(`Best I can do is: ${language}`.yellow);
  } else {
    console.log(`Our best guess is: ${language.name}`.green);
  }
}
