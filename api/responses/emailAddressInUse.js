
module.exports = function emailAddressInUse() {

	// Get access to 'res'
	//(Since the arguments are up to us)
	var res = this.res;

	return res.send(409, 'Email address is already taken by another user');
};
