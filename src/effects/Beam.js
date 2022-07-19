import Phaser from "phaser";

export default class Beam extends Phaser.Physics.Arcade.Sprite {
  static SPEED = 100;
  static DURATION = 1500;

  constructor(scene, player, damage, scale) {
    const x = player.x;
    const y = player.y - 16;
    super(scene, x, y, "beam");
    this.m_damage = damage;
    
    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    scene.m_weaponDynamic.add(this);
    scene.m_beamSound.play();

    this.scale = scale;
    this.setDepth(30);
    this.setVelocity();
    this.setAngle();

    // DURATION만큼 시간이 지나면 사라짐
    scene.time.addEvent({
      delay: Beam.DURATION,
      callback: () => {
        this.destroy();
      },
      loop: false,
    });
  }

  // beam이 가장 가까운 mob으로 날아가도록 속도를 설정해주는 함수
  setVelocity() {
    if (!this.scene.m_closest) {
      this.setVelocityY(-250);
      return;
    }
    const _x = this.scene.m_closest.x - this.x;
    const _y = this.scene.m_closest.y - this.y;
    const _r = Math.sqrt(_x * _x + _y * _y) / 2;
    this.body.velocity.x = (_x / _r) * Beam.SPEED;
    this.body.velocity.y = (_y / _r) * Beam.SPEED;
  }

  // beam이 mob에 날아갈 때 각도를 설정해주는 함수
  setAngle() {
    const angleToMob = Phaser.Math.Angle.Between(
      this.x,
      this.y,
      this.scene.m_closest.x,
      this.scene.m_closest.y
    );
    this.rotation = angleToMob + Math.PI / 2 + Math.PI / 4;
    this.body.setAngularVelocity(0);
  }

  setDamage(damage) {
    this.m_damage = damage;
  }
}
