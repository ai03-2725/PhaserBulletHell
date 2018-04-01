// Boot - The first called scene.
// Loads the bare minimum for Preload to run.

var Boot = new Phaser.Scene('Boot');

Boot.preload = function() {

  // Note - Boot is NOT the place to load tons of assets.
  // Only load stuff needed to make preload (The loading screen) run.

  this.load.image('spinner', 'img/system/Spinner.png');
  this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
};

Boot.create = function() {

  console.log('Transferring to Load');

  this.scene.start('Loading');
};
