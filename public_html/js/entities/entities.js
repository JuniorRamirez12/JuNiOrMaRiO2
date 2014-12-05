// TODO 
//THIS CREATES MARIO IN THE GAME
game.PlayerEntity = me.Entity.extend({
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
             image: "mario",
             spritewidth: "64",
             spriteheight: "64",
             width: 64,
             height: 64,
             getShape: function(){
                 return (new me.Rect(0, 0, 64, 64)).toPolygon();
             }
        }]);
    
        this.renderable.addAnimation("idle", [3]);
        //CREATING AN ANIMATION CALLED SMALL WALK USING IMAGES OF MARIO
        //SETS THE ANIMATION TO RUN THROUGH PICTURES 8-13
        //THE LAST NUMBER SAYS WE SWITCH BETWEEN PICTURES EVERY 80 MILLISECOND
        this.renderable.addAnimation("smallWalk", [88, 89, 90, 91, 92, 93, 94, 95, 96], 80);
        
        this.renderable.setCurrentAnimation("idle");
        // SETS THE CAMERA (VIEWPORT) TO FOLLOW MARIOS ON BOTH THE X AN Y AXIS
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
        
        this.body.setVelocity(5, 20);
    },
    update: function(delta) {
        // CHECKS IF RIGHT KEY IS PRESSED
        if (me.input.isKeyPressed("right")) {
            //SETS THE POSITION OF MARIO ON THE X AXIS BY ADDING THE X VALUE
            // ME.TIMER.TICK USES THE TIME THE LAST ANIMATION WAS SET
            this.body.vel.x += this.body.accel.x * me.timer.tick;

        }
        else if (me.input.isKeyPressed("left")) {
            this.body.vel.x -= this.body.accel.x * me.timer.tick;
            }
          else {
            this.body.vel.x = 0;
        }
        
        if (me.input.isKeyPressed("up")) {
                this.body.vel.y -= this.body.accel.y * me.timer.tick;
        }
           
        
        
           
        me.collision.check(this, true, this.collideHandler.bind(this), true);
        
        if(this.body.vel.x !== 0){
            if(!this.renderable.isCurrentAnimation("smallWalk")) {
                this.renderable.setCurrentAnimation("smallWalk");
                this.renderable.setAnimationFrame();
            }
        }else{
            this.renderable.setCurrentAnimation("idle");
        }
        
        
        
        this.body.update(delta);
        this._super(me.Entity, "update", [delta]);
        return true;
    },
    
    collideHandler: function (response){
        
    }
    
});

game.LevelTrigger = me.Entity.extend({
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, settings]);
        //IF SOMETHING COLLIDES WITH THIS OBJECT THEN WE WILL CALL THE ONCOLLISION FUNCTION ANND PASS IT
        //A HIDDEN PARAMETER OF THIS OBJECT
        this.body.onCollision = this.onCollision.bind(this);
        this.level = settings.level;
        console.log("init");
        this.xSpawn = settings.xSpawn;
        this.ySpawn = settings.ySpawn;
    },
    
    onCollision: function() {
        this.body.setCollisionMask(me.collision.types.NO_OBJECT);
        me.levelDirector.loadLevel(this.level);
        //resetPlayer();
        me.state.current().resetPlayer(this.xSpawn, this.ySpawn);
    }

});

game.BadGuy = me.Entity.extend({
    init: function(x, y, settings){
          this._super(me.Entity, 'init', [x, y, {
             image: "slime",
             spritewidth: "60",
             spriteheight: "28",
             width: 60,
             height: 28,
             getShape: function(){
                 return (new me.Rect(0, 0, 00, 28)).toPolygon();
             }
        }]);
    },
    
    update: function(delta){
        
    }
    
});
