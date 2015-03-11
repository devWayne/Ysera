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
exports.logout = function *() {
    delete this.session.userinfo;
    this.status=200;
    this.body={
        code:   200
    };
};
