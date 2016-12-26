
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blogposts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('blogposts').insert({
          id: 1,
          quote: " \"Look within; within is the fountain of all good.\"",
          sprint_num: 1,
          blog_type: "cultural",
          title: "Reflection #1",
          content: "What's your take on the DBC/EDA experience? What are your impressions? EDA teaching approach is completely new to me, as before I studied only in traditional schools and universities. My first impression is absolutely positive, and I am totally open to the new study technique. How do you see yourself engaging with this type of culture? No doubt, it will be fun to be a part of EDA culture :) Have your expectations of EDA changed? If so, how? I visited DevAcademy both in Wellington and Auckland before I signed up, so I had a idea what it looks like. And for the moment it's all being in step with my expectations. Are you excited to participate in this kind of learning environment? Does it make you nervous? I am very excited about EDA environment! Don't feel too nervous, as I know we will support each other! :)"}),
        knex('blogposts').insert({
            id: 2,
            quote: " \"By non-doing, all doing becomes possible.\"",
            sprint_num: 1,
            blog_type: "cultural",
            title: "Reflections on time and habit techniques",
            content: "Which timebox and habits techniques did you try? I haven't tried any particular technique yet, except for creating a to-do list of small tasks. And then I work on it while don't cross them all out. What did you find interesting? I found interesting a research on how meditation affects our brain work. What worked for you? To-do list is the thing number 1 for me, as it helps to structure the plan. Which will you experiment further with? I think I'll research more on Fogg Method, and will try it."}),
        knex('blogposts').insert({
                id: 3,
                quote: " \"By non-doing, all doing becomes possible.\"",
                sprint_num: 2,
                blog_type: "technical",
                title: "Technical Blog Part 1. Udacity Reflection",
                content: "Wishlist of design and structural features. Minimalist design, article gradient borders. Interactive menu. Cool single page website, navigation bar. New Zealand website. Parallax scrolling. Quiz section. Can you think of an analogy to describe HTML, CSS and the DOM? How would you describe it to your non-technical friend? I like the analogy given in Udacity tutorial: HTML - like walls/floor/ceiling in your house. CSS - all decorations in your house (color of tiles, style of wallpapers). DOM - is the structure of your house, and how things relate to each other (e.g. there are 4 rooms in a house, meaning each room is a child to the house etc). What is meant by boxifying design? Every element on a webpage is a box. Boxifying design means to \"cut\" a webpage (which is a box itself) to smaller boxes/blocks. What is the box model? Box model is a box that wraps around all elements on a webpage. Every element has a content, padding, border and margin."})
          ]);
    });
};
