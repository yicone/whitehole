module.exports.up = q => {
  return q.CreateCollection({ name: 'Engines' })
}

module.exports.down = q => {
  return q.Delete(q.Collection('Engines'))
}