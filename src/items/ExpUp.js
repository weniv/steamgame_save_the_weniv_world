import Phaser from "phaser";

const ITEM_PROPERTY = {
  'mob1': {
    exp: 100,
    color: 'red'
  },
  'mob2': {
    exp: 100,
    color: 'blue'
  },
  'mob3': {
    exp: 100,
    color: 'yellow'
  },
  'mob4': {
    exp: 100,
    color: 'green'
  },
};

export default class ExpUp extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, mob) {
    const x = mob.x;
    const y = mob.y;

    super(scene, x, y, "exp-up");
    this.scale = 1.5;
    this.setDepth(7);

    // mob 종류에 따라 경험치 상승량, 아이템 이미지를 다르게 설정하는 부분
    this.m_exp = ITEM_PROPERTY[mob.texture.key].exp;
    this.play(ITEM_PROPERTY[mob.texture.key].color);

    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    this.setBodySize(20, 20);
  }
}
