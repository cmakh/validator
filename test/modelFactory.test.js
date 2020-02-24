const modelFactory = require('../lib/modelFactory')

const schema = {
  id: ['isString']
}

const model = modelFactory(schema)

model.id = 3
model.id = 'sw'

console.log(model)