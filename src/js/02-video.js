import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

// const player = new Player('handstick', {
//     id: 19231868,
//     width: 640
// });

// player.on('play', function() {
//     console.log('played the video!');
// });

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onSaveTime, 1000));

function onSaveTime(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

const startTime = Number(localStorage.getItem('videoplayer-current-time'));
console.log(typeof startTime);

player
  .setCurrentTime(startTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
