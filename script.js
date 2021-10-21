const ul = document.querySelector("[data-js='videos']");

const times = [...ul.children].map((item) => {

  return item.attributes['data-time'].value;

});

const seconds = times.reduce((acc, item) => {

  let array = item.split(':');
  return acc + (Number(array[0]) * 60) + (Number(array[1]));

}, 0);

function secondsToTimeString(sec) {

  return new Date(sec * 1000).toISOString().substring(11,19);

}

console.log(secondsToTimeString(seconds));