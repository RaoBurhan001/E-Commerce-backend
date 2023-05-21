/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.raw('ALTER TABLE resource DISABLE TRIGGER ALL');
  await knex('resource').del()
  await knex('resource').insert([
    {id: 1, name: 'Seller'},
    {id: 2, name: 'Super Admin'},
    {id: 3, name: 'Customer'},
    {id: 4, name: 'Product'},
    {id: 5, name: 'Order'},
    {id: 6, name: 'Store'},
    {id: 7, name: 'Categories'},
    {id: 8, name: 'Coupons'},
    {id: 9, name: 'Profile'},
  ]);
};
