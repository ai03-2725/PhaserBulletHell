var Preload = new Phaser.Class({

  Extends: Phaser.Scene,

  initialize:

    function Preload() {
      console.log('Welcome to Preload');
      Phaser.Scene.call(this, {
        key: 'preload'
      });
    },

  preload: function() {
    var progress = this.add.graphics();

    this.load.on('progress', function(value) {

      progress.clear();
      progress.fillStyle(0xffffff, 1);
      progress.fillRect(0, 270, 800 * value, 60);

    });

    this.load.on('complete', function() {

      progress.destroy();

    });
  },

  create: function() {
    console.log('Preload Complete');
    this.scene.start('Menu');
  }

});
