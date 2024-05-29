// File: src/bot/index.js

const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./commands');

// Import other modules
const { automoderation } = require('../moderation/automoderation');
const { moderationActions } = require('../moderation/moderationactions');
const { customization } = require('../moderation/customization');
const { logging } = require('../moderation/logging');
const { antiraid } = require('../integrations/antiraid');
const { reputation } = require('../integrations/reputation');
const { scheduler } = require('../utils/scheduler');
const { roleManagement } = require('../utils/rolemanagement');
const { commandInteraction } = require('../utils/commandinteraction');
const { machineLearning } = require('../enhancements/machinelearning');
const { reportingSystem } = require('../enhancements/reportingsystem');
const { profanityFilter } = require('../enhancements/profanityfilter');
const { userReputation } = require('../enhancements/userreputation');
const { dashboard } = require('../enhancements/dashboard');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    // Initialize bot functionalities
    automoderation(client);
    moderationActions(client);
    customization(client);
    logging(client);
    antiraid(client);
    reputation(client);
    scheduler(client);
    roleManagement(client);
    commandInteraction(client);
    machineLearning(client);
    reportingSystem(client);
    profanityFilter(client);
    userReputation(client);
    dashboard(client);
});

client.login(token);