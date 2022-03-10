// Your code here.


// getFirstName
// returns the value of the firstName property of the given person object
function getFirstName(obj){
  return obj.firstName;
}

// getLastName
// returns the value of the lastName property of the given person object
function getLastName(obj){
  return obj.lastName
}

// getFullName
// returns the value of the firstName property plus the lastName property with a space in the middle for the given person object
function getFullName(obj){
  return obj.firstName + " " + obj.lastName;
}

// setFirstName
// changes the value of the firstName property of the given person object to the given value
function setFirstName(user, newFirstName){
  return user.firstName = newFirstName;
}

// setAge
// changes the value of the age property of the given person onject to the given value
function setAge(user, newAge){
  return user.age = newAge;
}

// giveBirthday
// increments by 1 the age property of the given person object,
// or gives them an age of 1 if they don't have that property
function giveBirthday(user, age){
  return user.age++;
}

// marry
// sets the marital status of both given people to `true`
// and sets each person's `spouseName` property to be the full name of the other
function marry(person1, person2){
  person1.married = true;
  person2.married = true;

  person1.spouseName = getFullName(person2);
  person2.spouseName = getFullName(person1);
}

// divorce
// changes the marital status to `false` and removes the `spouseName` property from both given people
function divorce(person1, person2){
  person1.married = false;
  person2.married = false;

  person1.spouseName;
  person2.spouseName;
}




// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
