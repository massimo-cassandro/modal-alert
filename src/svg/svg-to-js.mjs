/* eslint-disable no-console */
// build a js file with all svgs as variables

import * as fs from 'fs';
import * as path from 'path';

const __dirname = new URL('.', import.meta.url).pathname
  ,target_file = path.resolve(__dirname, '../marks.js')
  ,marks = {};

['confirm', 'error', 'info', 'success', 'warning'].forEach(svg => {
  const svg_content = fs.readFileSync(path.resolve(__dirname, `./${svg}.svg`), 'utf8');
  marks[svg] = svg_content; //.replaceAll('\'', '\\\'');
});

const content = '/* eslint-disable quotes */\n\n' +
'export const marks = ' + JSON.stringify(marks) + ';';

fs.writeFileSync(target_file, content, 'utf-8');

console.log('svg-to-js: DONE');
