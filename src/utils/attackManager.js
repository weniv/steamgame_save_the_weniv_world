import Beam from "../effects/Beam";
import Claw from "../effects/Claw";
import Catnip from "../effects/Catnip";

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

    case "claw":
      const timerClaw = scene.time.addEvent({
        delay: repeatGap,
        callback: () => {
          scratchClaw(scene, attackDamage);
        },
        loop: true,
      });
      scene.m_attackEvents.claw = timerClaw;
      break;

    case "catnip":
      const catnip = useCatnip(scene, attackDamage);
      scene.m_attackEvents.catnip = catnip;
      break;
  }
}

function shootBeam(scene, damage) {
  new Beam(scene, scene.m_player, damage);
}

function scratchClaw(scene, damage) {
  new Claw(scene, scene.m_player, damage);
}

function useCatnip(scene, damage) {
  return new Catnip(scene, scene.m_player, damage);
}

export function setCatnipScale(scene, scale) {
  if (!scene.m_attackEvents.catnip) {
    console.error('setCatnipScale error')
  }
  scene.m_attackEvents.catnip._scaleX = scale;
  scene.m_attackEvents.catnip._scaleY = scale;
}