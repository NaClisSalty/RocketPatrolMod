//rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        //add an object to an existing scece, display list and update list
        scene.add.existing(this);
        this.isFiring = false;
        this.sfxRocket = scene.sound.add('sfx_rocket'); //adds rocket sfx
    }

    update(){
        //left/right movement
        if(!this.isFiring){
            if(keyLEFT.isDown && this.x >= 47){
                this.x -=2;
            }else if(keyRIGHT.isDown){
                this.x +=2;
            }
        }else if(this.isFiring==true){
            if(keyLEFT.isDown && this.x >= 47){
                this.x -=2;
            }else if(keyRIGHT.isDown){
                this.x +=2;
            }
        }
    
        //fire button (NOT SPACEBAR)
        if(Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring){
            this.isFiring = true;
            this.sfxRocket.play(); //play sfx
        }
        //if fired move up
        if(this.isFiring && this.y >= 108){
            this.y -= 2;
        }
        //reset on miss
        if(this.y <=108){
            this.reset();
        }
    }
    //reset the rocket to the ground
    reset(){
        this.isFiring = false;
        this.y = 431;
    }
}