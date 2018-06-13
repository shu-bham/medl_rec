const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
let displayResults = require('./db_queries/displayResults')
let insertpatient= require('./db_queries/insertpatient')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', './views')
app.get('/', (req, res) => res.render('home'))

app.get('/patients', (req, res) => {
    displayResults(req, res)
})

app.get('/addpatients', (req, res) => {
    //res.send('addpatients view not added')
    res.render('addpatients')
})

app.post('/addpatients', (req, res) => {
    insertpatient(req, res)
})

app.listen(8080, () => console.log('Example app listening on port 8080!'))
