/* eslint-disable camelcase */
import { white, green, blue, yellow, magenta, underline } from 'chalk';
import moment from 'moment';

function logResults(results, numResults) {
  if (results.length === 0) console.log(blue('No results found.'));
  console.log();

  const displayedResults = results.slice(0, numResults);
  displayedResults.forEach(result => {
    const { title, score, view_count, creation_date, last_edit_date, link } = result;
    const asked = moment.unix(creation_date).fromNow();
    const active = last_edit_date === undefined ?
      'not defined' :
      moment.unix(last_edit_date).fromNow();

    console.log(white.bold(`  ${underline(`Question: ${title}`)}\n`));
    console.log(white(`    Score: ${green.bold(score)}\n`));
    console.log(white(`    Asked: ${blue.bold(asked)}`));
    console.log(white(`    Viewed: ${magenta.bold(`${view_count} times`)}`));
    console.log(white(`    Active: ${blue.bold(active)}\n`));
    console.log(white(`    URL: ${yellow(link)}\n`));
  });
}

export default logResults;
