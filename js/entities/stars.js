var Stars = function(worldReference) {
    var mStarGroup = null;
    var mStars = [];
    var mWorldReference = worldReference;
    
    this.getPhysicsReference = function() {
        return mStarGroup;  
    };
    
    this.update = function() {
        phaser.physics.arcade.collide(mStarGroup, mWorldReference);
    }
    
    // Private
    var createStars = function() {
        for (var i = 0; i < 12; i++) {
            var star = mStarGroup.create(i * 70, 0, 'star');                
            star.body.gravity.y = 300;            
            star.body.bounce.y = 0.7 + Math.random() * 0.2;
            
            mStars.push(star);
        }  
    };
        
    // Constructor
    (function() {
        mStarGroup = phaser.add.group();
        mStarGroup.enableBody = true;
        createStars();        
    })();
};