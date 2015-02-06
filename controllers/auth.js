/**
 * Login
 */
exports.login = function(req, res) {
	
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
