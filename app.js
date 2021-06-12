// Config File
const conf = require('./config.json')

// Express related modules
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

app.use(express.static(`public`))

// Handlebars
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
        smoothScroll: {
            easing: "easeInQuad"
        }
    }
    res.render('index', metadata)
})

// Error 404
app.get('*', (req, res) => {
    var metadata = {
        meta: {
            title: "404",
            location: ()=>{
                return (req.path.length <= 20) ? req.path : `${req.path.slice(0,20)}...`
            },
        },
        smoothScroll: false
    }
    res.status = 404
    res.render('404', metadata)
})

app.listen(conf.webserverPort, function (err) {
    console.log(`Web server listening on port ${conf.webserverPort}.`)
})
