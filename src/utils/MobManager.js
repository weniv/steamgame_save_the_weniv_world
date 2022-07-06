import Mob from "../characters/Mob";
import Config from "../Config";
import { getRandomPosition } from "./math";

export default class MobManager {
  constructor(scene) {
    this.m_scene = scene;
    this.m_mobEvents = [];
  }

  addMobEvent(repeatGap, mobTexture, mobAnim, mobHp, mobDropRate) {
    let timer = this.m_scene.time.addEvent({
      delay: repeatGap,
      callback: () => {
        // 화면 바깥에서 나타나도록 해줍니다.
        const r =
          Math.sqrt(
            Config.width * Config.width + Config.height * Config.height
          ) / 2;
        let [x, y] = getRandomPosition(this.m_scene.m_player.x, this.m_scene.m_player.y, r);
        this.m_scene.m_mobs.add(new Mob(this.m_scene, x, y, mobTexture, mobAnim, mobHp, mobDropRate));
      },
      loop: true,
    });

    this.m_mobEvents.push(timer);
  }

  // 가장 오래된 mob event를 지우는 함수
  removeOldestMobEvent() {
    this.m_mobEvents[0].remove();
    this.m_mobEvents.shift();
  }
}
