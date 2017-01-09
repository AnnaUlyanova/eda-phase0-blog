
exports.up = function(knex, Promise) {
    return knex.schema.createTable('comments', function (table) {
      table.increments('id').primary()
      table.string('name')
      table.string('comment')
      table.string('post_id').references('blogposts.id')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments')
};
