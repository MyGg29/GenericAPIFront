function Securing() {
}

Securing.prototype.check = function(req) {
	var apiKey = req.headers['x-api-key'];
	if ("testapikey" !== apiKey) {
                return false;
        } else {
                return true;
        }
}

module.exports = Securing; 
