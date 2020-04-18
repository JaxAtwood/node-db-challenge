
exports.seed = function(knex) {
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        {id: 1, name: 'Clean House', description: 'Clean the apartment', completed: false},
        {id: 2, name: 'Do Homework', description: "complete today's assignment", completed: false},
        {id: 3, name: 'Fold Laundry', description: 'Laundry', completed: false}
      ]);
    });
};
