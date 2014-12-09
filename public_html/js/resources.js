 game.resources = [

	/* Graphics. 
	 * @example
	 * {name: "example", type:"image", src: "data/img/example.png"},
	 */
        
        //THESE CODES LET THE PROGRAM KNOW THAT THE IMAGES EXIST
        {name: "background-tiles", type:"image", src: "data/img/background-tiles.png"},
         {name: "meta-tiles", type:"image", src: "data/img/meta-tiles.png"},
        {name: "mario", type:"image", src: "data/img/player1.png"},
        {name: "download", type:"image", src: "data/img/download.png"},
        {name: "slime", type:"image", src: "data/img/slime-spritesheet.png"},
        

	/* Atlases 
	 * @example
	 * {name: "example_tps", type: "tps", src: "data/img/example_tps.json"},
	 */
		
	/* Maps. 
	 * @example
	 * {name: "example01", type: "tmx", src: "data/map/example01.tmx"},
	 * {name: "example01", type: "tmx", src: "data/map/example01.json"},
 	 */
        
        //THESE ARE THE NAMES OF THE MAPS OF THE GAME
        {name: "juniorlevel01", type: "tmx", src: "data/map/level1.tmx"},
        {name: "juniorlevel2", type: "tmx", src: "data/map/juniorlevel2.tmx"}

	/* Background music. 
	 * @example
	 * {name: "example_bgm", type: "audio", src: "data/bgm/"},
	 */	

	/* Sound effects. 
	 * @example
	 * {name: "example_sfx", type: "audio", src: "data/sfx/"}
	 */
];
