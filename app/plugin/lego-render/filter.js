'use strict'

const filters = {

}

module.exports = (swig) => {
  Object.keys(filters).forEach(name => {
      swig.setFilter(name, filters[name])
  })
}
