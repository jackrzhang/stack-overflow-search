/* eslint-disable camelcase */
import chalk from 'chalk';

function logResults(results) {
  if (results.length === 0) console.log(chalk.blue('No results found.\n'));

  results.forEach(result => {
    const { title, score, view_count, creation_date, last_edit_date, link } = result;

    console.log(chalk.cyan.bold.underline(`Question: ${title}`));
    console.log(chalk.magenta(`Asked: ${creation_date}`));
    console.log(chalk.yellow(`Viewed: ${view_count} times`));
    console.log(chalk.blue(`Active: ${last_edit_date}`));
    console.log(chalk.green.bold(`Score: ${score}\n`));
    console.log(`URL: ${link}\n`);
  });
}

export default logResults;
