import Config from "../Config";

export function setBackground(scene, backgroundTexture) {
  scene.m_background = scene.add.tileSprite(
    0,
    0,
    Config.width,
    Config.height,
    backgroundTexture
  ).setOrigin(0, 0);
}

// 반투명 검은 veil 화면을 만들어줍니다.
export function createVeil(scene) {
  scene.m_veil = scene.add.graphics({ x: 0, y: 0 });
  scene.m_veil.fillStyle(0x000000, 0.3);
  scene.m_veil.fillRect(0, 0, Config.width, Config.height);
  scene.m_veil.setDepth(110);
  scene.m_veil.setScrollFactor(0);
}