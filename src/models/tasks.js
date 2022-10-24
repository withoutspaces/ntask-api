module.exports = app => {
  return {
    findAll: (params, callback) => {
      return callback([
        { title: 'Almoçar', role: 'to-do' },
        { title: 'Consertar o PC', role: 'em andamento' }
      ])
    }
  }
}
