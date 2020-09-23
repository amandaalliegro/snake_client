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

module.exports = {setupInput};