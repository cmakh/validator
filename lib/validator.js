var Validator = function() {}

Validator.isString = function (value) {
  return typeof value === "string"
}

module.exports = Validator