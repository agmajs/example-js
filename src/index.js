const { Core } = require('@agmajs/core');

const Script = new Core();

const commands = require('./commands');
commands.forEach(command => Script.addCommand(command));