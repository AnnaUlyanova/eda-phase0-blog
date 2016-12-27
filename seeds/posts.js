
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
          blog_type: "Cultural",
          title: "Reflection #1",
          content: "&lt;ul&gt; &lt;li class=\"question\"&gt;What's your take on the DBC/EDA experience? What are your impressions?&lt;/li&gt; &lt;p class=\"answer\"&gt;EDA teaching approach is completely new to me, as before I studied only in traditional schools and universities. My first impression is absolutely positive, and I am totally open to the new study technique.&lt;/p&gt;    &lt;li class=\"question\"&gt;How do you see yourself engaging with this type of culture?&lt;/li&gt; &lt;p class=\"answer\"&gt;No doubt, it will be fun to be a part of EDA culture :)&lt;/p&gt; &lt;li  class=\"question\"&gt;Have your expectations of EDA changed? If so, how?&lt;/li&gt; &lt;p class=\"answer\"&gt; I visited DevAcademy  both in Wellington and Auckland before I signed up, so I had a idea what it looks like. And for the moment it's all being in step with my expectations. &lt;/p&gt; &lt;li  class=\"question\"&gt;Are you excited to participate in this kind of learning environment? Does it make you nervous?&lt;/li&gt; &lt;p class=\"answer\"&gt;I am very excited about EDA environment! Don't feel too nervous, as I know we will support each other! :)&lt;/p&gt; &lt;/ul&gt;"}),
        knex('blogposts').insert({
            id: 2,
            quote: " \"By non-doing, all doing becomes possible.\"",
            sprint_num: 1,
            blog_type: "Cultural",
            title: "Reflections on time and habit techniques",
            content: "Which timebox and habits techniques did you try? I haven't tried any particular technique yet, except for creating a to-do list of small tasks. And then I work on it while don't cross them all out. What did you find interesting? I found interesting a research on how meditation affects our brain work. What worked for you? To-do list is the thing number 1 for me, as it helps to structure the plan. Which will you experiment further with? I think I'll research more on Fogg Method, and will try it."}),
        knex('blogposts').insert({
                id: 3,
                quote: " \"By non-doing, all doing becomes possible.\"",
                sprint_num: 2,
                blog_type: "Technical",
                title: "Technical Blog Part 1. Udacity Reflection",
                content: "&lt;ul&gt;    &lt;li class=\"question\"&gt;Can you think of an analogy to describe HTML, CSS and the DOM? How would you describe it to your non-technical friend?&lt;/li&gt; &lt;p class=\"answer\"&gt;    I like the analogy given in Udacity tutorial:    &lt;ul class=\"answer\"&gt;       &lt;li&gt;HTML - like walls/floor/ceiling in your house.&lt;/li&gt;      &lt;li&gt;CSS - all decorations in your house (color of tiles, style of wallpapers).&lt;/li&gt;       &lt;li&gt;DOM - is the structure of your house, and how things relate to each other (e.g. there are 4 rooms in a house, meaning each room is a child to the house etc).&lt;/li&gt;    &lt;/ul&gt; &lt;/p&gt;      &lt;li  class=\"question\"&gt;What is meant by boxifying design?&lt;/li&gt;&lt;p class=\"answer\"&gt;Every element on a webpage is a box. Boxifying design means to \"cut\" a webpage (which is a box itself) to smaller boxes/blocks. &lt;/p&gt;  &lt;li  class=\"question\"&gt;What is the box model?&lt;/li&gt; &lt;p class=\"answer\"&gt;Box model is a box that wraps around all elements on a webpage. Every element has a content, padding, border and margin. &lt;/p&gt; &lt;/ul&gt;"})
          ]);
    });
};
