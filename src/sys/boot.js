var boot = function(game){
	console.log("Boot created");
};

boot.prototype = {
	preload: function(){
          this.game.load.image("loadingbar","img/sys/LoadingBar.png");
          this.game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
	},
  	create: function(){
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.game.state.start("Preload");
	}
}
