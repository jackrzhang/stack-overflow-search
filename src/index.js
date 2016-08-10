#!/usr/bin/env node

import program from 'commander';
import pkg from './../package.json';
import getSearchResults from './helpers/getSearchResults';

program
  .version(pkg.version)
  .usage('[options] <keywords>')
  .description('A simple utility for searching Stack Overflow.')
  .option('-n, --number <number>', 'display the specified number of search results')
  .option('-l, --lucky', 'open the first search result')
  .parse(process.argv);

const urlBase = 'https://api.stackexchange.com/2.2/search?order=desc&sort=votes&site=stackoverflow&intitle=';
const numResults = program.number ? Number(program.number) : 4;

if (program.args.length === 0) {
  program.help();
} else {
  const keywords = program.args;
  const url = `${urlBase}${keywords}`;

  getSearchResults(url, numResults, program.lucky);
}
