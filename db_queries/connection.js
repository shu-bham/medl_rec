var mysql = require('mysql');

module.exports = mysql.createPool({
  connectionLimit : 10,
  host            : 'mysql://mysql:3306/',
  user            : 'user8TS',
  password        : 'RHlBG40PJ1q1gmEg',
  database        : 'sampledb'
});
