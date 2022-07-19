import Phaser from "phaser";
import HpBar from "../ui/HpBar";
import Explosion from "../effects/Explosion";
import Config from "../Config";
import { loseGame } from "../utils/sceneManager";

export default class Player extends Phaser.Physics.Arcade.Sprite {
  static PLAYER_SPEED = 3;

  constructor(scene) {
    super(scene, Config.width / 2, Config.height / 2, "player");
    this.scale = 2; // 크기 조정
    this.alpha = 1; // 투명도 설정
    this.m_hpBar = new HpBar(scene, this, 100); // HP bar 생성
    this.canBeAttacked = true;

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setDepth(20);
    this.setBodySize(28, 32);

    this.m_moving = false;
  }

  // mob과 접촉했을 경우 실행되는 함수
  hitByMob(damage) {
    // 쿨타임이었던 경우 공격받지 않음
    if (!this.canBeAttacked) return;

    new Explosion(this.scene, this.x, this.y);
    this.scene.m_hurtSound.play();
    this.m_hpBar.decrease(damage);

    // hp가 0이 되면 게임오버!
    if (this.m_hpBar.m_currentHp <= 0) {
      loseGame(this.scene);
    }

    this.getCooldown();
  }

  // 공격받은 후 1초 쿨타임을 갖게 하는 함수
  getCooldown() {
    this.canBeAttacked = false;
    this.alpha = 0.5;
    this.scene.time.addEvent({
      delay: 1000,
      callback: () => {
        this.alpha = 1;
        this.canBeAttacked = true;
      },
      callbackScope: this,
      loop: false,
    });
  }

  move(vector) {
    this.x += vector[0] * Player.PLAYER_SPEED;
    this.y += vector[1] * Player.PLAYER_SPEED;
    if (vector[0] === -1) this.flipX = false;
    else if (vector[0] === 1) this.flipX = true;
  }

  // HP 회복 (not in use now)
  gainPower(amount) {
    this.m_hpBar.increase(amount);
  }
}
