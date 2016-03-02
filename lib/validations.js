module.exports = {
  nameIsNotBlank: function (input) {
    if (!input.trim()) {
      return 'Name cannot be blank';
    } else {
      return '';
    }
  },
  emailIsValid: function (input) {
    if (!input.trim()) {
      return 'Email is invalid';
    } else {
      return '';
    }
  },
  phoneIsValid: function (input) {
    if (!input.trim()) {
      return 'Phone number is invalid';
    }
  }
};
