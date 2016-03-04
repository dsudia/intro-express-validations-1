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
    var onlyAt = (input === '@');
    var beforeAt = (input.indexOf('@') === 0);
    var dotSplit = input.split('.');
    if (input.trim().length < 1) {
      return 'Email is invalid';
    } else if (onlyAt) {
      return 'Email is invalid';
    } else if (beforeAt) {
      return 'Email is invalid';
    } else if (input.indexOf('.') === -1) {
      return 'Email is invalid';
    } else if ((dotSplit[0].length < 1) || (dotSplit[1].length < 2)) {
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
