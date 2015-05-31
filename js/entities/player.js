var Player = function(worldReference, starsReference) {
    var mSprite = null;
    var mWorldReference = worldReference;
    var mStarsReference = starsReference;
    var mCursor = null;
    var mListeners = [];
    
    // Public
    this.update = function() {
        phaser.physics.arcade.collide(mSprite, mWorldReference);
        phaser.physics.arcade.overlap(mSprite, mStarsReference, onPlayerCollideWithStar, null, this);
        
        mSprite.body.velocity.x = 0;

        if (mCursor.left.isDown)
        {
            onPressLeft();
        }
        else if (mCursor.right.isDown)
        {
            onPressRight();
        }
        else
        {
            onNoDirectionPressed();
        }

        if (mCursor.up.isDown)
        {
            onPressUp();
        }
    };
    
    this.registerListener = function(listener) {
        mListeners.push(listener);
    }
    
    // Private
    var enablePhysics = function() {        
        phaser.physics.arcade.enable(mSprite);
        mSprite.body.bounce.y = 0.2;
        mSprite.body.gravity.y = 300;
        mSprite.body.collideWorldBounds = true;    
    };
    
    var onPressLeft = function() {        
        mSprite.body.velocity.x = -150;
        mSprite.animations.play('left');
    };
    
    var onPressRight = function() {
        mSprite.body.velocity.x = 150;
        mSprite.animations.play('right');
    };
    
    var onPressUp = function() {
        if(mSprite.body.touching.down) {
            mSprite.body.velocity.y = -350;
        }
    };
        
    var onNoDirectionPressed = function() {
        mSprite.animations.stop();
        mSprite.frame = 4;         
    };
    
    var onPlayerCollideWithStar = function(player, star) {
        star.kill();
        mListeners.forEach(function(listener) {
            listener.onPlayerCollideWithStar();   
        });
    };
    
    // Constructor
    (function() {
        mSprite = phaser.add.sprite(32, phaser.world.height - 150, 'dude');    
        mSprite.animations.add('left', [0, 1, 2, 3], 10, true);
        mSprite.animations.add('right', [5, 6, 7, 8], 10, true);
        
        mCursor = phaser.input.keyboard.createCursorKeys();
        
        enablePhysics();
    })();
};