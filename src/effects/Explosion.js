import Phaser from "phaser";

export default class Explosion extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "explosion");
    scene.add.existing(this);
    this.setDepth(50);
    this.scale = 2;
    this.play("explode");
  }
}
