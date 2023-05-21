/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable("resource_permission").then((exists) => {
      // Check if resource_permission table exists
      console.log("resource_permission Table Exists", exists);
      if (!exists) {
        // If table doesn't exits create resource_permission table
        knex.schema
          .createTable("resource_permission", (table) => {
            // Add columns to resource_permission table
            table.increments("id").primary();
            table.integer("permission_id").unsigned().notNullable().references("id").inTable("permissions")
            table.integer("resource_id").unsigned().notNullable().references("id").inTable("resource")
            table.string("name");
            table.string("code");
          })
          .then(() => {
            console.log("resource_permission Table Created.");
          });
      }
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("resource_permission");
};
