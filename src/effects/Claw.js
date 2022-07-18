import Phaser from "phaser";
import Player from "../characters/Player";

export default class Claw extends Phaser.Physics.Arcade.Sprite {
  static REPEAT_GAP = 1000;
  static DURATION = 500;

  constructor(scene, player, damage, scale, scratchFront) {
    const x = player.x - 40 + 80 * scratchFront;
    const y = player.y - 40;
    super(scene, x, y, "claw_white");
    if (!scratchFront) {
      this.flipX = true;
    }
    this.play("scratch_white");
    this.m_damage = damage;

    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    scene.m_weaponStatic.add(this);
    
    // this.scale = 2.3;
    this.scale = scale;
    this.setDepth(30);
    
    scene.time.addEvent({
      delay: Claw.DURATION,
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
