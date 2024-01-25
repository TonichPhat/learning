const moduleAlias = require('module-alias');
moduleAlias.addAliases(require('./module-alias').__moduleAliases);
const dotenv = require('dotenv');
dotenv.config();

const http = require('http');
const https = require('https');
const cluster = require('cluster');
const os = require('os');
const app = require('./src/app');
const db = require('@models/index');

const isEnabledCluster = process.env.APP_ENABLE_CLUSTER === 'true';
const port = process.env.PORT || 5000;
const host = process.env.HOST || '0.0.0.0';
const server = http.createServer(app);
require('@data/socket/socket.io')(server);

function printServerInformation() {
  console.log('');
  console.log('ENABLE CLUSTER \t\t:', process.env.APP_ENABLE_CLUSTER);
  console.log('');
}

if (cluster.isMaster && isEnabledCluster) {
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork();
  });
  printServerInformation();
  db.authenticate();
} else {
  server.listen(port, host, async () => {
    console.log(`\nSERVER PID ${process.pid} \t: `, `${host}:${port}`);
    if (!isEnabledCluster) {
      printServerInformation();
      db.authenticate();
    }
  });
  server.on('error', (err) => {
    console.error('server error: ', err);
  });

  process.on('uncaughtException', (e) => {
    console.error('uncaughtException: ', e);
  });

  process.on('exit', (e) => {
    console.error('exit: ', e);
  });
}
