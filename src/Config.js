import LoadingScene from "./scenes/LoadingScene";
import MainScene from "./scenes/MainScene";
import PlayingScene from "./scenes/PlayingScene";
import GameOverScene from "./scenes/GameoverScene";
import GameClearScene from "./scenes/GameClearScene";
// import 'dotenv/config';

const Config = {
  // 맵 크기
  width: 800,
  height: 600,
  backgroundColor: 0x000000,
  // 사용할 scene은 여기 배열에 추가해줘야 함
  scene: [LoadingScene, MainScene, PlayingScene, GameOverScene, GameClearScene],
  // pixelArt를 사용할 경우 여기서 true로 설정해야 선명하게 보임
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: process.env.DEBUG === "true",
    },
  },
};

export default Config;
