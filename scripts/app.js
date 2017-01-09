import startScreen from './components/levels/start-screen/start-screen';
import Player from './components/player/player';
var currentLevel = window.currentLevel = startScreen;
var player = window.player = new Player();

currentLevel = startScreen;
player.init();
