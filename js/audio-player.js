/**
 * Chhath Geet Gatha — High-Performance Native HTML5 Audio Player Engine
 * Direct offline/local MP3 playback from the music/ folder with zero external dependencies.
 * Full MediaSession API, Lock Screen Controls, Queue Manager & Floating Player Bar.
 */

// ═══════════════════════════════════════════════
// GLOBAL AUDIO PLAYER STATE
// ═══════════════════════════════════════════════
let nativeAudio = null;
let playerCurrentSong = null;
let playerQueue = [];
let playerQueueIndex = -1;
let playerIsPlaying = false;
let playerIsLooping = false;
let playerIsShuffled = false;
let playerIsMuted = false;
let playerVolume = parseInt(localStorage.getItem('cg_volume') || '85');
let isQueueOpen = false;

// ═══════════════════════════════════════════════
// AUDIO INSTANCE INITIALIZATION
// ═══════════════════════════════════════════════
function getAudioInstance() {
  if (!nativeAudio) {
    nativeAudio = new Audio();
    nativeAudio.volume = playerVolume / 100;
    nativeAudio.preload = 'auto';

    // Events
    nativeAudio.addEventListener('play', () => {
      playerIsPlaying = true;
      updatePlayerUI();
      if (typeof onSongPlay === 'function') onSongPlay();
    });

    nativeAudio.addEventListener('pause', () => {
      playerIsPlaying = false;
      updatePlayerUI();
      if (typeof onSongPause === 'function') onSongPause();
    });

    nativeAudio.addEventListener('timeupdate', () => {
      updateProgressUI();
    });

    nativeAudio.addEventListener('ended', () => {
      if (playerIsLooping) {
        nativeAudio.currentTime = 0;
        nativeAudio.play().catch(() => {});
      } else {
        playNextInQueue();
      }
    });

    nativeAudio.addEventListener('error', (e) => {
      console.warn('Audio error on track:', playerCurrentSong ? playerCurrentSong.title : 'unknown', e);
    });
  }
  return nativeAudio;
}

// ═══════════════════════════════════════════════
// CORE PLAYBACK FUNCTIONS
// ═══════════════════════════════════════════════

function playSongById(songId) {
  if (typeof SONGS_DB === 'undefined') return;
  const song = SONGS_DB.find(s => s.id === songId);
  if (song) playSongFromDB(song);
}

function playSongFromDB(song, queue, queueIndex) {
  if (!song) return;

  const audio = getAudioInstance();
  playerCurrentSong = song;

  // Manage Queue
  if (queue && Array.isArray(queue) && queue.length > 0) {
    playerQueue = [...queue];
    playerQueueIndex = queueIndex !== undefined ? queueIndex : playerQueue.findIndex(s => s.id === song.id);
  } else if (playerQueue.length === 0 && typeof SONGS_DB !== 'undefined') {
    playerQueue = [...SONGS_DB];
    playerQueueIndex = playerQueue.findIndex(s => s.id === song.id);
  } else {
    playerQueueIndex = playerQueue.findIndex(s => s.id === song.id);
    if (playerQueueIndex === -1 && typeof SONGS_DB !== 'undefined') {
      playerQueue = [...SONGS_DB];
      playerQueueIndex = playerQueue.findIndex(s => s.id === song.id);
    }
  }

  if (playerQueueIndex === -1) playerQueueIndex = 0;

  // Set audio source
  const src = song.src || ('music/' + encodeURIComponent(song.file));
  audio.src = src;
  audio.currentTime = 0;
  audio.load();

  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.catch(err => {
      console.warn('Autoplay prevented or audio load pending user interaction:', err);
    });
  }

  playerIsPlaying = true;

  // Setup UI
  ensurePlayerUI();
  showMiniPlayer();
  updatePlayerUI();

  // Setup MediaSession for lock screen controls
  updateMediaSession(song);

  // Notify page-specific hooks
  if (typeof onSongChanged === 'function') onSongChanged(song);
  if (typeof onSongPlay === 'function') onSongPlay();

  // Custom Event
  window.dispatchEvent(new CustomEvent('chhathSongChange', { detail: { song, queue: playerQueue, index: playerQueueIndex } }));
}

