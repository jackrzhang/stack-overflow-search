import request from 'superagent';
import opn from 'opn';
import handleError from './handleError';
import logResults from './logResults';

function getSearchResults(url, numResults, lucky) {
  request
    .get(url)
    .set('Accept', 'application/json')
    .end((err, res) => {
      if (res && res.ok) {
        if (lucky && res.body.items.length !== 0) {
          opn(res.body.items[0].link);
        } else {
          logResults(res.body.items, numResults);
        }

        process.exit(0);
      } else {
        handleError(res, err);
        process.exit(1);
      }
    });
}

export default getSearchResults;
