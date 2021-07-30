#!/usr/bin/env/node

/**
 * This program generate a password of random characters, numbers and symbols. Check options to choose. 
 * Type the command: node src/main  <options>
 * node main -h for help
 * External library used: commander https://github.com/tj/commander.js, chalk https://github.com/chalk/chalk and clipboardy: https://github.com/sindresorhus/clipboardy
*/

const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');
const createPassword = require('./createPassword');
const savePassword = require('./savePassword.js');
const calculateHash = require('./hashPassword');


program.version('0.0.1').description('Password generator')

program
  .option('-l, --length <number>', 'length of password', '8')
  .option('-s, --save', 'save password to file passwords.txt')
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove symbols')
  .parse();

const { length, save, numbers, symbols } = program.opts()

const generatedPassword = createPassword(length, numbers, symbols);
const hashedPassword = calculateHash(generatedPassword);

if (save) {
  savePassword(hashedPassword);
}

clipboardy.writeSync(generatedPassword);

console.log(chalk.magenta('Generated password: ') + chalk.bold.yellow(generatedPassword));
console.log('Password copied to clipboard');
console.log(chalk.magenta('Hash of password: ') + chalk.bold.yellow(hashedPassword));