function togglePlayPause() {
  const audio = getAudioInstance();

  if (!playerCurrentSong) {
    if (typeof SONGS_DB !== 'undefined' && SONGS_DB.length > 0) {
      playSongFromDB(SONGS_DB[0]);
    }
    return;
  }

  if (audio.paused) {
    audio.play().catch(() => {});
    playerIsPlaying = true;
    if (typeof onSongPlay === 'function') onSongPlay();
  } else {
    audio.pause();
    playerIsPlaying = false;
    if (typeof onSongPause === 'function') onSongPause();
  }

  updatePlayerUI();
}

function playNextInQueue() {
  if (playerQueue.length === 0) {
    if (typeof SONGS_DB !== 'undefined') playerQueue = [...SONGS_DB];
    else return;
  }

  if (playerIsShuffled) {
    playerQueueIndex = Math.floor(Math.random() * playerQueue.length);
  } else {
    playerQueueIndex = (playerQueueIndex + 1) % playerQueue.length;
  }

  playSongFromDB(playerQueue[playerQueueIndex], playerQueue, playerQueueIndex);
}

function playPrevInQueue() {
  const audio = getAudioInstance();
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    return;
  }

  if (playerQueue.length === 0) {
    if (typeof SONGS_DB !== 'undefined') playerQueue = [...SONGS_DB];
    else return;
  }

  playerQueueIndex = (playerQueueIndex - 1 + playerQueue.length) % playerQueue.length;
  playSongFromDB(playerQueue[playerQueueIndex], playerQueue, playerQueueIndex);
}

function seekTo(percent) {
  const audio = getAudioInstance();
  if (audio.duration && !isNaN(audio.duration)) {
    audio.currentTime = percent * audio.duration;
    updateProgressUI();
  }
}

function setVolume(vol) {
  playerVolume = Math.max(0, Math.min(100, vol));
  playerIsMuted = (playerVolume === 0);
  const audio = getAudioInstance();
  audio.volume = playerVolume / 100;
  audio.muted = playerIsMuted;

  try {
    localStorage.setItem('cg_volume', playerVolume.toString());
  } catch (e) {}
  updateVolumeUI();
}

function toggleMute() {
  playerIsMuted = !playerIsMuted;
  const audio = getAudioInstance();
  audio.muted = playerIsMuted;
  updateVolumeUI();
}

function toggleLoop() {
  playerIsLooping = !playerIsLooping;
  const loopBtn = document.getElementById('cg-btn-loop');
  if (loopBtn) loopBtn.classList.toggle('active', playerIsLooping);
  return playerIsLooping;
}

function toggleShuffle() {
  playerIsShuffled = !playerIsShuffled;
  const shuffleBtn = document.getElementById('cg-btn-shuffle');
  if (shuffleBtn) shuffleBtn.classList.toggle('active', playerIsShuffled);
  return playerIsShuffled;
}

// ═══════════════════════════════════════════════
// MEDIA SESSION API (System Lock Screen Controls)
// ═══════════════════════════════════════════════

function updateMediaSession(song) {
  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: song.title,
      artist: `${song.titleHi} • ${song.artist}`,
      album: 'Chhath Geet Gatha',
      artwork: [
        { src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">☀️</text></svg>', sizes: '96x96', type: 'image/svg+xml' }
      ]
    });

    navigator.mediaSession.setActionHandler('play', togglePlayPause);
    navigator.mediaSession.setActionHandler('pause', togglePlayPause);
    navigator.mediaSession.setActionHandler('previoustrack', playPrevInQueue);
    navigator.mediaSession.setActionHandler('nexttrack', playNextInQueue);
  }
}

// ═══════════════════════════════════════════════
// TIME & PROGRESS FORMATTING
// ═══════════════════════════════════════════════

