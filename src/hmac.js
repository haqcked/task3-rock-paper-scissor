const crypto = require('crypto');

class HMAC {
  static generateKey() {
    return crypto.randomBytes(32).toString('hex');
  }

  static calculateHMAC(message, key) {
    const hmac = crypto.createHmac('sha256', key);
    hmac.update(message);
    return hmac.digest('hex');
  }
}

module.exports = HMAC;
