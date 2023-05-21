/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable("states").then((exists) => {
    // Check if states table exists
    console.log("states Table Exists", exists);
    if (!exists) {
      // If table doesn't exits create states table
      knex.schema
        .createTable("states", (table) => {
          // Add columns to states table

          table.increments("id").primary();
          table.string("name");
        })
        .then(() => {
          console.log("states Table Created.");
        });
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("states");
};
