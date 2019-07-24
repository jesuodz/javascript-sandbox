const 
  fs = require('fs');
  dirname = process.argv[2];

if (!dirname) throw Error("Must specified a directory name");

fs.mkdir(dirname, (err) => {
  if (err) throw err;
});
