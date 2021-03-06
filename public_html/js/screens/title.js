game.TitleScreen = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
        
        //THIS CODE MAKES THE STARTING SCREEN FOR THE GAME
	onResetEvent: function() {	
		var titleImage = new me.Sprite(0, 0, me.loader.getImage("download"), -10);
                me.game.world.addChild(titleImage, 1);
                me.input.bindKey(me.input.KEY.ENTER, "start");
                
                me.game.world.addChild(new (me.Renderable.extend ({
                init: function(){
                this._super(me.Renderable, 'init', [510, 30, me.game.viewport.width, me.game.viewport.height]);
                this.font = new me.Font("Permanent Marker", 46, "white");
                
                    },
                    
                    //THIS IS THE TITLE FOR THE GAME
                    draw: function(renderer){
                        this.font.draw(renderer.getContext(), "SUCKY MARIO 36", 450, 130);
                        this.font.draw(renderer.getContext(), "PRESS ENTER TO PLAY", 250, 530);
                    }
                    
                })));
                
                this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge){
                    if(action === "start"){
                        me.state.change(me.state.PLAY);
                    }
                });
	},
	
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		me.input.unbindKey(me.input.KEY.ENTER);
                me.event.unsubscribe(this.handler);
	}
});
