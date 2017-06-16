function checkUsersValid(goodUsers) {
  return function (someUsers) {
    return someUsers.every(function (user) { 
      return goodUsers.some(function (validUser) {  
        return user.id === validUser.id;
      });
    });
  };
}

module.exports = checkUsersValid;