function formatPlayerTime(seconds) {
  if (!seconds || isNaN(seconds) || seconds < 0) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function updateProgressUI() {
  const audio = getAudioInstance();
  const current = audio.currentTime || 0;
  const duration = audio.duration || 0;
  const percent = duration > 0 ? (current / duration) * 100 : 0;

  const fill = document.getElementById('cg-progress-fill');
  if (fill) fill.style.width = `${percent}%`;

  const currText = document.getElementById('cg-current-time');
  if (currText) currText.textContent = formatPlayerTime(current);

  const durText = document.getElementById('cg-total-time');
  if (durText && duration > 0) durText.textContent = formatPlayerTime(duration);

  // Hook for pages (like player.html vinyl disc & progress)
  if (typeof onProgressUpdate === 'function') {
    onProgressUpdate(current, duration, percent);
  }
}

// ═══════════════════════════════════════════════
// DOM UI CREATION (Lovable-Style Native Player)
// ═══════════════════════════════════════════════

function ensurePlayerUI() {
  if (document.getElementById('cg-master-player-container')) return;

  injectPlayerStyles();

  const container = document.createElement('div');
  container.id = 'cg-master-player-container';
  container.innerHTML = `
    <!-- Up Next Queue Slide-up Drawer -->
    <div id="cg-queue-drawer" class="cg-drawer-closed">
      <div class="cg-queue-header">
        <div class="cg-queue-title">
          <span>🎵 Up Next</span>
          <span class="cg-q-count">(<span id="cg-drawer-queue-count">0</span> Songs)</span>
        </div>
        <button id="cg-queue-close" class="cg-icon-btn" title="Close Queue">✕</button>
      </div>
      <div class="cg-queue-body" id="cg-drawer-queue-list"></div>
    </div>

    <!-- Bottom Player Dock -->
    <div id="cg-player-bar">
      <!-- Full-width Progress Bar -->
      <div id="cg-progress-bar" class="cg-progress-track">
        <div id="cg-progress-fill" class="cg-progress-fill"></div>
      </div>

      <div class="cg-player-inner">
        <!-- Left: Track Info & Animated Equalizer -->
        <div class="cg-track-info">
          <div class="cg-thumb-container" id="cg-thumb-box">
            <div class="cg-thumb-art">☀️</div>
            <div class="cg-soundwave" id="cg-soundwave">
              <span></span><span></span><span></span><span></span>
            </div>
          </div>
          <div class="cg-track-meta">
            <div class="cg-track-title" id="cg-track-title">Select a song to play</div>
            <div class="cg-track-sub">
              <span id="cg-track-hi" class="hindi-text">छठ गीत</span>
              <span class="cg-dot">·</span>
              <span id="cg-track-artist">Chhath Geet Gatha</span>
            </div>
          </div>
        </div>

        <!-- Center: Playback Controls & Scrubber -->
        <div class="cg-player-center">
          <div class="cg-main-controls">
            <button class="cg-ctrl-btn" id="cg-btn-shuffle" title="Shuffle (🔀)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>
            </button>
            <button class="cg-ctrl-btn" id="cg-btn-prev" title="Previous Song">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
            </button>
            <button class="cg-ctrl-btn cg-btn-play" id="cg-btn-play" title="Play/Pause">
              <svg class="cg-play-icon" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              <svg class="cg-pause-icon" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style="display:none"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
            </button>
            <button class="cg-ctrl-btn" id="cg-btn-next" title="Next Song">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 6v12h2V6zm-3.5 6L4 18V6z"/></svg>
            </button>
            <button class="cg-ctrl-btn" id="cg-btn-loop" title="Repeat/Loop (🔁)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
            </button>
          </div>

          <!-- Timeline Scrubber -->
          <div class="cg-scrubber-row">
            <span class="cg-time-text" id="cg-current-time">0:00</span>
            <div class="cg-scrub-bar" id="cg-scrub-bar">
              <div class="cg-scrub-fill" id="cg-scrub-fill"></div>
            </div>
            <span class="cg-time-text" id="cg-total-time">0:00</span>
          </div>
        </div>

        <!-- Right: Actions, Volume & Queue Toggle -->
        <div class="cg-player-right">
          <div class="cg-volume-box">
            <button class="cg-ctrl-btn cg-vol-icon" id="cg-btn-vol" title="Mute/Unmute">
              <svg id="cg-vol-high" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
              <svg id="cg-vol-muted" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:none"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
            </button>
            <input type="range" id="cg-vol-slider" min="0" max="100" value="${playerVolume}" class="cg-vol-slider" />
          </div>

          <!-- Queue Drawer Button -->
          <button class="cg-ctrl-btn cg-pill-btn" id="cg-btn-queue" title="View Queue">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
            <span class="cg-btn-label">Queue</span>
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(container);
  bindPlayerEvents();
}

function bindPlayerEvents() {
  document.getElementById('cg-btn-play')?.addEventListener('click', togglePlayPause);
  document.getElementById('cg-btn-prev')?.addEventListener('click', playPrevInQueue);
  document.getElementById('cg-btn-next')?.addEventListener('click', playNextInQueue);
  document.getElementById('cg-btn-loop')?.addEventListener('click', toggleLoop);
  document.getElementById('cg-btn-shuffle')?.addEventListener('click', toggleShuffle);

  document.getElementById('cg-btn-vol')?.addEventListener('click', toggleMute);
  document.getElementById('cg-vol-slider')?.addEventListener('input', (e) => {
    setVolume(parseInt(e.target.value));
  });

  const handleSeek = (e, track) => {
    const rect = track.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    seekTo(percent);
  };

  const progBar = document.getElementById('cg-progress-bar');
  if (progBar) progBar.addEventListener('click', (e) => handleSeek(e, progBar));

  const scrubBar = document.getElementById('cg-scrub-bar');
  if (scrubBar) scrubBar.addEventListener('click', (e) => handleSeek(e, scrubBar));

  // Queue Drawer Toggle
  const queueBtn = document.getElementById('cg-btn-queue');
  const queueDrawer = document.getElementById('cg-queue-drawer');
  const queueClose = document.getElementById('cg-queue-close');

  queueBtn?.addEventListener('click', () => {
    isQueueOpen = !isQueueOpen;
    queueDrawer.classList.toggle('cg-drawer-open', isQueueOpen);
    queueBtn.classList.toggle('active', isQueueOpen);
    if (isQueueOpen) renderQueueDrawer();
  });

  queueClose?.addEventListener('click', () => {
    isQueueOpen = false;
    queueDrawer.classList.remove('cg-drawer-open');
    queueBtn.classList.remove('active');
  });

  // Global Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (['input', 'textarea', 'select'].includes(e.target.tagName.toLowerCase())) return;
    if (e.code === 'Space') {
      e.preventDefault();
      togglePlayPause();
    } else if (e.code === 'ArrowRight' && e.shiftKey) {
      playNextInQueue();
    } else if (e.code === 'ArrowLeft' && e.shiftKey) {
      playPrevInQueue();
    } else if (e.key === 'm' || e.key === 'M') {
      toggleMute();
    }
  });
}

function showMiniPlayer() {
  const bar = document.getElementById('cg-player-bar');
  if (bar) bar.classList.add('cg-bar-visible');
  document.body.classList.add('mini-player-active');
}

function updatePlayerUI() {
  if (!playerCurrentSong) return;

  const song = playerCurrentSong;

  const titleEl = document.getElementById('cg-track-title');
  if (titleEl) titleEl.textContent = song.title;

  const hiEl = document.getElementById('cg-track-hi');
  if (hiEl) hiEl.textContent = song.titleHi;

  const artistEl = document.getElementById('cg-track-artist');
  if (artistEl) artistEl.textContent = song.artist;

  const playIcon = document.querySelector('.cg-play-icon');
  const pauseIcon = document.querySelector('.cg-pause-icon');
  const soundwave = document.getElementById('cg-soundwave');

  if (playIcon && pauseIcon) {
    playIcon.style.display = playerIsPlaying ? 'none' : 'block';
    pauseIcon.style.display = playerIsPlaying ? 'block' : 'none';
  }

  if (soundwave) {
    soundwave.classList.toggle('active', playerIsPlaying);
  }

  // Update legacy elements if any
  const legacyPlay = document.querySelector('.pp-play');
  const legacyPause = document.querySelector('.pp-pause');
  if (legacyPlay && legacyPause) {
    legacyPlay.style.display = playerIsPlaying ? 'none' : 'block';
    legacyPause.style.display = playerIsPlaying ? 'block' : 'none';
  }
}

function updateVolumeUI() {
  const highIcon = document.getElementById('cg-vol-high');
  const mutedIcon = document.getElementById('cg-vol-muted');
  const slider = document.getElementById('cg-vol-slider');

  if (slider) slider.value = playerIsMuted ? 0 : playerVolume;
  if (highIcon && mutedIcon) {
    highIcon.style.display = playerIsMuted || playerVolume === 0 ? 'none' : 'block';
    mutedIcon.style.display = playerIsMuted || playerVolume === 0 ? 'block' : 'none';
  }
}

function renderQueueDrawer() {
  const container = document.getElementById('cg-drawer-queue-list');
  const countEl = document.getElementById('cg-drawer-queue-count');
  if (!container) return;

  if (countEl) countEl.textContent = playerQueue.length;

  container.innerHTML = playerQueue.map((s, i) => `
    <div class="cg-drawer-item ${playerCurrentSong && playerCurrentSong.id === s.id ? 'active' : ''}" data-index="${i}">
      <span class="cg-q-num">${i + 1}</span>
      <div class="cg-q-info">
        <div class="cg-q-title">${s.title}</div>
        <div class="cg-q-sub">${s.titleHi} · ${s.artist}</div>
      </div>
      <button class="cg-q-play-btn">${playerCurrentSong && playerCurrentSong.id === s.id && playerIsPlaying ? '⏸' : '▶'}</button>
    </div>
  `).join('');

  container.querySelectorAll('.cg-drawer-item').forEach(item => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.dataset.index);
      if (playerQueue[idx]) {
        playSongFromDB(playerQueue[idx], playerQueue, idx);
        renderQueueDrawer();
      }
    });
  });
}

// ═══════════════════════════════════════════════
// STYLES INJECTION (Lovable Glassmorphism Player)
// ═══════════════════════════════════════════════

function injectPlayerStyles() {
  if (document.getElementById('cg-player-styles')) return;

  const style = document.createElement('style');
  style.id = 'cg-player-styles';
  style.textContent = `
    #cg-player-bar {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(18, 10, 6, 0.96);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border-top: 1px solid rgba(255, 107, 0, 0.3);
      z-index: 9999;
      transform: translateY(110%);
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: 0 -8px 40px rgba(0, 0, 0, 0.75), 0 0 20px rgba(255, 107, 0, 0.15);
    }
    #cg-player-bar.cg-bar-visible {
      transform: translateY(0);
    }

    body.mini-player-active {
      padding-bottom: 95px !important;
    }

    .cg-progress-track {
      height: 4px;
      background: rgba(255, 255, 255, 0.1);
      cursor: pointer;
      position: relative;
      transition: height 0.2s ease;
    }
    .cg-progress-track:hover {
      height: 7px;
    }
    .cg-progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #FF4500, #FF6B00, #FFB300);
      width: 0%;
      box-shadow: 0 0 10px rgba(255, 107, 0, 0.9);
      position: relative;
    }
    .cg-progress-fill::after {
      content: '';
      position: absolute;
      right: -5px;
      top: 50%;
      transform: translateY(-50%);
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background: #FFF;
      box-shadow: 0 0 10px rgba(255, 107, 0, 1);
      opacity: 0;
      transition: opacity 0.2s;
    }
    .cg-progress-track:hover .cg-progress-fill::after {
      opacity: 1;
    }

    .cg-player-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      max-width: 1360px;
      margin: 0 auto;
      padding: 10px 24px;
      height: 76px;
    }

    .cg-track-info {
      display: flex;
      align-items: center;
      gap: 14px;
      width: 30%;
      min-width: 200px;
    }
    .cg-thumb-container {
      width: 50px;
      height: 50px;
      border-radius: 10px;
      overflow: hidden;
      position: relative;
      flex-shrink: 0;
      background: linear-gradient(135deg, #FF6B00, #FFB300);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    }
    .cg-thumb-art {
      font-size: 1.6rem;
    }
    .cg-soundwave {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3px;
      opacity: 0;
      transition: opacity 0.3s;
    }
    .cg-soundwave.active {
      opacity: 1;
    }
    .cg-soundwave span {
      width: 3px;
      height: 14px;
      background: #FFB300;
      border-radius: 2px;
      animation: cg-wave 0.8s ease-in-out infinite alternate;
    }
    .cg-soundwave span:nth-child(2) { animation-delay: 0.2s; height: 20px; }
    .cg-soundwave span:nth-child(3) { animation-delay: 0.4s; height: 16px; }
    .cg-soundwave span:nth-child(4) { animation-delay: 0.1s; height: 10px; }
    @keyframes cg-wave {
      0% { transform: scaleY(0.3); }
      100% { transform: scaleY(1.2); }
    }

    .cg-track-meta {
      min-width: 0;
      overflow: hidden;
    }
    .cg-track-title {
      font-size: 14px;
      font-weight: 600;
      color: #FFF5E4;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 2px;
    }
    .cg-track-sub {
      font-size: 12px;
      color: rgba(255, 245, 228, 0.6);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .cg-dot { color: rgba(255, 107, 0, 0.8); }

    .cg-player-center {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      flex: 1;
      max-width: 540px;
    }
    .cg-main-controls {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .cg-ctrl-btn {
      background: transparent;
      border: none;
      color: #E0D4C3;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: all 0.2s ease;
      padding: 6px;
    }
    .cg-ctrl-btn:hover {
      color: #FFB300;
      transform: scale(1.1);
    }
    .cg-ctrl-btn.active {
      color: #FF6B00;
    }
    .cg-btn-play {
      width: 44px;
      height: 44px;
      background: linear-gradient(135deg, #FF6B00, #FFA700);
      color: #0D0805;
      box-shadow: 0 0 20px rgba(255, 107, 0, 0.5);
    }
    .cg-btn-play:hover {
      transform: scale(1.12);
      box-shadow: 0 0 28px rgba(255, 107, 0, 0.8);
      color: #000;
    }

    .cg-scrubber-row {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
    }
    .cg-time-text {
      font-size: 11px;
      font-family: var(--font-primary, 'Inter', sans-serif);
      color: rgba(255, 245, 228, 0.55);
      min-width: 34px;
    }
    .cg-scrub-bar {
      flex: 1;
      height: 4px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 2px;
      cursor: pointer;
      position: relative;
    }
    .cg-scrub-fill {
      height: 100%;
      background: #FF6B00;
      border-radius: 2px;
      width: 0%;
    }

    .cg-player-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 14px;
      width: 25%;
      min-width: 180px;
    }
    .cg-volume-box {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .cg-vol-slider {
      width: 75px;
      height: 4px;
      -webkit-appearance: none;
      background: rgba(255, 255, 255, 0.15);
      border-radius: 2px;
      outline: none;
      cursor: pointer;
    }
    .cg-vol-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #FFB300;
      cursor: pointer;
      box-shadow: 0 0 6px rgba(255, 107, 0, 0.8);
    }
    .cg-pill-btn {
      padding: 6px 14px;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 107, 0, 0.25);
      font-size: 12px;
      font-weight: 500;
      gap: 6px;
      color: #FFF5E4;
    }
    .cg-pill-btn:hover, .cg-pill-btn.active {
      background: rgba(255, 107, 0, 0.25);
      border-color: #FF6B00;
      color: #FFB300;
    }

    #cg-queue-drawer {
      position: fixed;
      bottom: 86px;
      right: 24px;
      width: 380px;
      max-height: 480px;
      background: rgba(18, 10, 6, 0.98);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 107, 0, 0.35);
      border-radius: 16px;
      box-shadow: 0 10px 50px rgba(0, 0, 0, 0.85);
      z-index: 9998;
      display: none;
      flex-direction: column;
      overflow: hidden;
    }
    #cg-queue-drawer.cg-drawer-open {
      display: flex;
    }
    .cg-queue-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 18px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }
    .cg-queue-title {
      font-size: 14px;
      font-weight: 600;
      color: #FFB300;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .cg-q-count {
      color: rgba(255, 245, 228, 0.5);
      font-size: 12px;
    }
    .cg-icon-btn {
      background: transparent;
      border: none;
      color: #FFF5E4;
      cursor: pointer;
      font-size: 14px;
    }
    .cg-queue-body {
      overflow-y: auto;
      padding: 8px;
      display: flex;
      flex-direction: column;
      gap: 4px;
      max-height: 400px;
    }
    .cg-drawer-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 12px;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .cg-drawer-item:hover {
      background: rgba(255, 107, 0, 0.15);
    }
    .cg-drawer-item.active {
      background: rgba(255, 107, 0, 0.28);
      border-left: 3px solid #FF6B00;
    }
    .cg-q-num {
      font-size: 11px;
      color: rgba(255, 245, 228, 0.5);
      width: 22px;
    }
    .cg-q-info {
      flex: 1;
      min-width: 0;
    }
    .cg-q-title {
      font-size: 13px;
      font-weight: 600;
      color: #FFF5E4;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .cg-q-sub {
      font-size: 11px;
      color: rgba(255, 245, 228, 0.5);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .cg-q-play-btn {
      background: transparent;
      border: none;
      color: #FFB300;
      cursor: pointer;
      font-size: 12px;
    }

    @media (max-width: 900px) {
      .cg-player-right .cg-volume-box { display: none; }
      .cg-track-info { width: 35%; }
    }
    @media (max-width: 680px) {
      .cg-player-inner {
        padding: 8px 14px;
        height: 68px;
      }
      .cg-player-right { display: none; }
      .cg-track-info { width: 60%; }
      .cg-player-center { width: 40%; max-width: none; }
      .cg-scrubber-row { display: none; }
      #cg-queue-drawer { width: calc(100vw - 32px); right: 16px; bottom: 80px; }
    }
  `;
  document.head.appendChild(style);
}

// ═══════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ensurePlayerUI);
} else {
  ensurePlayerUI();
}
