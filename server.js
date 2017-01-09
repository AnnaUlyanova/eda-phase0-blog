var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')

var Handlebars = require('handlebars');

var index = require('./index')
var routes = require('./routes')

var server = express()

module.exports = server

// Middleware

server.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main.hbs'
}))

server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, 'views'))

server.use(express.static('public'))
server.use(bodyParser.urlencoded({ extended: true }))

Handlebars.registerHelper('grouped_each', function(every, context, options) {
    var out = "", subcontext = [], i;
    if (context && context.length > 0) {
        for (i = 0; i < context.length; i++) {
            if (i > 0 && i % every === 0) {
                out += options.fn(subcontext);
                subcontext = [];
            }
            subcontext.push(context[i]);
        }
        out += options.fn(subcontext);
    }
    return out;
});

// Routes

server.get('/', routes.getHomePage)
server.get('/admin', routes.getNewPostPage)
server.post('/admin', routes.addNewPost)
server.get('/post/:id', routes.getPostById)
server.post('/', routes.postComment)
server.get('/add-comments', routes.getComments)
server.get('/contact', routes.getContactPage)
server.get('/projects', routes.getProjectsPage)
