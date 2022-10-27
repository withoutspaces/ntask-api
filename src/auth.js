const passport = require('passport')
const { Strategy, ExtractJwt } = require('passport-jwt')

module.exports = app => {
  const Users = app.models.users
  const { jwt } = require('./config')

  const params = {
    secretOrKey: jwt.secret,
    jwtFromRequest: ExtractJwt.fromHeader('Authorization')
  }

  passport.use(
    new Strategy(params, async (payload, done) => {
      try {
        const { id } = payload //
        const attributes = ['id', 'email']
        const options = { attributes }
        const user = await Users.findByPk(id, options)
        done(null, user)
      } catch (error) {
        done(err, null)
      }
    })
  )

  return {
    initialize: () => passport.initialize(),
    authenticate: () => passport.authenticate('jwt', jwt.options)
  }
}
