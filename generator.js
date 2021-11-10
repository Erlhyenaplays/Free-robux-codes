function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(9999999999));
//for 10-digit codes
console.log(getRandomInt(999999999999));
//for 12-digit codes
