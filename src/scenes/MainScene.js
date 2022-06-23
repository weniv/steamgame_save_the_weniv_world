import Phaser from "phaser";
import Config from "../Config";
import Button from "../ui/Button";

export default class MainScene extends Phaser.Scene {
  constructor() {
    super("mainScene");
  }

  create() {
    const bg = this.add.graphics();
    bg.fillStyle(0xbbdefb);
    bg.fillRect(0, 0, Config.width, Config.height);
    bg.setScrollFactor(0);

    this.add
      .bitmapText(Config.width / 2, 150, "pixelFont", "Meow Meow Fuzzyface", 40)
      .setOrigin(0.5);

    // this.m_sprite = this.add.sprite(Config.width / 2, Config.height / 2, "player");
    // this.m_sprite.setScale(2);
    // this.m_sprite.play("player_anim");
    this.add.sprite(Config.width / 2, Config.height / 2, "player").setScale(4).play("player_anim");

    new Button(
      Config.width / 2,
      Config.height / 2 + 150,
      "Start Game",
      this,
      () => this.scene.start("playGame")
    );
  }
}
