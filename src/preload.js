var preload = function(game){}

preload.prototype = {
	preload: function()
  {
    var loadingBar = this.add.sprite(160,240,"loading");
    loadingBar.anchor.setTo(0.5,0.5);
    this.load.setPreloadSprite(loadingBar);

    // This is where we call load to load game assets

		//this.game.load.spritesheet("numbers","assets/numbers.png",100,100);
		//this.game.load.image("gametitle","assets/gametitle.png");
		//this.game.load.image("play","assets/play.png");
		//this.game.load.image("higher","assets/higher.png");
		//this.game.load.image("lower","assets/lower.png");
		//this.game.load.image("gameover","assets/gameover.png");
	},

  create: function()
  {
		this.game.state.start("GameTitle");
	}

}
