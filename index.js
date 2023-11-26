const os = require('os');
const sum = require('./sum');
console.log(sum(1, 3));

console.log('Información del Sistema');
console.log('-----------------------');
console.log('Sistema operativo : ', os.platform()); // Corrected: os.platform()
console.log('Versión del sistema : ', os.release());
console.log('Arquitectura : ', os.arch());
console.log('CPUs : ', os.cpus());
console.log('Memoria libre : ', os.freemem() / 1024 / 1024);
console.log('Memoria Total :  ', os.totalmem() / 1024 / 1024);

