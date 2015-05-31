//var gameFacade = null;
var phaser = new Phaser.Game(
    800, 
    600, 
    Phaser.AUTO, 
    '', 
    { 
        preload: function() {
            phaser.load.image('sky', 'assets/sky.png');
            phaser.load.image('ground', 'assets/platform.png');
            phaser.load.image('star', 'assets/star.png');
            phaser.load.image('background', 'assets/background.png');
            phaser.load.spritesheet('dude', 'assets/dude.png', 32, 48);
        }, 
        create: function() {
            phaser.state.add('menu', MenuState);            
            phaser.state.add('game', GameState);
            phaser.state.start('menu');
        }
    }
);