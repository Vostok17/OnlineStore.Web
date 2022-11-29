if (process.env.REACT_APP_API_TYPE === 'web') {
  console.log('web');
  module.exports = require('./configureStore.prod');
} else {
  console.log('dev');
  module.exports = require('./configureStore.dev');
}
