var bmrCalculator = {
  user: {
    activityLevel: 3,
    age: 33,
    height: 72,
    sex: 'male',
    weight: 175
  },

  displayUserInfo: function displayUserInfo() {
    var user = this.user;

    for (var metric in user) {
      console.log(metric.toUpperCase() + ': ' + user[metric]);
    }
    console.log('===================');
    console.log('BMR: ' + this.getBMR());
    console.log('Adjusted BMR for Level ' + this.user.activityLevel +
     ' activity: ' + this.getAdjustedBMR(this.user.activityLevel));
  },

  getBMR: function getBMR() {
    var bmr = null;

    if (this.user.sex === 'male') {
      bmr = 66 + (6.23 * this.user.weight) + (12.7 * this.user.height) - (6.8 * this.user.age);
    } else if (this.user.sex === 'female') {
      bmr = 655 + (4.35 * this.user.weight) + (4.7 * this.user.height) - (4.7 * this.user.age);
    }

    return bmr;
  },

  getAdjustedBMR: function getAdjustedBMR(activityLevel) {
    activityLevel = activityLevel || 0;

    var bmr = this.getBMR();
    var adjustedBMR = null;

    switch(activityLevel) {
      case 1:
        adjustedBMR = bmr * 1.2;
        break;
      case 2:
        adjustedBMR = bmr * 1.375;
        break;
      case 3:
        adjustedBMR = bmr * 1.55;
        break;
      case 4:
        adjustedBMR = bmr * 1.725;
        break;
      case 5:
        adjustedBMR = bmr * 1.9;
        break;
      default:
        return bmr;
    }

    return adjustedBMR;
  },

  setActivityLevelTo: function setActivityLevelTo(level) {
    this.user.activityLevel = level;
    this.displayUserInfo();
  },

  setAgeTo: function setAgeTo(age) {
    this.user.age = age;
    this.displayUserInfo();
  },

  setHeightTo: function setHeightTo(height) {
    this.user.height = height;
    this.displayUserInfo();
  },

  setSexTo: function setSexTo(sex) {
    if (typeof sex !== 'string') {
      throw new Error('Expected argument is not of type string.');
    }

    sex = sex.toLowerCase();

    if (sex !== 'male' && sex !== 'female') {
      throw new Error('Function will only accept male or female as a parameter.');
    }

    this.user.sex = sex.toLowerCase();
    this.displayUserInfo();
  },

  setWeightTo: function setWeightTo(weight) {
    this.user.weight = weight;
    this.displayUserInfo();
  }
};