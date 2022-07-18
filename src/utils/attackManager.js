import Beam from "../effects/Beam";
import Claw from "../effects/Claw";
import Catnip from "../effects/Catnip";

export function addAttackEvent(scene, attackType, attackDamage, attackScale, repeatGap) {
  switch (attackType) {
    case "beam":
      const timerBeam = scene.time.addEvent({
        delay: repeatGap,
        callback: () => {
          shootBeam(scene, attackDamage, attackScale);
        },
        loop: true,
      });
      scene.m_attackEvents.beam = timerBeam;
      break;

    case "claw":
      const timerClaw = scene.time.addEvent({
        delay: repeatGap,
        callback: () => {
          scratchClaw(scene, attackDamage, attackScale);
        },
        loop: true,
      });
      scene.m_attackEvents.claw = timerClaw;
      break;

    case "catnip":
      const catnip = useCatnip(scene, attackDamage, attackScale);
      scene.m_attackEvents.catnip = catnip;
      break;
  }
}

function shootBeam(scene, damage, scale) {
  new Beam(scene, scene.m_player, damage, scale);
}

function scratchClaw(scene, damage, scale) {
  new Claw(scene, scene.m_player, damage, scale, true);
  scene.time.addEvent({
    delay: 500,
    callback: () => {
      new Claw(scene, scene.m_player, damage, scale, false);
    },
    loop: false,
  });
}

function useCatnip(scene, damage, scale) {
  return new Catnip(scene, scene.m_player, damage, scale);
}

export function setCatnipScale(scene, scale) {
  if (!scene.m_attackEvents.catnip) {
    console.error('setCatnipScale error')
  }
  scene.m_attackEvents.catnip._scaleX = scale;
  scene.m_attackEvents.catnip._scaleY = scale;
}

// not working yet
export function removeAttack(scene, attackType) {
  if (attackType === "catnip") return;

  scene.time.removeEvent(scene.m_attackEvents[attackType]);
}