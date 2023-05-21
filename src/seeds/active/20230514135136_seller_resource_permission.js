/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.raw('ALTER TABLE role_resource_permission DISABLE TRIGGER ALL');
  await knex('role_resource_permission').del().where({role_id:3})
  await knex('role_resource_permission').insert([
    { role_id: 3, resource_permission_id: 13 },
    { role_id: 3, resource_permission_id: 14 },
    { role_id: 3, resource_permission_id: 15 },
    { role_id: 3, resource_permission_id: 16 },
    { role_id: 3, resource_permission_id: 17 },
    { role_id: 3, resource_permission_id: 20 },
    { role_id: 3, resource_permission_id: 21 },
    { role_id: 3, resource_permission_id: 22 },
    { role_id: 3, resource_permission_id: 23 },
    { role_id: 3, resource_permission_id: 24 },
    { role_id: 3, resource_permission_id: 25 },
    { role_id: 3, resource_permission_id: 29 }, 
    { role_id: 3, resource_permission_id: 33 },
    { role_id: 3, resource_permission_id: 34 },
    { role_id: 3, resource_permission_id: 35 },
    { role_id: 3, resource_permission_id: 36 }
  ]);
};
