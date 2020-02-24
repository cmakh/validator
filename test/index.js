const obj = {}

Object.defineProperty(obj, 'id', {
  get() { return this.id },
  set(value) {
    if (typeof value !== 'number') throw new TypeError('no')
    this.value = value
  }
})

obj.id = 2
console.log(obj)