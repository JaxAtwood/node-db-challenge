
exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
        tbl.increments();
        tbl.string("name", 128)
            .notNullable();
        tbl.text("description")
        tbl.boolean("completed")
            .default("false");
    })
    .createTable("tasks", tbl => {
        tbl.increments();
        tbl.string("description")
            .notNullable();
        tbl.text("notes")
        tbl.boolean("completed")
            .default("false");
        tbl.integer("project_id")
            .references("id")
            .inTable("projects")
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
            .notNullable();
    })
    .createTable("resources", tbl => {
        tbl.increments();
        tbl.string("name")
            .unique()
            .notNullable();
        tbl.text("description")
    })
    .createTable("project-resources", tbl => {
        tbl.integer("project_id")
            .notNullable()
            .references("id")
            .inTable("projects")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        tbl.integer("resource_id")
            .notNullable()
            .references("id")
            .inTable("resources")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        tbl.primary(["project_id", "resource_id"])
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("projects-resources")
        .dropTableIfExists("resources")
        .dropTableIfExists("tasks")
        .dropTableIfExists("projects")
};
