const getSleepHours = day => {
    switch (day) {
      case 'Monday':
        return 5;
      case 'Tuesday':
        return 8;
      case 'Wednesday':
        return 5;
      case 'Thursday':
        return 6;
      case 'Friday':
        return 4;
      case 'Saturday':
        return 8;
      case 'Sunday':
        return 7;
    }
  }
  
  const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  }
  /* TEST THE TWO NEW FUNCTIONS TO SEE IF THEY WORK */
  //console.log(getActualSleepHours(getSleepHours));
  //console.log(getIdealSleepHours());
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('You have received the PERFECT amount of sleep!');
    } 
    if (actualSleepHours > idealSleepHours) {
      console.log('You received more sleep than needed!');
    } 
    if (actualSleepHours < idealSleepHours) {
      console.log('You received ' + (idealSleepHours - actualSleepHours) +  ' hours(s) less sleep this week. Please get MORE rest!');
    }
  }
  calculateSleepDebt();
  