var Loading = new Phaser.Scene('Loading');

Loading.preload = function() {
  console.log('Preload of load')
  var progress = this.add.graphics();

  var loadingText = this.add.text(400, 375, "Loading...", {
    font: "50px Roboto",
    fill: '#ffffff'
  });

  this.load.on('progress', function(value) {

    // Stuff to do as elements load

  });

  this.load.on('complete', function() {

    // Stuff to do after load is done

  });

  // Load assets here!

};

Loading.update = function() {
  this.spinner.update();
}

Loading.create = function() {
  console.log('Preload Complete');

  this.spinner = this.physics.add.sprite(700, 400, 'spinner');
  this.spinner.setBounce(0.2);
  this.spinner.spinningLeft = false;
  this.spinner.body.maxAngular = 5000;
  this.spinner.body.angularAcceleration = 1000;
  this.spinner.update = function() {
    if (this.body.angularVelocity > 1200) {
      this.body.angularAcceleration = -1500;
    }
    else if (this.body.angularVelocity < - 700) {
      this.body.angularAcceleration = 1500;
    }

  }

};
