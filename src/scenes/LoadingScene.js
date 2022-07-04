import Phaser from "phaser";
import fontPng from "../assets/font/font.png";
import fontXml from "../assets/font/font.xml";

import bgImg from "../assets/images/background.png";
import beamImg from "../assets/images/beam.png";

import explosionImg from "../assets/spritesheets/explosion.png";
import playerImg from "../assets/spritesheets/player.png";
import expUpImg from "../assets/spritesheets/expUp.png";
import mob1Img from "../assets/spritesheets/mob1.png";
import mob2Img from "../assets/spritesheets/mob2.png";
import mob3Img from "../assets/spritesheets/mob3.png";
import mob4Img from "../assets/spritesheets/mob4.png";
import lionImg from "../assets/spritesheets/lion.png";

// import bgmOgg from "../assets/sounds/lofi-bgm.ogg";
import beamOgg from "../assets/sounds/beam.ogg";
import hitMobOgg from "../assets/sounds/hitMob.ogg";
import explosionOgg from "../assets/sounds/explosion.ogg";
import hurtOgg from "../assets/sounds/hurt.ogg";
import expUpOgg from "../assets/sounds/expUp.ogg";
import nextLevelOgg from "../assets/sounds/nextLevel.ogg"
import gameoverOgg from "../assets/sounds/gameover.ogg";
import pauseInOgg from "../assets/sounds/pauseIn.ogg";
import pauseOutOgg from "../assets/sounds/pauseOut.ogg";

export default class LoadingScene extends Phaser.Scene {
  constructor() {
    super("bootGame");
    // bootGame : 이 scene의 identifier
  }

  preload() {
    this.load.image("background", bgImg);
    this.load.image("beam", beamImg);
    this.load.spritesheet("player", playerImg, {
      frameWidth: 32,
      frameHeight: 36,
    });
    this.load.spritesheet("mob1", mob1Img, {
      frameWidth: 28,
      frameHeight: 28,
    });
    this.load.spritesheet("mob2", mob2Img, {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet("mob3", mob3Img, {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet("mob4", mob4Img, {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet("lion", lionImg, {
      frameWidth: 48,
      frameHeight: 64,
    });

    this.load.spritesheet("explosion", explosionImg, {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet("exp-up", expUpImg, {
      frameWidth: 16,
      frameHeight: 16,
    });

 
    this.load.bitmapFont("pixelFont", fontPng, fontXml);
    // this.load.audio("music", bgmOgg);
    this.load.audio("audio_beam", beamOgg);
    this.load.audio("audio_hitMob", hitMobOgg);
    this.load.audio("audio_explosion", explosionOgg);
    this.load.audio("audio_expUp", expUpOgg);
    this.load.audio("audio_hurt", hurtOgg);
    this.load.audio("audio_nextLevel", nextLevelOgg);
    this.load.audio("audio_gameover", gameoverOgg);
    this.load.audio("audio_pauseIn", pauseInOgg);
    this.load.audio("audio_pauseOut", pauseOutOgg);
  }

  create() {
    this.add.text(20, 20, "Loading game...");
    this.scene.start("mainScene");

    this.anims.create({
      key: "mob1_anim",
      frames: this.anims.generateFrameNumbers("mob1"),
      frameRate: 12,
      repeat: -1,
    });
    this.anims.create({
      key: "mob2_anim",
      frames: this.anims.generateFrameNumbers("mob2"),
      frameRate: 12,
      repeat: -1,
    });
    this.anims.create({
      key: "mob3_anim",
      frames: this.anims.generateFrameNumbers("mob3"),
      frameRate: 12,
      repeat: -1,
    });
    this.anims.create({
      key: "mob4_anim",
      frames: this.anims.generateFrameNumbers("mob4"),
      frameRate: 12,
      repeat: -1,
    });
    this.anims.create({
      key: "lion_anim",
      frames: this.anims.generateFrameNumbers("lion"),
      frameRate: 12,
      repeat: -1,
    });
    this.anims.create({
      key: "player_anim",
      frames: this.anims.generateFrameNumbers("player"),
      frameRate: 12,
      repeat: -1,
    });
    this.anims.create({
      key: "player_still",
      frames: this.anims.generateFrameNumbers("player", {
        start: 0,
        end: 0,
      }),
      frameRate: 12,
      repeat: 0,
    });

    this.anims.create({
      key: "explode",
      frames: this.anims.generateFrameNumbers("explosion"),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true,
    });

    this.anims.create({
      key: "red",
      frames: this.anims.generateFrameNumbers("exp-up", {
        start: 0,
        end: 0,
      }),
      frameRate: 20,
      repeat: 0,
    });
    this.anims.create({
      key: "blue",
      frames: this.anims.generateFrameNumbers("exp-up", {
        start: 1,
        end: 1,
      }),
      frameRate: 20,
      repeat: 0,
    });
    this.anims.create({
      key: "yellow",
      frames: this.anims.generateFrameNumbers("exp-up", {
        start: 2,
        end: 2,
      }),
      frameRate: 20,
      repeat: 0,
    });
    this.anims.create({
      key: "green",
      frames: this.anims.generateFrameNumbers("exp-up", {
        start: 3,
        end: 3,
      }),
      frameRate: 20,
      repeat: 0,
    });
  }
}
