module.exports = {
  nameIsNotBlank: function (input) {
    if (!input.trim()) {
      return 'Name cannot be blank';
    } else {
      return '';
    }
  },
  emailIsValid: function (input) {
    var noBefore = (input.indexOf('@') === 0);
    var onlyAt = (input === 'a');
    var after = input.substring(input.indexOf('@'));
    var afterLength = (after.length > 1);
    var between = after.split('.');
    if (!input.trim()) {
      return 'Email is invalid';
    } else {
      return '';
    }
  },
  phoneIsValid: function (input) {
    console.log(input);
    var numLength = input.length;
    console.log(numLength);
    if (numLength > 10) {
      var justNums = input.replace(/[-]g/, '');
      console.log(justNums);
      numLength = justNums.length;
    }
    console.log(numLength);
    if (numLength !== 10) {
      return 'Phone number is invalid';
    } else {
      return '';
    }
  }
};
