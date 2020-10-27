module.exports = (app) => {
    const user = require('../controllers/user')
    app.post('/user/create', user.create)
    app.put('/user/update/:id', user.update)
    app.get('/user/getAll', user.getAll)
    app.get('/user/getOne/:id', user.getOne)
    app.delete('/user/delete/:id', user.deleteOne)
}