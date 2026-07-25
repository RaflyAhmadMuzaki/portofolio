const SoundEngine = (() => {
  let audioCtx = null;
  let isMuted = localStorage.getItem('cyber_portfolio_muted') === 'true';

  function getContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playTone(freq, type = 'sine', duration = 0.1, gainVal = 0.05, rampEnd = 0.001) {
    if (isMuted) return;
    try {
      const ctx = getContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(rampEnd, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {}
  }

  return {
    playHover() {
      if (isMuted) return;
      try {
        const ctx = getContext();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.06);

        gain.gain.setValueAtTime(0.02, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.06);
      } catch (e) {}
    },

    playClick() {
      if (isMuted) return;
      try {
        const ctx = getContext();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1200, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.08);

        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      } catch (e) {}
    },

    playKeypress() {
      playTone(600 + Math.random() * 200, 'square', 0.03, 0.015);
    },

    playModalOpen() {
      if (isMuted) return;
      try {
        const ctx = getContext();
        if (!ctx) return;
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
          setTimeout(() => {
            playTone(freq, 'sine', 0.15, 0.04);
          }, idx * 40);
        });
      } catch (e) {}
    },

    playModalClose() {
      if (isMuted) return;
      try {
        const ctx = getContext();
        if (!ctx) return;
        [1046.50, 783.99, 659.25, 523.25].forEach((freq, idx) => {
          setTimeout(() => {
            playTone(freq, 'sine', 0.12, 0.03);
          }, idx * 30);
        });
      } catch (e) {}
    },

    playSkillFill() {
      playTone(880, 'sine', 0.2, 0.03);
    },

    toggleMute() {
      isMuted = !isMuted;
      localStorage.setItem('cyber_portfolio_muted', isMuted);
      if (!isMuted) {
        this.playClick();
      }
      return isMuted;
    },

    getIsMuted() {
      return isMuted;
    }
  };
})();
