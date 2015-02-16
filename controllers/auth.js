/**
 * Login
 */
exports.login = function *() {

 this.body = 'Hello World';
 this.status = 200;
};

/*
 * Logout
 */
exports.logout = function(req, res) {
    delete req.session.user_id;
    res.json({
        code: 200
    });
};
