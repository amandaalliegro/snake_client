let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data',(key) => handleUserInput(key))
  
    /*stdin.on('data', (key) => {
      // \u0003 maps to ctrl+c input
   
    }*/
    return stdin;
}


const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w'){
  connection.write('Move: up');
} else if (key === 'd'){
  connection.write('Move: right');
} else if (key === 'a'){
  connection.write('Move: left');
} else if (key === 's'){
  connection.write('Move: down');
} else if (key === 'l') {
  connection.write("Say: Mooooooove!");
} 


};

// Stores the active TCP connection object.


module.exports = {setupInput};