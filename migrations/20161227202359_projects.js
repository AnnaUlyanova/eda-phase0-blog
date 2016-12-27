
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.integer('sprint_num')
    table.string('url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects')
};
