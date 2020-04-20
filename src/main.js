//Ethan Salzman
//Ponts:
/*
1) Added background music to play scene(10)
2) Player can move rocket after its fired(10)
3) Displays Time left in seconds on screen (15)
4) Created a new title screen(15)
5) Made a new spaceship type thats smaller faster and worth more(25)
6) Implemented code that adds time to clock for sucsessful hits(25)
Points: 10+10 = 20+15 = 35+15 = 50+25 =75+25 = 100
*/

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene:[ Menu, Play],
};

let game = new Phaser.Game(config);

//define game settings
game.settings = {
    spaceshipSpeed: 3,
    spaceshipSpeed2: 5,
    gameTimer: 60000
}


//reserve some keyboard variables
let keyF, keyLEFT, keyRIGHT;