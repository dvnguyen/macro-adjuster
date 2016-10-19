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
    var age    = this.user.age || undefined;
    var height = this.user.height || undefined;
    var weight = this.user.weight || undefined;
    var sex    = this.user.sex || undefined;
    var bmr    = null;

    if (sex === 'male') {
      bmr = 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age);
    } else if (sex === 'female') {
      bmr = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
    }

    bmr = Math.round(bmr);
    return bmr;
  },

  getAdjustedBMR: function getAdjustedBMR() {
    var activityLevel = this.user.activityLevel || undefined;

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

    adjustedBMR = Math.round(adjustedBMR);
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

  setWeightTo: function setWeightTo(weight) {
    this.user.weight = weight;
    this.displayUserInfo();
  },

  setSexTo: function setSexTo(sex) {
    if (typeof sex !== 'string') {
      throw new TypeError('Expected argument is not of type string.');
    }

    sex = sex.toLowerCase();

    if (sex !== 'male' && sex !== 'female') {
      throw new Error('Function expects a string equal to `male` or `female`.');
    }

    this.user.sex = sex;
    this.displayUserInfo();
  }
};