import Phaser from "phaser";
import Player from "../characters/Player"

export default class Catnip extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, startingPosition, damage, scale) {
    super(scene, startingPosition[0], startingPosition[1], "catnip");
    this.play("catnip_anim");
    this.m_damage = damage;

    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    scene.m_weaponStatic.add(this);

    this.scale = scale;
    this.alpha = 0.5;
    this.setDepth(5);
    this.setCircle(30);
  }

  move(vector) {
    this.x += vector[0] * Player.PLAYER_SPEED;
    this.y += vector[1] * Player.PLAYER_SPEED;
  }
}
