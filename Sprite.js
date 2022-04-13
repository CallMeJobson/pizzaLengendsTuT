//Manage Everything Visual on The screen
class Sprite {
    constructor(config){


        //Set up image
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }


        //Shadow 
        this.shadow = new Image();
        this.useShadow = true; // config.useShadown || false
        if(this.useShadow){
            this.shadow.src = "img/characters/shadow.png"
        }
        
        this.shadow.onload = () => {
            this.isShadowLoaded = true;
        }
        


        //Configuring Animation and Inital State
        this.animations = config.animations || {
            idleDown: [
                [0,0]
            ]
            
        }

        this.currentAnimation = config.currentAnimation || "idleDown";
        this.currentAnimationFrame = 0; // which array when the array are we showing

        //Reference the game object ( the thing that create the sprite)
        this.gameObject = config.gameObject;

    }


    //take the context we want to draw to
    draw(ctx){
        const x = this.gameObject.x * 16 - 8 // grid 16 by 16 and 8 pixels to nudge them in place
        const y = this.gameObject.y * 16 - 18  // grid 16 by 16 and 18 pixels to nudge them in place

        this.isShadowLoaded && ctx.drawImage(this.shadow, x, y)


        this.isLoaded && ctx.drawImage(this.image,
            0,0, //left and top cut
            32,32, //width and height of the cut Adjust these numbers here if the sprites where not all cut the same
            x, y, // x & y position of the player
            32,32 //  size charater should be drawn (32 is our default)
        
            )



    }
}