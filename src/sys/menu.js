var menu = function(game) {};

menu.prototype = {
  create: function() {

    // Currently selected menu option
    this.selectedOption = 0;

    // The menu text height
    this.menuTextHeight = 58;

    // Background images
    this.back = this.game.add.sprite(0, 0, "blankblack");
    this.menuBG = this.game.add.sprite(0, 0, "genericcheckers");
    this.gameTitle = this.game.add.sprite(0, 0, "mainmenu");
    this.menuBG.alpha = 0;
    this.gameTitle.alpha = 0;

    this.game.add.tween(this.menuBG).to( { alpha: 1 }, 1000, "Sine.easeOut", true);
    this.game.add.tween(this.gameTitle).to( { alpha: 1 }, 1000, "Sine.easeOut", true);


    // Spinning selector for options
    // See spinner.js
    this.selector = new Spinner(this.game, 55, 476);
    this.selector.anchor.setTo(0.5, 0.5);
    // inMotion initialized as true, set to false once main menu fades in
    this.selector.inMotion = true;
    this.game.add.existing(this.selector);
    this.selector.alpha = 0;
    tween = this.game.add.tween(this.selector).to( { alpha: 1 }, 1000, "Sine.easeOut", true);
    tween.onComplete.add(this.enableKeyInput, this);

    // Arrow keys control selector
    this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
    this.upKey.onDown.add(this.moveSelector, this, 0, true);
    this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    this.downKey.onDown.add(this.moveSelector, this, 0, false);

    // Space to select
    this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    this.spaceKey.onDown.add(this.select, this, 0, false);

  },

  moveSelector: function(key, bool) {
    // If in tween, cancel
    if (this.selector.inMotion) {
      return;
    }

    // The onDown methods send a true/false depending on whether up or down was pressed
    if (bool) {
      if (this.selectedOption > 0) {
        // 1. Disable key input to prevent spam and "tween whilst tween" and coordinates messing up
        // 2. Generate tween to next item
        // 3. Add onComplete event to re-enable key input after tween is done
        // 4. Change currently selected item

        this.disableKeyInput();
        tween = this.game.add.tween(this.selector).to( {y: this.selector.y - this.menuTextHeight}, 100, "Sine.easeOut", true);
        tween.onComplete.add(this.enableKeyInput, this);
        this.selectedOption--;
      }
    }
    else {
      if (this.selectedOption < 2) {
        this.disableKeyInput();
        tween = this.game.add.tween(this.selector).to( {y: this.selector.y + this.menuTextHeight}, 100, "Sine.easeOut", true);
        tween.onComplete.add(this.enableKeyInput, this);
        this.selectedOption++;
      }
    }
  },

  // The following methods just change the inMotion variable bound to this.selector
  disableKeyInput: function() {
    this.selector.inMotion = true;
  },

  enableKeyInput: function() {
    this.selector.inMotion = false;
  },

  startGame: function() {
    this.game.state.start("GameScreen");
  },

  select: function() {
    //TODO: RN this just fires the game
    this.game.state.start("GameScreen");
  }
}
