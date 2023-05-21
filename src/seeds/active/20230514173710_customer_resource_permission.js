/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.raw('ALTER TABLE role_resource_permission DISABLE TRIGGER ALL');
  await knex('role_resource_permission').del().where({role_id:1})
  await knex('role_resource_permission').insert([
    { role_id: 1, resource_permission_id: 1 },
    { role_id: 1, resource_permission_id: 9 },
    { role_id: 1, resource_permission_id: 10 },
    { role_id: 1, resource_permission_id: 11 },
    { role_id: 1, resource_permission_id: 12 },
    { role_id: 1, resource_permission_id: 13 },
    { role_id: 1, resource_permission_id: 17 },
    { role_id: 1, resource_permission_id: 18 },
    { role_id: 1, resource_permission_id: 19 },
    { role_id: 1, resource_permission_id: 20 },
    { role_id: 1, resource_permission_id: 25 },
    { role_id: 1, resource_permission_id: 29 },
    { role_id: 1, resource_permission_id: 33 },
    { role_id: 1, resource_permission_id: 34 },
    { role_id: 1, resource_permission_id: 35 },
    { role_id: 1, resource_permission_id: 36 }
  ]);
};
