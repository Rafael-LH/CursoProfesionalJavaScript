function AutoPlay() {}
AutoPlay.prototype.run = function (player) {
  if (!player.muted) { // si no esta muted
    player.muted = true; // entonces lo queremos hacer muted
  }
  player.play();
};

export default AutoPlay;
