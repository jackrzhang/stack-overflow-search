# stack-overflow-search
[![npm](https://img.shields.io/npm/v/stack-overflow-search.svg)](https://www.npmjs.com/package/stack-overflow-search)
[![dependencies Status](https://david-dm.org/jackrzhang/stack-overflow-search/status.svg)](https://david-dm.org/jackrzhang/stack-overflow-search)

A simple command-line utility for searching Stack Overflow.

### Usage
By default, the first 4 search results are output. Use the `-n` option to adjust this number.
Search results are from the [StackExchange API](https://api.stackexchange.com/docs/search). Input keywords are matched to question titles, and results are sorted by [score](http://meta.stackexchange.com/questions/229255/what-is-the-score-of-a-post) in descending order.
```
sos [options] <keywords>

Options:

  -h, --help             output usage information
  -V, --version          output the version number
  -n, --number <number>  display the specified number of search results
  -l, --lucky            open the first search result
```

### Installation
```sh
$ npm install -g stack-overflow-search
```


### License
[MIT](https://github.com/jackrzhang/stack-overflow-search/blob/master/LICENSE)
