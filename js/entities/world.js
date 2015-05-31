var World = function() {
    var mPlatforms = null;
    var mGround = null;
    var mLedges = [];
    
    this.getPhysicsReference = function() {
        return mPlatforms;  
    };
    
    var addBackground = function() {
        phaser.add.sprite(0, 0, 'sky');
    };
    
    var createGround = function() {
        mGround = mPlatforms.create(0, phaser.world.height - 64, 'ground');
        mGround.scale.setTo(2,2);
    };
    
    var createLedges = function() {
        mLedges.push(mPlatforms.create(400, 400, 'ground'));
        mLedges.push(mPlatforms.create(-150, 250, 'ground'));
    };
    
    var enablePhysics = function() {
        phaser.physics.arcade.enable(mPlatforms);
        mGround.body.immovable = true;
        mLedges.forEach(function(ledge) {
            ledge.body.immovable = true;
        });
    };
    
    // Constructor
    (function() {        
        addBackground();  
        
        // Create ground group
        mPlatforms = phaser.add.group();
        createGround();
        createLedges();
        
        enablePhysics();
    })();
};