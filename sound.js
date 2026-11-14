// ==========================================================================
// ALGEBRA & SPLDV NEXUS - FUTURISTIC WEB AUDIO SYNTHESIZER
// Zero external audio files needed; generates crisp sci-fi game SFX on the fly
// ==========================================================================

window.NexusSound = (function () {
  let ctx = null;
  let isMuted = localStorage.getItem('nexus_math_muted') === 'true';

  function getContext() {
    if (!ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        ctx = new AudioCtx();
      }
    }
    if (ctx && ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }
    return ctx;
  }

  function playTone(freq, type, duration, startTimeOffset = 0, gainVal = 0.12, endFreq = null) {
    if (isMuted) return;
    try {
      const audio = getContext();
      if (!audio) return;
      const now = audio.currentTime + startTimeOffset;
      const osc = audio.createOscillator();
      const gain = audio.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);
      if (endFreq) {
        osc.frequency.exponentialRampToValueAtTime(endFreq, now + duration);
      }

      gain.gain.setValueAtTime(gainVal, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      osc.connect(gain);
      gain.connect(audio.destination);

      osc.start(now);
      osc.stop(now + duration);
    } catch (e) {
      // Ignore audio errors if blocked by browser autoplay policy
    }
  }

  return {
    isMuted: () => isMuted,
    toggleMute: () => {
      isMuted = !isMuted;
      localStorage.setItem('nexus_math_muted', String(isMuted));
      if (!isMuted) {
        playTone(660, 'sine', 0.1, 0, 0.1, 880);
      }
      return isMuted;
    },
    click: () => {
      playTone(520, 'sine', 0.06, 0, 0.07, 740);
    },
    dragPickup: () => {
      playTone(380, 'sine', 0.07, 0, 0.08, 580);
    },
    dropSnap: () => {
      playTone(620, 'triangle', 0.09, 0, 0.12, 920);
    },
    correct: () => {
      playTone(523.25, 'triangle', 0.12, 0, 0.14);      // C5
      playTone(659.25, 'triangle', 0.12, 0.08, 0.14);   // E5
      playTone(783.99, 'triangle', 0.15, 0.16, 0.15);   // G5
      playTone(1046.5, 'sine', 0.28, 0.24, 0.16);       // C6
    },
    wrong: () => {
      playTone(240, 'sawtooth', 0.16, 0, 0.11, 180);
      playTone(175, 'sawtooth', 0.25, 0.14, 0.11, 130);
    },
    laserAttack: () => {
      playTone(980, 'sawtooth', 0.18, 0, 0.14, 220);
      playTone(640, 'square', 0.22, 0.12, 0.14, 110);
      playTone(880, 'triangle', 0.25, 0.2, 0.16, 1320);
    },
    heroHurt: () => {
      playTone(190, 'sawtooth', 0.22, 0, 0.16, 85);
      playTone(140, 'square', 0.28, 0.12, 0.15, 65);
    },
    bossDefeated: () => {
      const notes = [392, 523.25, 659.25, 783.99, 1046.5, 1318.51];
      notes.forEach((n, idx) => {
        playTone(n, 'triangle', 0.2, idx * 0.08, 0.16);
      });
    },
    completeModule: () => {
      playTone(440, 'sine', 0.1, 0, 0.12);
      playTone(554.37, 'sine', 0.1, 0.09, 0.12);
      playTone(659.25, 'sine', 0.12, 0.18, 0.13);
      playTone(880, 'triangle', 0.3, 0.27, 0.16);
    },
    levelUp: () => {
      const notes = [440, 554.37, 659.25, 880, 1108.73, 1318.51];
      notes.forEach((n, idx) => {
        playTone(n, 'triangle', 0.16, idx * 0.07, 0.15);
      });
    }
  };
})();
