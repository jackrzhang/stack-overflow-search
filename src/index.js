#!/usr/bin/env node

import program from 'commander';
import pkg from './../package.json';
import chalk from 'chalk';

let keywords, url;

program
  .version(pkg.version)
  .usage('[options] <keywords>')
  .description('A simple utility for searching Stack Overflow.')
  .parse(process.argv);

if (program.args.length === 0) {
  program.help();
} else {
  keywords = program.args;
  console.log(keywords);
}
