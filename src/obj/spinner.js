Spinner = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, 'spinner');
  game.physics.arcade.enable(this);
  this.body.maxAngular = 5000;
  this.body.angularAcceleration = 1500;
}

Spinner.prototype = Object.create(Phaser.Sprite.prototype);
Spinner.prototype.constructor = Spinner;

Spinner.prototype.update = function() {
  if (this.body.angularVelocity > 1200) {
    this.body.angularAcceleration = -1500;
  } else if (this.body.angularVelocity < -700) {
    this.body.angularAcceleration = 1500;
  }
}
