// Holds the user's role choice ('Boyfriend', 'Girlfriend', 'Partner', or 'Human')
let selectedRole = '';

/**
 * Handles picking a role, updates state, and advances to the alert screen.
 * @param {string} role
 */
function selectRole(role) {
  selectedRole = role;

  const selectionScreen = document.getElementById('selection-screen');
  const openScreen = document.getElementById('open-screen');

  if (selectionScreen && openScreen) {
    selectionScreen.classList.add('hidden');
    openScreen.classList.remove('hidden');
  }
}

/**
 * Injects chosen role and reveals the letter screen.
 */
function revealLetter() {
  const chosenRoleSpan = document.getElementById('chosen-role');
  const openScreen = document.getElementById('open-screen');
  const letterScreen = document.getElementById('letter-screen');

  if (chosenRoleSpan) {
    chosenRoleSpan.textContent = selectedRole;
  }

  if (openScreen && letterScreen) {
    openScreen.classList.add('hidden');
    letterScreen.classList.remove('hidden');
  }
}

/**
 * Plays the attached soundtrack on loop at low volume (30%).
 */
function playBackgroundMusic() {
  const music = document.getElementById('bg-music');
  if (music) {
    music.volume = 0.3;
    music.currentTime = 0;
    const promise = music.play();
    if (promise !== undefined) {
      promise.catch(function(error) {
        console.warn('Playback error:', error);
      });
    }
  }
}

/**
 * Transitions to celebration screen and starts the audio.
 */
function celebrateYes() {
  const letterScreen = document.getElementById('letter-screen');
  const celebrationScreen = document.getElementById('celebration-screen');
  const windowTitle = document.getElementById('window-title');

  // Trigger audio playback inside the click event
  playBackgroundMusic();

  if (letterScreen && celebrationScreen) {
    letterScreen.classList.add('hidden');
    celebrationScreen.classList.remove('hidden');
  }

  if (windowTitle) {
    windowTitle.textContent = '★ YESSSSSSSSSAGYHWEIAGJWL ❤️ ★';
  }
}
