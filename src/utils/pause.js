import game from "../index";
import Config from "../Config";

let global_scene_paused = false;
let global_time_paused = Date.now() - 100;

export function global_pause(scene) {
  if (Date.now() - global_time_paused > 100 && game.scene.isActive(scene)) {
    game.scene.pause(scene);
    global_time_paused = Date.now();
    global_scene_paused = scene;

    // game.scene.getScene(scene).togglePauseScreen(true);
    togglePauseScreen(game.scene.getScene(global_scene_paused), true);
    game.scene.getScene(scene).m_pauseInSound.play();
  }
}

document.addEventListener("keydown", function (event) {
  if (
    event.key === "Escape" &&
    Date.now() - global_time_paused > 100 &&
    global_scene_paused
  ) {
    game.scene.resume(global_scene_paused);
    // game.scene.getScene(global_scene_paused).togglePauseScreen(false);
    togglePauseScreen(game.scene.getScene(global_scene_paused), false);
    game.scene
      .getScene(global_scene_paused)
      .m_pauseOutSound.play();
    global_scene_paused = false;
    global_time_paused = Date.now();
  }
});

// 일시정지 했을 때의 화면을 만들어줍니다.
export function createPauseScreen(scene) {
  scene.m_textPause = scene.add
    .text(Config.width / 2, Config.height / 2, "Pause", { fontSize: 50 })
    .setOrigin(0.5)
    .setDepth(120)
    .setScrollFactor(0);

  // 처음에는 보이지 않게 감춰줍니다.
  togglePauseScreen(scene, false);
}

export function togglePauseScreen(scene, isVisible) {
  scene.m_veil.setVisible(isVisible);
  scene.m_textPause.setVisible(isVisible);
}