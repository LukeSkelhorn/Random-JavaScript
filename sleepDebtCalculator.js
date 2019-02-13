function getSleepHours(day) {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 6;
  } else if (day === 'wednesday') {
    return 7;
  } else if (day === 'thursday') {
    return 9;
  } else if (day === 'friday') {
    return 4;
  } else if (day === 'saturday') {
    return 3;
  } else if (day === 'sunday') {
    return 10;
  }
}

function getActualSleepHours() {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}

function getIdealSleepHours() {
  const idealHours = 8;
  
  return idealHours * 7;
}

function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours) {
    console.log('Perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('Got more sleep than needed');
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`You got ${idealSleepHours - actualSleepHours} hours less Sleep than you needed this Week, Get some rest`);
  }
}

calculateSleepDebt();