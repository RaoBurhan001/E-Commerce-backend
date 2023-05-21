/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.raw('ALTER TABLE permissions DISABLE TRIGGER ALL');
  await knex('permissions').del()
  await knex('permissions').insert([
    {id: 1, name: 'View'},
    {id: 2, name: 'Create'},
    {id: 3, name: 'Edit'},
    {id: 4, name: 'Delete'},
    {id: 5, name: 'Accept'},
  ]);
};
