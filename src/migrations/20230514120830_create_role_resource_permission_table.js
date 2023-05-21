/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('role_resource_permission', function(table) {
      table.increments('id').primary();
      table.integer('role_id').unsigned().notNullable().references('id').inTable('role');
      table.integer('resource_permission_id').unsigned().notNullable().references('id').inTable('resource_permission');
      table.unique(['role_id', 'resource_permission_id']);
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('role_resource_permission');
};
