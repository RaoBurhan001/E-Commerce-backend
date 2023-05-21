/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.raw('ALTER TABLE role DISABLE TRIGGER ALL');
  await knex('role').del()
  await knex('role').insert([
    {id: 1, name: 'customer'},
    {id: 2, name: 'guest'},
    {id: 3, name: 'seller'},
    {id: 4, name: 'admin'}
  ]);
};
