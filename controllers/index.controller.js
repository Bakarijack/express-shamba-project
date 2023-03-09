exports.index = (req,res,next) => res.render('index')

exports.signupPageRender = (req,res,next) => res.render('sign_up', { layout: 'auth'})

exports.signupProcess = (req,res,next) => {
    console.log(req.body)

    res.json({ 'status': 'ok', 'message':'data received'})
}

exports.loginPageRender = (req,res,next) => res.render('login', { layout: 'auth'})

exports.loginProcess = (req,res,next) => {
    console.log(req.body)
    
    res.json({ 'status': 'ok', 'message':'data received'})
}