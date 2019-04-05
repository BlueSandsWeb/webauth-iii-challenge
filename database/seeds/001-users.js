
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').insert([
    { username: 'admin', password: 'password', department: 'it' },
    { username: 'user', password: 'pass', department: 'management' },
    { username: 'user1', password: 'pass', department: 'sales' },
    { username: 'user2', password: 'pass', department: 'sales' },
    { username: 'user3', password: 'pass', department: 'marketing' },
    { username: 'user4', password: 'pass', department: 'support' },
    { username: 'user5', password: 'pass', department: 'support' }
  ]);
};