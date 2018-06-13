var mysql = require('mysql');

module.exports = mysql.createPool({
  connectionLimit : 10,
  host            : '172.30.117.62',
  user            : 'user8TS',
  password        : 'RHlBG40PJ1q1gmEg',
  database        : 'sampledb'
});
