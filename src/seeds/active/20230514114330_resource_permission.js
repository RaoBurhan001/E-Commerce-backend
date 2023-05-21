/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
/** you can use foreign key contraint if you want to remove the data  */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.raw('ALTER TABLE resource_permission DISABLE TRIGGER ALL');
  await knex('resource_permission').del()
  await knex('resource_permission').insert([
        { id: 1, permission_id: 1, resource_id: 1, name: 'View Seller', code: 'view_seller' },
        { id: 2, permission_id: 2, resource_id: 1, name: 'Create Seller', code: 'create_seller' },
        { id: 3, permission_id: 3, resource_id: 1, name: 'Edit Seller', code: 'edit_seller' },
        { id: 4, permission_id: 4, resource_id: 1, name: 'Delete Seller', code: 'delete_seller' },
        { id: 5, permission_id: 1, resource_id: 2, name: 'View Super Admin', code: 'view_super_admin' },
        { id: 6, permission_id: 2, resource_id: 2, name: 'Create Super Admin', code: 'create_super_admin' },
        { id: 7, permission_id: 3, resource_id: 2, name: 'Edit Super Admin', code: 'edit_super_admin' },
        { id: 8, permission_id: 4, resource_id: 2, name: 'Delete Super Admin', code: 'delete_super_admin' },
        { id: 9, permission_id: 1, resource_id: 3, name: 'View Customer', code: 'view_customer' },
        { id: 10, permission_id: 2, resource_id: 3, name: 'Create Customer', code: 'create_customer' },
        { id: 11, permission_id: 3, resource_id: 3, name: 'Edit Customer', code: 'edit_customer' },
        { id: 12, permission_id: 4, resource_id: 3, name: 'Delete Customer', code: 'delete_customer' },
        { id: 13, permission_id: 1, resource_id: 4, name: 'View Product', code: 'view_product' },
        { id: 14, permission_id: 2, resource_id: 4, name: 'Create Product', code: 'create_product' },
        { id: 15, permission_id: 3, resource_id: 4, name: 'Edit Product', code: 'edit_product' },
        { id: 16, permission_id: 4, resource_id: 4, name: 'Delete Product', code: 'delete_product' },
        { id: 17, permission_id: 1, resource_id: 5, name: 'View Order', code: 'view_order' },
        { id: 18, permission_id: 2, resource_id: 5, name: 'Create Order', code: 'create_order' },
        { id: 19, permission_id: 3, resource_id: 5, name: 'Edit Order', code: 'edit_order' },
        { id: 20, permission_id: 4, resource_id: 5, name: 'Delete Order', code: 'delete_order' },
        { id: 21, permission_id: 1, resource_id: 6, name: 'View Store', code: 'view_store' },
        { id: 22, permission_id: 2, resource_id: 6, name: 'Create Store', code: 'create_store' },
        { id: 23, permission_id: 3, resource_id: 6, name: 'Edit Store', code: 'edit_store' },
        { id: 24, permission_id: 4, resource_id: 6, name: 'Delete Store', code: 'delete_store' },
        { id: 25, permission_id: 1, resource_id: 7, name: 'View Categories', code: 'view_categories' },
        { id: 26, permission_id: 2, resource_id: 7, name: 'Create Categories', code: 'create_categories' },
        { id: 27, permission_id: 3, resource_id: 7, name: 'Edit Categories', code: 'edit_categories' },
        { id: 28, permission_id: 4, resource_id: 7, name: 'Delete Categories', code: 'delete_categories' },
        { id: 29, permission_id: 1, resource_id: 8, name: 'View Coupons', code: 'view_coupons' },
        { id: 30, permission_id: 2, resource_id: 8, name: 'Create Coupons', code: 'create_coupons' },
        { id: 31, permission_id: 3, resource_id: 8, name: 'Edit Coupons', code: 'edit_coupons' },
        { id: 32, permission_id: 4, resource_id: 8, name: 'Delete Coupons', code: 'delete_coupons' },
        { id: 33, permission_id: 1, resource_id: 9, name: 'View Profile', code: 'view_profile' },
        { id: 34, permission_id: 2, resource_id: 9, name: 'Create Profile', code: 'create_profile' },
        { id: 35, permission_id: 3, resource_id: 9, name: 'Edit Profile', code: 'edit_profile' },
        { id: 36, permission_id: 4, resource_id: 9, name: 'Delete Profile', code: 'delete_profile' },
      
  ]);
};
