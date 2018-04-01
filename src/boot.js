var Boot = new Phaser.Class({

  Extends: Phaser.Scene,

  initialize:

    function Boot() {
      console.log('Boot called');
      Phaser.Scene.call(this, {
        key: 'boot'
      });
    },

  preload: function() {

    this.load.image('loadingBar', 'img/system/loading.png');
    game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
  },

  create: function() {
    console.log('Transferring to Preload');

    this.scene.start('Preload');
  }

});
