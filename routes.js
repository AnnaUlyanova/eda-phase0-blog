var path = require('path')
var express = require('express')
var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var knex = require('knex')(config)
var helpers = require('handlebars-helpers')();


var db = require('./db.js')

module.exports = {
  getHomePage: getHomePage,
  addNewPost: addNewPost,
  getNewPostPage: getNewPostPage,
  getPostById: getPostById,
  getContactPage: getContactPage,
  getProjectsPage: getProjectsPage,
  postComment: postComment,
  getComments: getComments
}

// load main page with the list of all posts
function getHomePage (req, res) {
  db.getAllPosts()
    .then(function (posts) {
      var data = {
      title: "Anna Ulyanova | EDA Blog | Main",
      posts: posts
      }
      res.render("home", data)
    })
    .catch(function (err) {
      res.status(500).send('Error' + err.message)
    })
}

//load admin page to add new posts
function getNewPostPage (req, res) {
  var data = {
    title: "Administration Page | Add new blog post"
  }
  res.render('admin', data)
}

//add new post
function addNewPost (req, res) {
  var post = {
    id: req.body.id,
    quote: req.body.quote,
    sprint_num: req.body.sprint_num,
    blog_type: req.body.blog_type,
    title: req.body.title,
    content: req.body.content
  }
  db.insertNewPost(post)
    .then(function() {
      res.redirect('/')
    })
    .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
  }

//load page for each post by ID
function getPostById (req, res) {
  db.getPostById(req.params.id)
  //db.getPostsAndComments()
    .then (function (post) {
       db.getComments(req.params.id)
         .then (function (comments) {
           if (post.blog_type === "Cultural") {
             var data = {
               title: "Anna Ulyanova | EDA BLOG | " + post.title,
               actualPost: post,
               layout: "cultural",
               comments: comments
            }
            res.render('cultural-blog', data)
          } else if (post.blog_type === "Technical") {
              var data = {
                 title: "Anna Ulyanova | EDA BLOG | " + post.title,
                 actualPost: post,
                 layout: "technical",
                 comments: comments
             }
             res.render('technical-blog', data)
           }
    })

    })
  .catch(function (err) {
    res.status(500).send('Error: ' + err.message)
  })

}

function getProjectsPage (req, res) {
  db.getProjects()
    .then(function (projects) {
      var data = {
      title: "Anna Ulyanova | EDA Blog | Projects",
      projects: projects
      }
      res.render("projects", data)
    })
    .catch(function (err) {
      res.status(500).send('Error' + err.message)
    })
}

//load Contact Page
function getContactPage (req, res) {
  var data = {
    title: "Anna Ulyanova | EDA Blog | Contact"
  }
  res.render("contact", data)
}

//post new comment
function postComment (req, res) {
    var id = Number(req.body.id)
    var comment = {
      post_id: Number(req.body.id),
      name: req.body.name,
      comment: req.body.comment
  }
  db.insertComment(comment)
    .then(function() {
      res.redirect('/post/' + id)
    })
    .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
    }

//show all Comments
function getComments (req, res) {
  db.getComments()
    .then(function (comments) {
      var id = Number(req.body.id)
      var data = {
        comments: comments
      }
      res.render('users-comments', data)
    })
    .catch(function (err) {
      res.status(500).send('Error' + err.message)
    })
}



// function getContactPage (req, res) {
//   sendgrid.send({
//     to: 'a.ulyanova89@gmail.com',
//     from: 'a.ulyanova89@gmail.com',
//     subject: 'Hello World',
//     text: 'Email from node js.'
//   }, function (err, json) {
//     if (err) {
//       return res.send('there is an error')
//     }
//     res.send('the email has been send!')
//   })
// }
