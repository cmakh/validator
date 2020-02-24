const Validator = require('./validator')

function createModel (schema) {
  var obj = {}

  var props = Object.keys(schema)

  props.forEach(function (prop) {
    console.log('defining prop', prop)
    Object.defineProperty(obj, prop, {
      set (value) {
        schema[prop].forEach(rule => {
          console.log(rule)
          if (Validator[rule]) {
            Object.defineProperty(this, prop, { value: value })
          }
        })
      }
    })
  })

  return obj
}

module.exports = createModel