var preload = function(game) {};

preload.prototype = {
  preload: function() {
    var loadingBar = this.add.sprite(400, 400, "loadingbar");
    loadingBar.anchor.setTo(0.5, 0.5);
    this.load.setPreloadSprite(loadingBar);
    this.game.load.image("boss1", "img/obj/Boss1.png");
    this.game.load.image("boss2", "img/obj/Boss2.png");
    this.game.load.image("boss3", "img/obj/Boss3.png");
    this.game.load.image("boss4", "img/obj/Boss4.png");
    this.game.load.image("generic1", "img/obj/Generic1.png");
    this.game.load.image("generic2", "img/obj/Generic2.png");
    this.game.load.image("generic3", "img/obj/Generic3.png");
    this.game.load.image("generic4", "img/obj/Generic4.png");
  },
  create: function() {
    this.game.state.start("Menu");
  }
}
