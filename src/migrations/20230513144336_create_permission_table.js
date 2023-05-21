/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable("permissions").then((exists) => {
      // Check if permissions table exists
      console.log("permissions Table Exists", exists);
      if (!exists) {
        // If table doesn't exits create permissions table
        knex.schema
          .createTable("permissions", (table) => {
            // Add columns to permissions table
  
            table.increments("id").primary();
            table.string("name");
          })
          .then(() => {
            console.log("permissions Table Created.");
          });
      }
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("permissions");
  };
  