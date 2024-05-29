// File: rolemanagement.js

// Import necessary libraries and modules
const Discord = require('discord.js');

// Function to assign a role to a user
const assignRole = (user, role) => {
  user.roles.add(role)
    .then(() => console.log(`Role ${role.name} assigned to ${user.username}`))
    .catch(error => console.error(`Error assigning role: ${error}`));
};

// Function to remove a role from a user
const removeRole = (user, role) => {
  user.roles.remove(role)
    .then(() => console.log(`Role ${role.name} removed from ${user.username}`))
    .catch(error => console.error(`Error removing role: ${error}`));
};

// Function to check if a user has a specific role
const hasRole = (user, roleName) => {
  return user.roles.cache.some(role => role.name === roleName);
};

// Export functions for use in other modules
module.exports = { assignRole, removeRole, hasRole };