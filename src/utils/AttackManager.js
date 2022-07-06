import Beam from "../effects/Beam";
import Garlic from "../effects/Garlic";
import Whip from "../effects/Whip";

export default class AttackManager {
  constructor(scene) {
      this.m_scene = scene;
      this.m_attackEvents = [];
  }

  addAttackEvent(attackType, attackDamage, repeatGap) {
    switch (attackType) {
      case "beam":
        const timerBeam = this.m_scene.time.addEvent({
          delay: repeatGap,
          callback: () => {
            this.shootBeam(attackDamage);
          },
          loop: true,
        });
        this.m_attackEvents.push(timerBeam);
        break;

      case "whip":
        const timerWhip = this.m_scene.time.addEvent({
          delay: repeatGap,
          callback: () => {
            this.useWhip(attackDamage);
          },
          loop: true,
        });
        this.m_attackEvents.push(timerWhip);
        break;

      case "garlic":
        const garlic = this.useGarlic(attackDamage);
        this.m_attackEvents.push(garlic);
        break;
    }
  }

  shootBeam(damage) {
    new Beam(this.m_scene, this.m_scene.m_player, damage);
  }

  useWhip(damage) {
    new Whip(this.m_scene, this.m_scene.m_player, damage);
  }

  useGarlic(damage) {
    return new Garlic(this.m_scene, this.m_scene.m_player, damage);
  }
}
