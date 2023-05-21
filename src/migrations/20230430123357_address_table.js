/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
    return knex.schema.hasTable("address").then((exists) => {
      // Check if address table exists
      console.log("address Table Exists", exists);
      if (!exists) {
        // If table doesn't exits create address table
        knex.schema
          .createTable("address", (table) => {
            // Add columns to address table
            table.increments("id").primary();
            table.string("billing_address");
            table.string("zip_code");
            table.integer("country_id").unsigned();
            table.integer("state_id").unsigned();
            // Relations with other tables
            table.foreign("country_id").references("id").inTable("countries");
            table.foreign("state_id").references("id").inTable("states");
          })
          .then(() => {
            console.log("address Table Created.");
          });
      }
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("address");
  };
  