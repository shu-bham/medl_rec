let pool = require('./connection')

module.exports = (req, res) => {
    pool.query('INSERT INTO `PatientRegister` SET ?', req.body, function (error, results, fields) {
        if (error) {
            console.log(error)
            res.send("Unable to add details to database")
        }
        else res.send('Success');
    });
}
