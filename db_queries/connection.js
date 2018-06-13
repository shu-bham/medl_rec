var mysql = require('mysql');

module.exports = mysql.createPool({
  connectionLimit : 10,
  host            : 'mysql-mymedapp.7e14.starter-us-west-2.openshiftapps.com',
  user            : 'user8TS',
  password        : 'RHlBG40PJ1q1gmEg',
  database        : 'sampledb'
});
