import Phaser from "phaser";

export default class Garlic extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, player) {
    const x = player.x;
    const y = player.y + 30;
    super(scene, x, y, "beam");
    
    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    scene.m_weaponStatic.add(this);
    
    this.scale = 8;
    this.alpha = 0.5;
    this.setDepth(5);
    this.setScrollFactor(0);
  }
}
