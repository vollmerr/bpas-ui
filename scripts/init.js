// color ref: https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
const { spawn } = require('child_process');
const ls = spawn('cmd.exe', ['/c', 'npm', 'i', '-S', 'redux-thunk@latest']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

ls.on('error', (err) => {
  console.log('Failed to start child process.');
});

// build folder structure

// inject bootstrap and state css to index (or add in Page?)

// create main App container with Page

// create redux store

// create Provider and router wrapped App entry
