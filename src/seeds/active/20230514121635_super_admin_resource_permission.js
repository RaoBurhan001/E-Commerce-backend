/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.raw('ALTER TABLE role_resource_permission DISABLE TRIGGER ALL');
  await knex('role_resource_permission').del().where({role_id : 4})
  await knex('role_resource_permission').insert([
    { role_id: 4, resource_permission_id: 1 },
    { role_id: 4, resource_permission_id: 2 },
    { role_id: 4, resource_permission_id: 3 },
    { role_id: 4, resource_permission_id: 4 },
    { role_id: 4, resource_permission_id: 5 },
    { role_id: 4, resource_permission_id: 6 },
    { role_id: 4, resource_permission_id: 7 },
    { role_id: 4, resource_permission_id: 8 },
    { role_id: 4, resource_permission_id: 9 },
    { role_id: 4, resource_permission_id: 10 },
    { role_id: 4, resource_permission_id: 11 },
    { role_id: 4, resource_permission_id: 12 },
    { role_id: 4, resource_permission_id: 13 },
    { role_id: 4, resource_permission_id: 14 },
    { role_id: 4, resource_permission_id: 15 },
    { role_id: 4, resource_permission_id: 16 },
    { role_id: 4, resource_permission_id: 17 },
    { role_id: 4, resource_permission_id: 18 },
    { role_id: 4, resource_permission_id: 19 },
    { role_id: 4, resource_permission_id: 20 },
    { role_id: 4, resource_permission_id: 21 },
    { role_id: 4, resource_permission_id: 22 },
    { role_id: 4, resource_permission_id: 23 },
    { role_id: 4, resource_permission_id: 24 },
    { role_id: 4, resource_permission_id: 25 },
    { role_id: 4, resource_permission_id: 26 },
    { role_id: 4, resource_permission_id: 27 },
    { role_id: 4, resource_permission_id: 29 },
    { role_id: 4, resource_permission_id: 30 },
    { role_id: 4, resource_permission_id: 31 },
    { role_id: 4, resource_permission_id: 32 },
    { role_id: 4, resource_permission_id: 33 },
    { role_id: 4, resource_permission_id: 34 },
    { role_id: 4, resource_permission_id: 35 },
    { role_id: 4, resource_permission_id: 36 },
  ]);
};
