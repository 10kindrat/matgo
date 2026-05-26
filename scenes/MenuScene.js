export default class MenuScene extends Phaser.Scene {
    constructor() {
        super("MenuScene");
    }

    preload() {
        this.load.image("background", "./assets/img/bg/menuBg.png");
    }

    create() {
        const width = this.scale.width;
        const height = this.scale.height;
        
        //배경
        const bg = this.add.image(width / 2, height / 2, "background");
        bg.setDisplaySize(width, height);
    }
}