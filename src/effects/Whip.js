import Phaser from "phaser";
import Player from "../characters/Player";

export default class Whip extends Phaser.Physics.Arcade.Sprite {
  static REPEAT_GAP = 1000;
  static DURATION = 500;

  constructor(scene, x, y) {
    super(scene, x, y-40, "beam");

    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    scene.m_weaponStatic.add(this);
    
    this.scale = 2;
    this.setDepth(30);
    
    scene.time.addEvent({
      delay: Whip.DURATION,
      callback: () => {
        this.destroy();
      },
      loop: false,
    });
  }

  move(vector) {
    this.x += vector[0] * Player.PLAYER_SPEED;
    this.y += vector[1] * Player.PLAYER_SPEED;
  }
}
