var Loading = new Phaser.Scene('Loading');

Loading.preload = function() {
  console.log('Preload of load')
  var progress = this.add.graphics();

  var loadingText = this.add.text(400, 375, "Loading...", {
    font: "50px Roboto",
    fill: '#ffffff'
  });

  this.add.image(700, 400, 'spinner');

  this.load.on('progress', function(value) {

    // Stuff to do as elements load

  });

  this.load.on('complete', function() {

    // Stuff to do after load is done

  });

  // Load assets here!

};

Loading.update = function() {

}

Loading.create = function() {
  console.log('Preload Complete');

};
