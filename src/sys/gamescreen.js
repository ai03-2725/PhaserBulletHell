var gameScreen = function(game) {}

gameScreen.prototype = {
  create: function() {

    // Create some variables
    this.WIDTH = 600;
    this.HEIGHT = 800;
    this.PANEL = 200;

    // Load background
    this.bg = this.game.add.sprite(0, 0, 'genericcheckers');

    // Create scrolling background grid
    this.grid1 = this.game.add.sprite(0, 0, 'grid');
    this.grid2 = this.game.add.sprite(0, 800, 'grid');

    this.game.physics.arcade.enable(this.grid1);
    this.game.physics.arcade.enable(this.grid2);

    this.grid1.body.velocity.y = 300;
    this.grid2.body.velocity.y = 300;

    // Create player objects
    this.player = this.game.add.sprite(500, 700, 'pr1');
    this.playerRing1 = this.game.add.sprite(500, 700, 'pr1inner');
    this.playerRing2 = this.game.add.sprite(500, 700, 'pr1outer');
    this.playerTracker = this.game.add.sprite(500, 700, 'pr1tracker');

    this.game.physics.arcade.enable(this.player);
    this.game.physics.arcade.enable(this.playerRing1);
    this.game.physics.arcade.enable(this.playerRing2);
    this.game.physics.arcade.enable(this.playerTracker);

    this.player.anchor.setTo(0.5);
    this.playerRing1.anchor.setTo(0.5);
    this.playerRing2.anchor.setTo(0.5);
    this.playerTracker.anchor.setTo(0.5);

    this.playerRing1.alpha = 0;
    this.playerRing2.alpha = 0;
    this.playerTracker.alpha = 0;

    this.playerRing1.body.angularAcceleration = 1000;
    this.playerRing2.body.angularAcceleration = 1200;

    // Initialize input
    // Arrows = move
    // Space = fire
    // A = Rapid movement
    // D = Slow movement
    // S = Enable tracker
    // W = Special attacks menu

    this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
    this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    this.aKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    this.sKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
    this.dKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
    this.wKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);

    this.sKeyHeld = false;

    // Overlay panel
    this.panel = this.game.add.sprite(0, 0, 'panel');

  },

  update: function() {
    this.updatePlayer();
    this.updateGrid();
  },

  updatePlayer: function() {
    // Create temporary variables to handle change in position
    // Not using built-in velocity functions in order to allow player to clip "halfway" out of bounds
    deltaX = 0;
    deltaY = 0;

    // Build default velocity
    if (this.leftKey.isDown) {
      deltaX -= 9;
    }
    if (this.rightKey.isDown) {
      deltaX += 9;
    }
    if (this.upKey.isDown) {
      deltaY -= 9;
    }
    if (this.downKey.isDown) {
      deltaY += 9;
    }

    // Handle A/D speed modifiers
    if (this.aKey.isDown) {
      deltaX *= 1.5
      deltaY *= 1.5
    }
    if (this.dKey.isDown) {
      deltaX *= 0.5
      deltaY *= 0.5
    }

    // Handle S show tracker
    if (this.sKey.isDown) {
      if (!this.sKeyHeld) {
        this.game.add.tween(this.playerRing1).to( { alpha: 1 }, 75, "Sine.easeOut", true);
        this.game.add.tween(this.playerRing2).to( { alpha: 1 }, 75, "Sine.easeOut", true);
        this.game.add.tween(this.playerTracker).to( { alpha: 1 }, 75, "Sine.easeOut", true);
        this.sKeyHeld = true;
      }
    }
    else {
      if (this.sKeyHeld) {
        this.game.add.tween(this.playerRing1).to( { alpha: 0 }, 100, "Sine.easeIn", true);
        this.game.add.tween(this.playerRing2).to( { alpha: 0 }, 100, "Sine.easeIn", true);
        this.game.add.tween(this.playerTracker).to( { alpha: 0 }, 100, "Sine.easeIn", true);
        this.sKeyHeld = false;
      }
    }

    // Update position
    this.player.x += deltaX;
    this.player.y += deltaY;

    // Check bounds
    if (this.player.x < this.PANEL) {
      this.player.x = this.PANEL;
    }
    else if (this.player.x > this.PANEL + this.WIDTH) {
      this.player.x = this.PANEL + this.WIDT;
    }

    if (this.player.y < 0) {
      this.player.y = 0;
    }
    else if (this.player.y > this.HEIGHT) {
      this.player.y = this.HEIGHT;
    }

    // Move ring and tracker to player's position
    this.playerRing1.x = this.player.x;
    this.playerRing1.y = this.player.y;
    this.playerRing2.x = this.player.x;
    this.playerRing2.y = this.player.y;
    this.playerTracker.x = this.player.x;
    this.playerTracker.y = this.player.y;

    // Animate the rings
    if (this.playerRing1.body.angularVelocity > 500) {
      this.playerRing1.body.angularAcceleration = -300;
    } else if (this.playerRing1.body.angularVelocity < -200) {
      this.playerRing1.body.angularAcceleration = 400;
    }

    if (this.playerRing2.body.angularVelocity > 500) {
      this.playerRing2.body.angularAcceleration = -300;
    } else if (this.playerRing2.body.angularVelocity < -500) {
      this.playerRing2.body.angularAcceleration = 200;
    }

  },

  updateGrid: function() {
    // Loop the background grid
    if (this.grid1.y >= 800) {
      this.grid1.y -= 1600;
    }
    if (this.grid2.y >= 800) {
      this.grid2.y -= 1600;
    }
  }
}
