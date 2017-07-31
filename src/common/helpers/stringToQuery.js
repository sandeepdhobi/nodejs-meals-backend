const _ = require('lodash');

const processQuery = (input) => {
  let queryString = _.cloneDeep(input);
  let regEx = /([a-z_]+)( eq | ne | gt | lt )([a-z0-9_$\-'",\.\\\[\]\{\}\: ]+)/gi;
  let regEx1 = new RegExp(regEx);
  const keys = [];
  let match = regEx1.exec(queryString);
  if(match == null) queryString = '{}';
  else {
    while (match != null) {
      keys.push(match[1]);
      queryString = queryString.replace(match[0], JSON.stringify({ [`${match[1]}`]: { [`$${match[2].replace(/ /g, '')}`]: match[3].replace(/^('|")(.*)('|")$/, '$2') } }));
      let regEx1 = new RegExp(regEx);
      match = regEx1.exec(queryString);
    }

    regEx = /(\([a-z0-9_$\-'",\.\\\[\]\{\}\: ]+\))( (AND|OR) )(\([a-z0-9_$\-'",\.\\\[\]\{\}\: ]+\))/gi;
    let regEx2 = new RegExp(regEx);
    match = regEx2.exec(queryString);
    while (match != null) {
      const query = JSON.stringify({ [`$${match[3].toLowerCase()}`]: [JSON.parse(match[1].replace(/^(\()(.*)(\))$/, '$2')), JSON.parse(match[4].replace(/^(\()(.*)(\))$/, '$2'))] });
      queryString = queryString.replace(`(${match[0]})`, match[0]);
      queryString = queryString.replace(match[0], `(${query})`);
      let regEx2 = new RegExp(regEx);
      match = regEx2.exec(queryString);
    }
  }
  return { query: JSON.parse(queryString.replace(/^(\()(.*)(\))$/, '$2')), keys };
};

module.exports = processQuery;