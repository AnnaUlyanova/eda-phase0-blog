var express = require('express')
var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  getAllPosts: getAllPosts,
  insertNewPost: insertNewPost,
  getProjects: getProjects,
  insertComment: insertComment,
  getComments: getComments,
  getPostById: getPostById
}

function getAllPosts() {
  return connection ('blogposts')
}

function getPostById (id) {
    return connection ('blogposts')
    .where('id', id)
    .first()
}

function insertNewPost (post) {
  return connection ('blogposts')
    .insert({quote: post.quote, sprint_num: post.sprint_num, blog_type: post.blog_type, title: post.title, contrent: post.content})
}

function getProjects() {
  return connection ('projects')
}

function insertComment (comment) {
  return connection('comments')
  .insert({name: comment.name, comment: comment.comment, post_id: comment.post_id})
}

function getComments(id) {
  return connection ('comments')
    .where('post_id', id)
}

function getPostsAndComments () {
  return connection ('blogposts')
    .select('*').from('blogposts').whereNull('name', 'comment').unionAll(function() {
      this.select('*').from('comments')
    })
}
