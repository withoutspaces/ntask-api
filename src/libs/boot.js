module.exports = app => {
  app.listen(app.get('port'), () => {
    console.log(`NTASK API - porta ${app.get('port')}`)
  })
}
