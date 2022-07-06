import Phaser from "phaser";
import Player from "../characters/Player"

export default class Garlic extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, player, damage) {
    const x = player.x;
    const y = player.y;
    super(scene, x, y, "beam");
    this.m_damage = damage;

    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    scene.m_weaponStatic.add(this);

    this.scale = 8;
    this.alpha = 0.5;
    this.setDepth(5);
  }

  move(vector) {
    this.x += vector[0] * Player.PLAYER_SPEED;
    this.y += vector[1] * Player.PLAYER_SPEED;
  }
}
