const app = require('./app');
const Loaders = require('./Loaders/index');

Loaders.start();





app.listen(3001, () => console.log('Server is running'));