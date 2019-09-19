const componentGenerator = require('./component/index.js');

module.exports = function(plop) {
  // Component generator
  plop.setGenerator('component', componentGenerator);
};
