import Phaser from "phaser";

import Player, { Direction } from "../characters/Player"

export default class Garlic extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "beam");

    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    scene.m_weaponStatic.add(this);

    this.scale = 8;
    this.alpha = 0.5;
    this.setDepth(5);
  }

  move(direction) {
    switch (direction) {
      case Direction.Up:
        this.y -= Player.PLAYER_SPEED;
        break;

      case Direction.Down:
        this.y += Player.PLAYER_SPEED;
        break;

      case Direction.Left:
        this.x -= Player.PLAYER_SPEED;
        this.flipX = false;
        break;

      case Direction.Right:
        this.x += Player.PLAYER_SPEED;
        this.flipX = true;
        break;
    }
  }
}
