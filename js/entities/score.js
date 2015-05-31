var Score = function() {
    var mText = null;
    var mScore = 0;
    
    this.onPlayerCollideWithStar = function() {
        mScore += 10;
        updateScore();
    };
    
    var updateScore = function() {
        mText.text = 'Score: ' + mScore;
    };
    
    // Constructor
    (function() {
        mText = phaser.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
        updateScore();
    })();
};