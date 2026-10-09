// ===== I-EDIT MO DITO =====
const CONFIG = {
  title: "",
  // Gamitin ang \n para sa bagong linya
  message: "Happy birthday to the coolest girl I’ve ever met I just want you to know how proud I am of all your achievements in life. I’ll always be here to cheer you on, clap for every achievement you make, and help you whenever you need me. Keep being amazing You deserve all the good things coming your way!",
  // Ilagay ang path ng mp3 mo, hal. "assets/music.mp3".
  // Kapag blangko, gagamitin ang built-in na music-box na tugtog.
  musicFile: "assets/music.mp3",
  musicVolume: 0.6
};
// ==========================

const scene = document.getElementById('scene');
const btn = document.getElementById('btn');
const snd = document.getElementById('snd');
document.getElementById('title').textContent = CONFIG.title;
document.getElementById('msg').textContent = CONFIG.message;

let wanted = true;
let audio = null;
if (CONFIG.musicFile) {
  audio = new Audio(CONFIG.musicFile);
  audio.loop = true;
  audio.volume = CONFIG.musicVolume;
  audio.addEventListener('error', () => {
    audio = null;
    if (wanted && scene.classList.contains('open')) startSynth();
  });
}

// Built-in music box (Web Audio)
let ctx, timer = null, step = 0;
const notes = [523.25,659.25,783.99,659.25,587.33,698.46,880,698.46,523.25,659.25,783.99,1046.5,880,783.99,659.25,587.33];
function tone(f, t) {
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = 'sine'; o.frequency.value = f;
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(0.12, t + 0.02);
  g.gain.exponentialRampToValueAtTime(0.001, t + 1.2);
  o.connect(g); g.connect(ctx.destination);
  o.start(t); o.stop(t + 1.3);
}
function startMusic() {
  if (audio) {
    audio.play().catch((err) => {
      // Kapag hindi mabasa ang mp3, music-box ang gagamitin para hindi tahimik
      if (err && err.name === 'NotSupportedError') { audio = null; startSynth(); }
    });
    return;
  }
  startSynth();
}
function startSynth() {
  try {
    ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
    ctx.resume();
    if (timer) return;
    timer = setInterval(() => { tone(notes[step % notes.length], ctx.currentTime + 0.05); step++; }, 550);
  } catch (e) {}
}
function stopMusic(reset) {
  if (audio) { audio.pause(); if (reset) audio.currentTime = 0; }
  clearInterval(timer); timer = null;
}

btn.addEventListener('click', () => {
  const open = scene.classList.toggle('open');
  btn.textContent = open ? 'Close' : 'Open';
  if (open) { if (wanted) startMusic(); }   // tutugtog lang kapag nag-Open
  else { stopMusic(true); }                 // titigil kapag nag-Close
});
snd.addEventListener('click', () => {
  wanted = !wanted;
  snd.textContent = wanted ? '🔊' : '🔇';
  if (wanted && scene.classList.contains('open')) startMusic(); else stopMusic();
});
