let pool = require('./connection')

module.exports = (req, res) => {
    pool.query('SELECT * FROM `PatientRegister`', function (error, results, fields) {
        if (error) throw error
        //res.json(results)
        res.render('patients', {results})
    });
}
