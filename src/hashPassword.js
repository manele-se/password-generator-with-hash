const SHA256 = require('crypto-js/sha256');
const salt = 9876;

//password hashed with salt 
const calculateHash = (password) => {
  return SHA256(password + salt).toString();
}



module.exports = calculateHash;