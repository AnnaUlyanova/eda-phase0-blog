
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('projects').insert({
          id: 1,
          name: 'Minesweeper',
          sprint_num: 6,
          url: "https://annaulyanova.github.io/minesweeper"}),
        knex('projects').insert({
          id: 2,
          name: 'Random Quote Generator',
          sprint_num: 7,
          url: "https://annaulyanova.github.io/quote-generator"}),
        knex('projects').insert({
          id: 3,
          name: 'Weather Application',
          sprint_num: 7,
          url: "https://annaulyanova.github.io/weather-app"}),
        knex('projects').insert({
          id: 4,
          name: 'Simple JavaScript Calculator',
          sprint_num: 8,
          url: "https://annaulyanova.github.io/js-calculator"}),
        knex('projects').insert({
          id: 5,
          name: 'Pomodoro timer',
          sprint_num: 8,
          url: "https://annaulyanova.github.io/js-pomodoro-clock"}),
        knex('projects').insert({
          id: 6,
          name: 'New Zealand 9 Great Walks',
          sprint_num: 9,
          url: "https://annaulyanova.github.io/nz-great-walks-map"}),
      ]);
    });
};
