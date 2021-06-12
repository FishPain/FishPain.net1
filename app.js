// Config File
const conf = require('./config.json')

// Express related modules
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

app.use(express.static(`public`))

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: `views/layouts/`
}))

app.set('view engine', 'hbs')
app.set('views', `views`)

// Main page
app.get('/', (req, res) => {
    var metadata = {
        meta: {
            title: "Portfolio",
            description : "Tony Yu Haotong. I am a student studying Business Intelligence & Analytics (DBA) in Nanyang Polytechnic (NYP)",
        },
        nav: {
            index: true
        }
    }
    res.render('index', metadata)
})

// Error 404
app.get('*', (req, res) => {
    var metadata = {
        meta: {
            title: "404",
            location: req.path,
        },
        nav: {}
    }
    res.status = 404
    res.render('404', metadata)
})

app.listen(conf.webserverPort, function (err) {
    console.log(`Web server listening on port ${conf.webserverPort}.`)
})
