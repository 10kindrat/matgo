import MenuScene from "./scenes/MenuScene.js";
//import GameScenes from "./scenes/GameScenes.js";

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,

    parent: "game-container",
    scene: [
        MenuScene,
        //GameScenes
    ]
};

new Phaser.Game(config);