// images
const png   = require('./png');
const jpg   = require('./jpg');
const gif   = require('./gif');

// video / media
const avi   = require('./avi');
const flv   = require('./flv');
const mkv   = require('./mkv');
const mp4   = require('./mp4');
const webm  = require('./webm');

// audio
const mid   = require('./mid');
const wav   = require('./wav');

// flash
const swf   = require('./swf');

module.exports = {
  png: png,
  jpg: jpg,
  jpeg: jpg,
  gif: gif,
  avi: avi,
  flv: flv,
  mkv: mkv,
  mp4: mp4,
  webm: webm,
  mid: mid,
  wav: wav,
  swf: swf
};
