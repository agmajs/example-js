const { Command } = require('@agmajs/core')

module.exports = new Command({
  name: 'example',
  aliases: ['ex'],
  run: ({ chat }, args) => {

    // First argument passed being the name.
    chat.set(`Hello, ${args[0]}`);
  }
})