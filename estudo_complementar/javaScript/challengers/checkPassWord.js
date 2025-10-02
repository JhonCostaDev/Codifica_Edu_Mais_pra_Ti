// Given are two strings password and password_repeat. Check if the password is secure by the following critera:
// - both passwords must match
// - password must be at least 20 chars

// Return true only if all criteria are met, otherwise return false.

function checkPassword(password, password_repeat) {
    if (password === password_repeat && password.length >= 20) {
        return true;
    } else {
        return false;
    }
}

let a = 'goiaba';
let b = 'goiaba';

console.log(checkPassword('omvdsse', 'omvdsse'));


console.log(checkPassword(
    'gizzard-fiesta-dispel-disgorge-never-chisel',
    'gizzard-fiesta-dispel-disgorge-never-chisel'
))

console.log(checkPassword(
  'HUIFDSJHKSADN',
  'HUIFDSJHKSADN'
))

console.log(checkPassword(
  'JoFDd#0MY6Ad4',
  'JoFDd#0MY6Ad4'
))