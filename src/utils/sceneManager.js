export function loseGame(playingScene) {
  playingScene.m_gameOverSound.play();
  playingScene.scene.start("gameOverScene", {
    mobKilled: playingScene.m_topBar.m_score,
    level: playingScene.m_topBar.m_level,
    secondElapsed: playingScene.m_secondElapsed,
  });
}

export function winGame(playingScene) {
  // playingScene.m_gameOverSound.play();
  playingScene.scene.start("gameClearScene", {
    mobKilled: playingScene.m_topBar.m_score,
    level: playingScene.m_topBar.m_level,
    secondElapsed: playingScene.m_secondElapsed,
  });
}