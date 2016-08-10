/* Custom error handler for superagent HTTP requests */
import chalk from 'chalk';

function handleError(err, res) {
  let errorMessage;
  if (res && res.status === 401) {
    errorMessage = 'Authentication failed.';
  } else if (err) {
    errorMessage = err;
  } else {
    errorMessage = res.text;
  }

  console.error(chalk.red(errorMessage));
}

export default handleError;
