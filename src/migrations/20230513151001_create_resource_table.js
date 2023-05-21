/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable("resource").then((exists) => {
      // Check if resource table exists
      console.log("resource Table Exists", exists);
      if (!exists) {
        // If table doesn't exits create resource table
        knex.schema
          .createTable("resource", (table) => {
            // Add columns to resource table
            table.increments("id").primary();
            table.string("name");
          })
          .then(() => {
            console.log("resource Table Created.");
          });
      }
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists("resource");
  };
