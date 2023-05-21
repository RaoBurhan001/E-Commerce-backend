/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable("countries").then((exists) => {
    // Check if countries table exists
    console.log("countries Table Exists", exists);
    if (!exists) {
      // If table doesn't exits create countries table
      knex.schema
        .createTable("countries", (table) => {
          // Add columns to countries table

          table.increments("id").primary();
          table.string("name");
        })
        .then(() => {
          console.log("countries Table Created.");
        });
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("countries");
};
