#!/usr/bin/env node

import program from 'commander';
// import chalk from 'chalk';
import pkg from './../package.json';
import getSearchResults from './helpers/getSearchResults';

program
  .version(pkg.version)
  .usage('[options] <keywords>')
  .description('A simple utility for searching Stack Overflow.')
  .parse(process.argv);

const urlBase = 'https://api.stackexchange.com/2.2/search?order=desc&sort=votes&site=stackoverflow&intitle=';

if (program.args.length === 0) {
  program.help();
} else {
  const keywords = program.args;
  const url = `${urlBase}${keywords}`;

  getSearchResults(url);
}
