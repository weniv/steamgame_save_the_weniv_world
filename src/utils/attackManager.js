import Beam from "../effects/Beam";
import Whip from "../effects/Whip";
import Garlic from "../effects/Garlic";

export function addAttackEvent(scene, attackType, attackDamage, repeatGap) {
  switch (attackType) {
    case "beam":
      const timerBeam = scene.time.addEvent({
        delay: repeatGap,
        callback: () => {
          shootBeam(scene, attackDamage);
        },
        loop: true,
      });
      scene.m_attackEvents.beam = timerBeam;
      break;

    case "whip":
      const timerWhip = scene.time.addEvent({
        delay: repeatGap,
        callback: () => {
          useWhip(scene, attackDamage);
        },
        loop: true,
      });
      scene.m_attackEvents.whip = timerWhip;
      break;

    case "garlic":
      const garlic = useGarlic(scene, attackDamage);
      scene.m_attackEvents.garlic = garlic;
      break;
  }
}

function shootBeam(scene, damage) {
  new Beam(scene, scene.m_player, damage);
}

function useWhip(scene, damage) {
  new Whip(scene, scene.m_player, damage);
}

function useGarlic(scene, damage) {
  return new Garlic(scene, scene.m_player, damage);
}

export function setGarlicScale(scene, scale) {
  if (!scene.m_attackEvents.garlic) {
    console.error('setGarlicScale error')
  }
  scene.m_attackEvents.garlic._scaleX = scale;
  scene.m_attackEvents.garlic._scaleY = scale;
}