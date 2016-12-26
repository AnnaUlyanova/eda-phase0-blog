
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blogposts', function (table) {
    table.increments('id').primary()
    table.string('quote')
    table.integer('sprint_num')
    table.string('blog_type')
    table.string('title')
    table.text('content')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blogposts')
};
