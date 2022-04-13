class GameObject {
    constructor(config){
        this.x = config.x || 0;
        this.y = config.y || 0;
        // the appearance of game object
        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || "img/characters/people/hero.png", //the sprite sheet
            
        }); 
    }
}