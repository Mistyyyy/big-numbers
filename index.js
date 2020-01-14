if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/big-numbers.min.js');
} else {
  module.exports = require('./dist/big-numbers.js');
}