var Preload = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Preload ()
    {
        Phaser.Scene.call(this, { key: 'preload' });
    },

    preload: function ()
    {
      var progress = this.add.graphics();

      this.load.on('progress', function (value) {

          progress.clear();
          progress.fillStyle(0xffffff, 1);
          progress.fillRect(0, 270, 800 * value, 60);

      });

      this.load.on('complete', function () {

          progress.destroy();

      });
    },

    create: function ()
    {
        this.add.sprite(400, 300, 'face').setAlpha(0.2);

        this.input.once('pointerdown', function () {

            console.log('Preload Complete');

            this.scene.start('sceneB');

        }, this);
    }

});
