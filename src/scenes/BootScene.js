import Phaser from 'phaser';
import playerWalk1 from '../assets/images/player/platformChar_walk1.png';
import playerWalk2 from '../assets/images/player/platformChar_walk2.png';
import playerIdle from '../assets/images/player/platformChar_idle.png';
import playerJump from '../assets/images/player/platformChar_jump.png';
import tiles from '../assets/images/maps/platformPack_tilesheet.png';
import levelOneJSON from '../assets/images/maps/LevelOne.json';

export default class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'boot' });
    }

    preload() {
        this.loadImages();
        this.loadTileMaps();
        this.load.on('complete', () => {
            this.scene.start('game');
        });
    }

    loadImages() {
        this.load.image('playerWalk1', playerWalk1);
        this.load.image('playerWalk2', playerWalk2);
        this.load.image('playerIdle', playerIdle);
        this.load.image('playerJump', playerJump);
        this.load.image('tiles', tiles);
    }

    loadTileMaps() {
        this.load.tilemapTiledJSON('levelOne', levelOneJSON);
    }
}