var Loading = new Phaser.Scene('Loading');

Loading.preload = function() {
  console.log('Preload of load')

  var loadingText = this.add.text(400, 375, "Loading...", {
    font: "50px Roboto",
    fill: '#ffffff'
  });

  this.spinner = this.physics.add.sprite(700, 400, 'spinner');
  this.spinner.setBounce(0.2);
  this.spinner.spinningLeft = false;
  this.spinner.body.maxAngular = 5000;
  this.spinner.body.angularAcceleration = 1000;
  this.spinner.update = function() {
    if (this.body.angularVelocity > 1200) {
      this.body.angularAcceleration = -1500;
    } else if (this.body.angularVelocity < -700) {
      this.body.angularAcceleration = 1500;
    }

  }

  this.load.on('progress', function(value) {
    console.log('Loading file');
    // Stuff to do as elements load

  });

  var _this = this;

  this.load.on('complete', function() {
    console.log('Preload Complete');
    _this.finishLoading();

  });

  console.log('Beginning load assets');
  this.load.image('boss1', 'img/object/Boss1.png');
  this.load.image('boss2', 'img/object/Boss2.png');
  this.load.image('boss3', 'img/object/Boss3.png');
  this.load.image('boss4', 'img/object/Boss4.png');
  console.log('Load finished');
};

Loading.finishLoading = function() {
  console.log('FinishLoading called');
}

Loading.update = function() {
  this.spinner.update();
}

Loading.create = function() {
  console.log('Preload Create Called');



};
