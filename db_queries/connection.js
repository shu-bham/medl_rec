var mysql = require('mysql');

module.exports = mysql.createPool({
  connectionLimit : 10,
  host            : 'mysql://mysql:3306/',
  user            : 'user2OK',
  password        : 't5tcWrfwwiiJrFaQ',
  database        : 'sampledb'
});
