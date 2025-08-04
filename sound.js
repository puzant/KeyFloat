const SOUND_POOL_SIZE = 5;
const clickSounds = Array.from({ length: SOUND_POOL_SIZE }, () => new Audio(chrome.runtime.getURL("assets/key-press-sound.mp3")));

let currentSoundIndex = 0;

const playClickSound = () => {
  const sound = clickSounds[currentSoundIndex];
  sound.pause();
  sound.currentTime = 0;
  sound.play();
  currentSoundIndex = (currentSoundIndex + 1) % SOUND_POOL_SIZE;
}

export default playClickSound