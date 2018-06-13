var mysql = require('mysql');

module.exports = mysql.createPool({
  connectionLimit : 10,
  host            : 'mysql-medical.7e14.starter-us-west-2.openshiftapps.com',
  user            : 'userIE6',
  password        : 'Glh6gmDFryr50x0N',
  database        : 'sampledb'
});
