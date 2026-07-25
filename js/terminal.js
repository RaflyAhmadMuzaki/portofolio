const CommandTerminal = (() => {
  let modalElem, inputElem, outputElem;
  let history = [];
  let historyIndex = -1;

  function init() {
    modalElem = document.getElementById('terminal-modal');
    inputElem = document.getElementById('terminal-input');
    outputElem = document.getElementById('terminal-output');

    if (!modalElem || !inputElem || !outputElem) return;

    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        toggleTerminal();
      }
      if (e.key === 'Escape' && !modalElem.classList.contains('hidden')) {
        closeTerminal();
      }
    });

    inputElem.addEventListener('keydown', (e) => {
      SoundEngine.playKeypress();

      if (e.key === 'Enter') {
        const command = inputElem.value.trim();
        if (command) {
          executeCommand(command);
          history.push(command);
          historyIndex = history.length;
        }
        inputElem.value = '';
      } else if (e.key === 'ArrowUp') {
        if (historyIndex > 0) {
          historyIndex--;
          inputElem.value = history[historyIndex];
        }
      } else if (e.key === 'ArrowDown') {
        if (historyIndex < history.length - 1) {
          historyIndex++;
          inputElem.value = history[historyIndex];
        } else {
          historyIndex = history.length;
          inputElem.value = '';
        }
      }
    });

    const closeBtn = document.getElementById('terminal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeTerminal);
    }
  }

  function openTerminal() {
    modalElem.classList.remove('hidden');
    modalElem.classList.add('flex');
    inputElem.focus();
    SoundEngine.playModalOpen();
    if (outputElem.children.length === 0) {
      printLine("<span class='text-cyan-400 font-bold'>⚡ CYBER TERMINAL ONLINE</span>");
      printLine("Ketik <span class='text-neon-cyan font-bold'>'help'</span> untuk melihat panduan perintah.");
      printLine("-----------------------------------------------------------------");
    }
  }

  function closeTerminal() {
    modalElem.classList.add('hidden');
    modalElem.classList.remove('flex');
    SoundEngine.playModalClose();
  }

  function toggleTerminal() {
    if (modalElem.classList.contains('hidden')) {
      openTerminal();
    } else {
      closeTerminal();
    }
  }

  function printLine(htmlText) {
    const p = document.createElement('div');
    p.className = 'terminal-line my-1 font-mono text-sm leading-relaxed';
    p.innerHTML = htmlText;
    outputElem.appendChild(p);
    outputElem.scrollTop = outputElem.scrollHeight;
  }

  function executeCommand(cmdStr) {
    printLine(`<span class='text-emerald-400'>rafly@cyber-node:~ $</span> ${escapeHtml(cmdStr)}`);

    const parts = cmdStr.toLowerCase().split(' ');
    const cmd = parts[0];
    const arg = parts[1];

    switch (cmd) {
      case 'help':
        printLine("<span class='text-yellow-400 font-bold'>Perintah Terminal:</span>");
        printLine("  <span class='text-cyan-400'>about</span>      : Ringkasan profil Rafly");
        printLine("  <span class='text-cyan-400'>skills</span>     : Tampilkan statistik skill");
        printLine("  <span class='text-cyan-400'>theme</span>      : Ganti tema [cyan | violet | emerald | pink]");
        printLine("  <span class='text-cyan-400'>contact</span>    : Menuju bagian kontak");
        printLine("  <span class='text-cyan-400'>matrix</span>     : Jalankan simulasi kode Matrix");
        printLine("  <span class='text-cyan-400'>clear</span>      : Bersihkan layar terminal");
        printLine("  <span class='text-cyan-400'>exit</span>       : Tutup terminal");
        break;

      case 'about':
        printLine(`Nama : <span class='text-neon-cyan'>${PORTFOLIO_CONFIG.hero.name}</span>`);
        printLine(`Bio  : ${PORTFOLIO_CONFIG.hero.shortBio}`);
        break;

      case 'skills':
        printLine("<span class='text-cyan-400 font-bold'>-- REALISTIC SKILL LEVEL --</span>");
        PORTFOLIO_CONFIG.skills.forEach(s => {
          const filled = Math.round(s.level / 10);
          const bar = '█'.repeat(filled) + '░'.repeat(10 - filled);
          printLine(`${s.icon} ${s.name.padEnd(25, ' ')} [${bar}] ${s.level}%`);
        });
        break;

      case 'theme':
        if (['cyan', 'violet', 'emerald', 'pink'].includes(arg)) {
          applyTheme(arg);
          printLine(`<span class='text-emerald-400'>✔ Warna tema berhasil diubah ke: ${arg.toUpperCase()}</span>`);
        } else {
          printLine("<span class='text-red-400'>Gunakan: theme [cyan | violet | emerald | pink]</span>");
        }
        break;

      case 'matrix':
        printLine("<span class='text-emerald-400 font-bold'>[MATRIX CODE RAIN]</span>");
        for (let i = 0; i < 4; i++) {
          const randomChar = Array.from({length: 35}, () => String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96))).join('');
          printLine(`<span class='text-emerald-500 font-mono text-xs'>${randomChar}</span>`);
        }
        break;

      case 'contact':
        closeTerminal();
        const contactSection = document.getElementById('contact');
        if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
        break;

      case 'clear':
        outputElem.innerHTML = '';
        break;

      case 'exit':
        closeTerminal();
        break;

      default:
        printLine(`<span class='text-red-400'>Perintah tidak dikenali: '${escapeHtml(cmdStr)}'. Ketik 'help' untuk panduan.</span>`);
        break;
    }
  }

  function applyTheme(themeName) {
    const root = document.documentElement;
    let mainHex = '#00f0ff';
    if (themeName === 'violet') mainHex = '#a855f7';
    if (themeName === 'emerald') mainHex = '#10b981';
    if (themeName === 'pink') mainHex = '#ec4899';

    root.style.setProperty('--accent-glow', mainHex);
    ParticleCanvas.setAccentColor(mainHex);
    localStorage.setItem('cyber_theme', themeName);
  }

  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  return {
    init,
    openTerminal,
    closeTerminal,
    toggleTerminal,
    applyTheme
  };
})();
