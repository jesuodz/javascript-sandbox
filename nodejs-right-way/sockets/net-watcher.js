'use strict';
const
  fs = require('fs'),
  net = require('net'),

  filename = process.argv[2],

  server = net.createServer( (conn) => {

    console.log('Subscriber connected.');
    conn.write("Now watching '" + filename + "' for changes...\n");

    let watcher = fs.watch(filename, () => {
      conn.write("File '" + filename + "' changed: " + Date.now() + "\n");
    });

    conn.on('close', () => {
      console.log('Subscriber disconnected.');
      watcher.close();
    });

  });

if (!filename) throw Error('No target filename was specified.');

server.listen(5432, () => console.log('Listening for suscribers...'));