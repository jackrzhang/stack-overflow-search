import request from 'superagent';
import handleError from './handleError';
import logResults from './logResults';

function getSearchResults(url) {
  request
    .get(url)
    .set('Accept', 'application/json')
    .end((err, res) => {
      if (res && res.ok) {
        logResults(res.body.items);
        process.exit(0);
      } else {
        handleError(res, err);
        process.exit(1);
      }
    });
}

export default getSearchResults;
