class Menu extends Phaser.Scene {
    constructor() {
        //super runs constructor of parent class
        super("menuScene");
    }

    preload(){
        //load audio
        //this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_select', './assets/beeps.wav');
        //this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_explosion', './assets/betterExplosion.mp3');
        //this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
        this.load.audio('sfx_rocket', './assets/betterRocket.wav');
        
    }

    create() {
        console.log(this);
        //display menu text
        this.add.text(20,20,"Rocket Patrol Menu");

        //launch next scene
        //this.scene.start("playScene");
        
        //background rect
        


        //menu display
        let menuConfig = {
            fontFamily: 'Impact',
            fontSize: '48px',
            backgroundColor: 'Black',
            color: 'Red',
            align: 'right',
            padding: {
                top: 10,
                bottom: 10,
                left: 10,
                right: 10,
            },
            fixedWidth: 0
        }        

        //show menu text
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let textSpacer = 64;

        this.add.rectangle(centerX,centerY, 540, 350, 0xffffff).setOrigin(0.5);
        this.add.text(centerX, centerY- textSpacer, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor =null;
        menuConfig.fontSize = '28px';
        menuConfig.color = 'Blue';
        //menuConfig.backgroundColor = '#00FF00';
        menuConfig.padding.top = 20;
        this.add.text(centerX, centerY, 'Use arrows to move and (F) to Fire', menuConfig).setOrigin(0.5);
        //menuConfig.backgroundColor = '#00FF00';
        //menuConfig.color = '#000';
        this.add.text(centerX, centerY+ textSpacer, 'Press LEFT for Easy or RIGHT for Hard', menuConfig).setOrigin(0.5);

        
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
            //easy mode
            game.settings = {
                spaceshipSpeed: 3,
                spaceshipSpeed2: 5,
                gameTimer: 60000
                
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene");
           
        }
        if(Phaser.Input.Keyboard.JustDown(keyRIGHT)){
            //hard mode
            game.settings = {
                spaceshipSpeed: 4,
                spaceshipSpeed2: 6,
                gameTimer: 4500
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene");
        }
    }

}