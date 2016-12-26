var express = require('express')
var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  getAllPosts: getAllPosts,
  insertNewPost: insertNewPost
}

function getAllPosts() {
  return connection ('blogposts')
}

function insertNewPost (post) {
  return connection ('blogposts')
    .insert({quote: post.quote, sprint_num: post.sprint_num, blog_type: post.blog_type, title: post.title, content: post.content})
}
