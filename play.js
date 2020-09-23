const net = require('net');
const connect = require('./client')
/**
 * Establishes connection with the game server
 */

 /**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', (key) => {
    // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
    process.stdout.write('.');
  });
  return stdin;
}


console.log('Connecting ...');
connect();

