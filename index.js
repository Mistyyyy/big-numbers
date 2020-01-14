if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/lnam.min.js');
} else {
  module.exports = require('./dist/lnam.js');
}