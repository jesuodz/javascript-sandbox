const 
  fs = require('fs'),
  stream = fs.createReadStream(process.argv[2]);

stream.on('data', (chunk) => {
  process.stdout.write(chunk);
});
stream.on('error', (error) => {
  process.stderr.write("ERROR: " + error.message + "\n");
});
