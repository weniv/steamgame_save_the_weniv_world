import game from "../index";
import Config from "../Config";

// ref : https://stackoverflow.com/questions/56981851/cannot-resume-game-after-pausing

let level_scene_paused = false;
let level_time_paused = Date.now() - 100;

export function level_pause(scene) {
  if (Date.now() - level_time_paused > 100 && game.scene.isActive(scene)) {
    game.scene.pause(scene);
    level_time_paused = Date.now();
    level_scene_paused = scene;

    toggleLevelScreen(game.scene.getScene(scene), true);
    game.scene.getScene(scene).m_nextLevelSound.play();
  }
}

document.addEventListener("keydown", function (event) {
  if (
    (event.key === "Enter") &&
    Date.now() - level_time_paused > 100 &&
    level_scene_paused
  ) {
    const previousScene = game.scene.getScene(level_scene_paused);
    game.scene.resume(level_scene_paused);
    toggleLevelScreen(previousScene, false);
    previousScene.m_pauseOutSound.play();
    previousScene.afterLevelUp();
    level_scene_paused = false;
    level_time_paused = Date.now();
  }
});

// level up 했을 때의 화면을 만들어줍니다.
export function createLevelScreen(scene) {
  const texts = [
    "You're on the Next Level!",
    "",
    "Press Enter to Keep Going",
  ];
  scene.m_textLevel = scene.add
    .text(Config.width / 2, Config.height / 2, texts, { fontSize: 40 })
    .setOrigin(0.5)
    .setDepth(120)
    .setScrollFactor(0);

  // 처음에는 보이지 않게 감춰줍니다.
  toggleLevelScreen(scene, false);
}

export function toggleLevelScreen(scene, isVisible) {
  scene.m_veil.setVisible(isVisible);
  scene.m_textLevel.setVisible(isVisible);
}