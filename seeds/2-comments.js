
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('comments').insert({id: 1, name: 'David', comment:"I want to join EDA too!", post_id: 1}),
        knex('comments').insert({id: 2, name: 'Jackson', comment:"I found Pomodoro technique helpful", post_id: 2}),
        knex('comments').insert({id: 3, name: 'Charlie', comment:"Wireframes are really helpful!", post_id: 6}),
        knex('comments').insert({id: 4, name: 'Emma', comment:"I like the pictures too!", post_id: 6}),
        knex('comments').insert({id: 5, name: 'Charlotte', comment:"Meditation is a good way of relaxation", post_id: 14})
      ]);
    });
};
