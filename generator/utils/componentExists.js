/**
 * componentExists
 *
 * Check whether the given component exists in the components directory
 */

const fs = require("fs")
const path = require("path")

const components = fs.readdirSync(path.join(__dirname, "../../src/components"))
function componentExists(comp) {
  return components.indexOf(comp) >= 0
}

module.exports = componentExists
