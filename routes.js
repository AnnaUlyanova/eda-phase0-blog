var path = require('path')
var express = require('express')
var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var knex = require('knex')(config)

var db = require('./db.js')

module.exports = {
  getHomePage: getHomePage,
  addNewPost: addNewPost,
  getNewPostPage: getNewPostPage,
  getPostById: getPostById
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
  db.getAllPosts()
  .then (function (posts) {
    var data = {
      title: "Blog Post Page",     // !!!CHANGE TO DYNAMIC TITLE
      actualPost: posts[req.params.id-1]
    }
    if (posts[req.params.id-1].blog_type === "cultural") {
      res.render('cultural-blog', data)
    } else if (posts[req.params.id-1].blog_type === "technical") {
      res.render('technical-blog', data)
    }


  })
  .catch(function (err) {
    res.status(500).send('Error' + err.message)
  })
}
