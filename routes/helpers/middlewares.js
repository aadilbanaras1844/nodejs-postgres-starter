
class CustomError extends Error {
    constructor({ message, code = 500 }) {
      super(message);
      this.message = message;
      this.status = code;
    }
  }
  const jwt = require('jsonwebtoken');

  var cache = require('memory-cache');
var memCache = new cache.Cache();
const keys = require('../../config/keys')

const { resHandler } = require('../../utils')

const validationMiddleware = (validationObject, isGet = false) => (req, res, next) => {
    const body = isGet ? req.query : req.body;
    const { error } = validationObject.validate(body);
    if (error) {
      return next(new CustomError({
        message: error.message,
        code: 403
      }));
    }
    return next();
  };


  const cacheResult = (duration) => (req, res, next) => {
    console.log('this called')
    const key = `__express__${req.originalUrl}` || req.url;
    const cacheContent = memCache.get(key);
    if (cacheContent) {
      return resHandler(res, 200, JSON.parse(cacheContent), 'Loading from cache')
    }
    res.sendResponse = res.send;
    res.send = (body) => {
      const tmp = JSON.parse(body);
      if (tmp.data) {
        memCache.put(key, JSON.stringify(tmp.data), duration * 1000);
      }
      res.sendResponse(body);
    };
  
    next();
  };
  

  const authMiddleware = (req, res, next) => {
    if (!req.headers.authorization) {
      return next(new CustomError({
        message: 'token needed',
        code: 401
      }));
    }
    const token = req.headers.authorization;

    try {
      const decodedToken = jwt.verify(token, keys.jwtSecret);
      return next();
    } catch (error) {
      return next(new CustomError({
        message: 'invalid token',
        code: 401
      }))
    }
    
  };
  

  module.exports.valMW = validationMiddleware;
  module.exports.cacheResult = cacheResult;
  module.exports.authMiddleware = authMiddleware;

  
  