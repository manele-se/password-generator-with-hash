const alphaValues = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ';
const numberValues = '0123456789';
const symbolValues = '!#€%&=?@£$+-';

const createPassword = (length = 8, hasNumbers = true, hasSymbols = true) => {
  let chars = alphaValues;
  hasNumbers ? (chars += numberValues) : '' //append numbers if any
  hasSymbols ? (chars += symbolValues) : ''  //append symbols if any
  return generatePassword(length, chars);

}

const generatePassword = (length, chars) => {
  let password = '';
  //choose random characters
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;

}

module.exports = createPassword;