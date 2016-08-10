/* eslint-disable camelcase */
import { white, green, blue, yellow, magenta } from 'chalk';

function logResults(results, numResults) {
  if (results.length === 0) console.log(blue('No results found.'));

  const displayedResults = results.slice(0, numResults - 1);
  displayedResults.forEach(result => {
    const { title, score, view_count, creation_date, last_edit_date, link } = result;
    const active = last_edit_date === undefined ? 'Over a year ago' : last_edit_date;

    console.log(white.bold.underline(`\nQuestion: ${title}\n`));
    console.log(white(`    Score: ${green.bold(score)}\n`));
    console.log(white(`    Asked: ${blue.bold(creation_date)}`));
    console.log(white(`    Viewed: ${magenta.bold(`${view_count} times`)}`));
    console.log(white(`    Active: ${blue.bold(active)}\n`));
    console.log(white(`    URL: ${yellow(link)}\n`));
  });
}

export default logResults;
