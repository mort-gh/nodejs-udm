const os = require('os');

console.log('платформа ос -> ', os.platform());
console.log('архитектура процессора -> ', os.arch());
console.log('процессор -> ', os.cpus());
console.log('свободная память -> ', os.freemem());
console.log('всего памяти -> ', os.totalmem());
console.log('корневая директория ос -> ', os.homedir());
console.log('время работы ос -> ', os.uptime());
