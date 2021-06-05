
const crypto = require('crypto');
const keys = require('./config/keys')

const resHandler = (res, code, data={}, message) => {
    return res.status(code).json({
        data,
        message,
        code
    })
}


module.exports.errorHandlerHandler = (req, res, next) => {
    return res.status(err.status || 500).json({ms:'sdf'})
}

module.exports.encryptString = (str) => {
    const iterations = 50;
    const keylen = 16;
  
    const derivedKey = crypto.pbkdf2Sync(
        str,
      keys.salt,
      iterations,
      keylen,
      'sha512',
    );
    const pw = Buffer.from(derivedKey, 'binary').toString('hex');
  
    return pw;
  };

  module.exports.compareString = (string, hashString) => {
    const newStr = this.encryptString(string);
    if (newStr === hashString) return true;
    return false;
  };

module.exports.resHandler = resHandler;
