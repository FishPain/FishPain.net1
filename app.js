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


app.get('/', (req, res) => {
    var metadata = {
        meta: {
            title: "Home",
            path: false
        },
        nav: {
            index: true
        }
    }
    res.render('index', metadata)
})

app.get('*', (req, res) => {
    var metadata = {
        meta: {
            title: "404",
            path: false
        },
        nav: {}
    }
    res.status = 404
    res.render('404', metadata)
})

server.listen(conf.webserverPort, function (err) {
    log.debug(`Web server listening on port ${conf.webserverPort}.`)
})
