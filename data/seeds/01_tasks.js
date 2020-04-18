
exports.seed = function(knex) {
  return knex('tasks').truncate()
    .then(function () {
      return knex('tasks').insert([
        {id: 1, description: 'Vacuum', notes: 'vacuum floors', completed: false, project_id: 1},
        {id: 2, description: 'Complete Assignment', notes: 'do not forget retro', completed: false, project_id: 2}
        {id: 3, description: 'Fold laundry', notes: 'put away after folding', completed: false, project_id: 3}
      ]);
    });
};
