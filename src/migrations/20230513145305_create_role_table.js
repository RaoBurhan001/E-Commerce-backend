/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable("role").then((exists) => {
      // Check if role table exists
      console.log("role Table Exists", exists);
      if (!exists) {
        // If table doesn't exits create role table
        knex.schema
          .createTable("role", (table) => {
            // Add columns to role table
            table.increments("id").primary();
            table.string("name");
          })
          .then(() => {
            console.log("role Table Created.");
          });
      }
    });
  };
  
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists("role");
  };
