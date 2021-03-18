export const getGreetingTime = (currentTime) => {
  if (!currentTime || !currentTime.isValid()) {
    return 'Hello';
  }

  const splitAfternoon = 12; // 24hr time to split the afternoon
  const splitEvening = 17; // 24hr time to split the evening
  const currentHour = parseFloat(currentTime.format('HH'));

  if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
    // Between 12 PM and 5PM
    return 'Good afternoon';
  } else if (currentHour >= splitEvening) {
    // Between 5PM and Midnight
    return 'Good evening';
  }
  // Between dawn and noon
  return 'Good morning';
};

// const data = [
//     [22, 'Working late'],
//     [18, 'Good evening'],
//     [12, 'Good afternoon'],
//     [5,  'Good morning'],
//     [0,  'Whoa, early bird']
// ],
//  hr = new Date().getHours();

// for (var i = 0; i < data.length; i++) {
//     if (hr >= data[i][0]) {
//         console.log(data[i][1])
//         break;
//     }
// }
