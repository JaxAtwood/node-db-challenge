
exports.seed = function(knex) {
  return knex('resources').truncate()
    .then(function () {
      return knex('resources').insert([
        {id: 1, name: "vacuum", description: "To be used with floor cleaning"},
        {id: 2, name: "mop", description: "To be used after the vacuum"},
        {id: 3, name: "laptop", description: "To complete assignment and turn in retro"},
        {id: 4, name: "ironing board", description: "To iron clothes"},
        {id: 5, name: "computer mouse", description: "To click on GUI's"},
        {id: 6, name: "swiffer duster", description: "TO dust some junk"},
      ]);
    });
};
