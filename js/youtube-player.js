/**
 * Chhath Geet Gatha — Audio Player (Replaced YouTube with pure native local audio engine)
 */
// Load native audio engine
if (typeof playSongFromDB === 'undefined') {
  const s = document.createElement('script');
  s.src = 'js/audio-player.js';
  document.head.appendChild(s);
}
