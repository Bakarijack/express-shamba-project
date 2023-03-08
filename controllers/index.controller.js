exports.index = (req,res,next) => res.render('index')

exports.signup = (req,res,next) => res.render('sign_up', { layout: 'auth'})