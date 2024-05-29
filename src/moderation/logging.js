// File: src/moderation/logging.js

const fs = require('fs');

const LOG_FILE_PATH = 'logs.txt';

function logAction(action, user, reason) {
  const timestamp = new Date().toISOString();
  const logEntry = `${timestamp} - ${action} by ${user}: ${reason}\n`;

  fs.appendFile(LOG_FILE_PATH, logEntry, (err) => {
    if (err) {
      console.error('Error logging action:', err);
    }
  });
}

module.exports = {
  logAction,
};