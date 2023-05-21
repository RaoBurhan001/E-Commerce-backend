/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable("users").then((exists) => {
      // Check if userss table exists
      console.log("users Table Exists", exists);
      if (!exists) {
        // If table doesn't exits create userss table
        knex.schema
          .createTable("users", (table) => {
            // Add columns to userss table
  
            table.increments("id").primary();
            table.string("name");
            table.string("email").notNullable().unique();
            table.integer("address_id").unsigned();
            table.string("password_hash");
            table.string("salt");
            table.string("image_url");
            table.timestamp("created_at").defaultTo(knex.fn.now());
            table.timestamp("updated_at").defaultTo(knex.fn.now());
            // Relations with other tables
            table.foreign("address_id").references("id").inTable("address");
          })
          .then(() => {
            console.log("users Table Created.");
          });
      }
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("users");
  };
  