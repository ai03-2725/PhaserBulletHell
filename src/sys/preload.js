var preload = function(game) {};

preload.prototype = {
  preload: function() {

    // Create progress bar
    var progressBar = this.add.sprite(400, 400, "loadingbar");
    progressBar.anchor.setTo(0.5, 0.5);
    this.load.setPreloadSprite(progressBar);

    // Load scripts
    this.game.load.script("spinner", "src/obj/spinner.js");

    // Load backgrounds
    this.game.load.image("blankdark", "img/bg/BlankDark.png");
    this.game.load.image("blankblack", "img/bg/BlankBlack.png");
    this.game.load.image("genericcheckers", "img/bg/GenericCheckers.png");
    this.game.load.image("grid", "img/bg/Grid.png");
    this.game.load.image("mainmenu", "img/bg/MainMenu.png");
    this.game.load.image("panel", "img/bg/Panel.png");

    // Load objects
    this.game.load.image("boss1", "img/obj/Boss1.png");
    this.game.load.image("boss2", "img/obj/Boss2.png");
    this.game.load.image("boss3", "img/obj/Boss3.png");
    this.game.load.image("boss4", "img/obj/Boss4.png");
    this.game.load.image("generic1", "img/obj/Generic1.png");
    this.game.load.image("generic2", "img/obj/Generic2.png");
    this.game.load.image("generic3", "img/obj/Generic3.png");
    this.game.load.image("generic4", "img/obj/Generic4.png");

    this.game.load.image("pr1", "img/obj/Pr1.png");
    this.game.load.image("pr1inner", "img/obj/Pr1Inner.png");
    this.game.load.image("pr1outer", "img/obj/Pr1Outer.png");
    this.game.load.image("pr1tracker", "img/obj/Pr1Tracker.png");


    // Loading system objects
    this.game.load.image("spinner", "img/sys/Spinner.png");
    this.game.load.image("Overlay", "img/sys/Overlay.png");

  },
  create: function() {
    this.game.state.start("Menu");
  }
}
