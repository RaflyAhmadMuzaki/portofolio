document.addEventListener('DOMContentLoaded', () => {
  ParticleCanvas.init();
  CommandTerminal.init();

  const savedTheme = localStorage.getItem('cyber_theme') || 'cyan';
  CommandTerminal.applyTheme(savedTheme);

  initHero();
  initAboutSection();
  initSkillsSection();
  initProjectsSection();
  initJourneySection();

  initCustomCursor();
  initAudioControls();
  init3DTiltEffect();
  initContactForm();
  initPWARegistration();
});

function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
    .replace(/`/g, "&#x60;");
}

function initHero() {
  const cfg = PORTFOLIO_CONFIG.hero;

  const heroBadge = document.getElementById('hero-badge-text');
  if (heroBadge) heroBadge.textContent = cfg.badge;

  const heroName = document.getElementById('hero-name');
  if (heroName) heroName.textContent = cfg.name;

  const heroBio = document.getElementById('hero-bio');
  if (heroBio) heroBio.textContent = cfg.shortBio;

  const heroImg = document.getElementById('hero-profile-img');
  if (heroImg && cfg.profileImg) {
    heroImg.src = cfg.profileImg;
  }

  const titleElem = document.getElementById('hero-typing-title');
  if (titleElem && cfg.titles && cfg.titles.length > 0) {
    let titleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function type() {
      const currentTitle = cfg.titles[titleIdx];
      if (isDeleting) {
        titleElem.textContent = currentTitle.substring(0, charIdx - 1);
        charIdx--;
      } else {
        titleElem.textContent = currentTitle.substring(0, charIdx + 1);
        charIdx++;
      }

      let speed = isDeleting ? 40 : 80;

      if (!isDeleting && charIdx === currentTitle.length) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        titleIdx = (titleIdx + 1) % cfg.titles.length;
        speed = 500;
      }

      setTimeout(type, speed);
    }
    type();
  }
}

function initAboutSection() {
  const cfg = PORTFOLIO_CONFIG.about;
  const photos = cfg.photos || [];

  const mainImage = document.getElementById('about-main-img');
  const badgeElem = document.getElementById('about-photo-badge');
  const storyTitleElem = document.getElementById('about-story-title');
  const storyBodyElem = document.getElementById('about-story-body');
  const storyTagsElem = document.getElementById('about-story-tags');
  const thumbsContainer = document.getElementById('about-thumbs-container');

  if (!mainImage || photos.length === 0) return;

  let currentPhoto = (window.activeAboutPhotoId && photos.find(p => p.id === window.activeAboutPhotoId)) || photos.find(p => p.featured) || photos[0];
  window.activeAboutPhotoId = currentPhoto.id;
  updateAboutDisplay(currentPhoto);

  if (thumbsContainer) {
    thumbsContainer.innerHTML = photos.map(photo => `
      <button 
        data-photo-id="${photo.id}" 
        class="about-thumb-btn flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-gray-700 bg-slate-900/80 hover:border-cyan-400 transition-all font-mono text-xs text-gray-300 hover:text-white focus:outline-none ${photo.id === currentPhoto.id ? 'border-cyan-400 text-cyan-300 bg-cyan-500/10 ring-2 ring-cyan-500/40 shadow-neon' : ''}"
      >
        <img src="${photo.src}" alt="${photo.alt}" class="w-8 h-8 object-cover rounded-lg">
        <span>${photo.tabName}</span>
      </button>
    `).join('');

    thumbsContainer.querySelectorAll('.about-thumb-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        SoundEngine.playClick();
        const id = btn.getAttribute('data-photo-id');
        const selected = photos.find(p => p.id === id);
        if (selected) {
          currentPhoto = selected;
          window.activeAboutPhotoId = selected.id;
          updateAboutDisplay(currentPhoto);

          thumbsContainer.querySelectorAll('.about-thumb-btn').forEach(b => {
            b.classList.remove('border-cyan-400', 'text-cyan-300', 'bg-cyan-500/10', 'ring-2', 'ring-cyan-500/40', 'shadow-neon');
            b.classList.add('border-gray-700', 'text-gray-300');
          });
          btn.classList.remove('border-gray-700', 'text-gray-300');
          btn.classList.add('border-cyan-400', 'text-cyan-300', 'bg-cyan-500/10', 'ring-2', 'ring-cyan-500/40', 'shadow-neon');
        }
      });
      btn.addEventListener('mouseenter', () => SoundEngine.playHover());
    });
  }

  function updateAboutDisplay(photo) {
    const imgWrapper = document.getElementById('about-img-wrapper');
    if (mainImage) {
      mainImage.style.opacity = '0';
    }
    if (storyBodyElem) {
      storyBodyElem.style.opacity = '0';
    }

    setTimeout(() => {
      const isPng = photo.src && (photo.src.endsWith('.png') || photo.src.includes('remove'));

      if (mainImage) {
        mainImage.src = photo.src;
        mainImage.alt = photo.alt;
        if (isPng) {
          mainImage.classList.remove('object-cover');
          mainImage.classList.add('img-cutout-shadow');
        } else {
          mainImage.classList.remove('img-cutout-shadow');
          mainImage.classList.add('object-cover');
        }
        mainImage.style.opacity = '1';
      }

      if (imgWrapper) {
        if (isPng) {
          imgWrapper.classList.add('cutout-hologram-wrapper');
        } else {
          imgWrapper.classList.remove('cutout-hologram-wrapper');
        }
      }

      if (badgeElem) badgeElem.textContent = photo.badge;
      if (storyTitleElem) storyTitleElem.textContent = photo.title;
      if (storyBodyElem) {
        storyBodyElem.textContent = photo.story;
        storyBodyElem.style.opacity = '1';
      }
      if (storyTagsElem && photo.tags) {
        storyTagsElem.innerHTML = photo.tags
          .map(t => `<span class="px-3 py-1 bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono rounded-full">${t}</span>`)
          .join('');
      }
    }, 150);
  }
}

function initSkillsSection() {
  const container = document.getElementById('skills-grid-container');
  if (!container) return;

  const allSkills = PORTFOLIO_CONFIG.skills || [];

  container.innerHTML = allSkills.map(skill => `
    <div class="skill-card glass-card p-5 rounded-2xl border border-white/10 hover:border-cyan-400/60 transition-all duration-300 group">
      <div class="flex justify-between items-center mb-2">
        <div class="flex items-center space-x-3">
          <span class="text-2xl">${skill.icon}</span>
          <span class="font-orbitron font-bold text-white text-base group-hover:text-cyan-300 transition-colors">${skill.name}</span>
        </div>
        <span class="skill-pct-counter font-mono font-bold text-cyan-400 text-sm" data-target="${skill.level}">0%</span>
      </div>

      <p class="text-xs text-gray-400 mb-3 leading-relaxed">${skill.desc}</p>

      <div class="w-full bg-slate-800/80 h-3 rounded-full overflow-hidden p-0.5 border border-white/10 relative">
        <div 
          class="skill-bar-fill h-full rounded-full transition-all duration-1000 ease-out shadow-neon relative"
          data-level="${skill.level}"
          style="width: 0%; background: linear-gradient(90deg, ${skill.color}88, ${skill.color});"
        >
          <div class="absolute inset-0 bg-white/20 animate-pulse"></div>
        </div>
      </div>
    </div>
  `).join('');

  triggerSkillAnimations();

  function triggerSkillAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const card = entry.target;
          const barFill = card.querySelector('.skill-bar-fill');
          const counter = card.querySelector('.skill-pct-counter');

          if (barFill && counter && barFill.style.width === '0%') {
            const targetPct = parseInt(counter.getAttribute('data-target') || '0', 10);
            barFill.style.width = targetPct + '%';
            SoundEngine.playSkillFill();

            let start = 0;
            const duration = 1000;
            const stepTime = 25;
            const steps = duration / stepTime;
            const increment = targetPct / steps;

            const timer = setInterval(() => {
              start += increment;
              if (start >= targetPct) {
                counter.textContent = targetPct + '%';
                clearInterval(timer);
              } else {
                counter.textContent = Math.floor(start) + '%';
              }
            }, stepTime);
          }
        }
      });
    }, { threshold: 0.2 });

    container.querySelectorAll('.skill-card').forEach(card => observer.observe(card));
  }
}

function initProjectsSection() {
  const container = document.getElementById('projects-grid-container');
  if (!container) return;

  const projects = PORTFOLIO_CONFIG.projects || [];

  container.innerHTML = projects.map(p => `
    <div class="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
      <div>
        <div class="flex justify-between items-start mb-4">
          <span class="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-mono rounded-full border border-cyan-500/30">
            ${p.badge || 'PROJECT'}
          </span>
        </div>

        <h3 class="font-orbitron font-bold text-xl text-white mb-2 group-hover:text-cyan-300 transition-colors">
          ${p.title}
        </h3>
        <p class="text-gray-400 text-sm leading-relaxed mb-4">
          ${p.description}
        </p>
      </div>

      <div>
        <div class="flex flex-wrap gap-2 mb-4">
          ${p.tags.map(t => `<span class="px-2.5 py-1 bg-slate-900/80 text-gray-300 text-xs rounded-md border border-white/5 font-mono">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function initJourneySection() {
  const container = document.getElementById('journey-timeline-container');
  if (!container) return;

  const journey = PORTFOLIO_CONFIG.journey || [];

  container.innerHTML = journey.map((item) => `
    <div class="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-8 mb-8 group">
      <div class="hidden md:block md:col-span-1 text-right font-orbitron font-bold text-cyan-400 text-xl pt-1">
        ${item.year}
      </div>

      <div class="absolute left-0 md:left-1/2 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 ring-4 ring-cyan-500/20 group-hover:scale-125 transition-transform"></div>

      <div class="md:col-span-4 glass-card p-5 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all">
        <span class="md:hidden inline-block font-orbitron font-bold text-cyan-400 text-sm mb-1">${item.year}</span>
        <h4 class="font-orbitron font-bold text-white text-lg">${item.title}</h4>
        <h5 class="text-cyan-300/80 text-xs font-mono mb-2">${item.subtitle}</h5>
        <p class="text-gray-400 text-sm leading-relaxed">${item.desc}</p>
      </div>
    </div>
  `).join('');
}

function initCustomCursor() {
  const cursorDot = document.getElementById('cursor-dot');
  const cursorOutline = document.getElementById('cursor-outline');

  if (!cursorDot || !cursorOutline) return;

  window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({
      left: `${posX}px`,
      top: `${posY}px`
    }, { duration: 300, fill: 'forwards' });
  });

  document.querySelectorAll('a, button, input, textarea, .glass-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorOutline.classList.add('cursor-hover-active');
      SoundEngine.playHover();
    });
    el.addEventListener('mouseleave', () => {
      cursorOutline.classList.remove('cursor-hover-active');
    });
  });
}

function initAudioControls() {
  const audioBtn = document.getElementById('audio-toggle-btn');
  const audioIcon = document.getElementById('audio-icon');
  if (!audioBtn || !audioIcon) return;

  function updateIcon(isMuted) {
    if (isMuted) {
      audioIcon.innerHTML = '🔇';
      audioBtn.classList.add('opacity-60');
    } else {
      audioIcon.innerHTML = '🔊';
      audioBtn.classList.remove('opacity-60');
    }
  }

  updateIcon(SoundEngine.getIsMuted());

  audioBtn.addEventListener('click', () => {
    const isMuted = SoundEngine.toggleMute();
    updateIcon(isMuted);
    showToast(isMuted ? 'Efek Suara Dimatikan' : 'Efek Suara Diaktifkan 🔊');
  });
}

function init3DTiltEffect() {
  const cards = document.querySelectorAll('.glass-card, .tilt-element');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}

let lastSubmitTime = 0;

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    SoundEngine.playClick();

    const honeypot = document.getElementById('bot-check-hp');
    if (honeypot && honeypot.value !== '') {
      return;
    }

    const now = Date.now();
    if (now - lastSubmitTime < 5000) {
      showToast('Harap tunggu beberapa detik...');
      return;
    }

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const msgInput = document.getElementById('contact-msg');

    const rawName = nameInput ? nameInput.value.trim() : '';
    const rawEmail = emailInput ? emailInput.value.trim() : '';
    const rawMsg = msgInput ? msgInput.value.trim() : '';

    if (!rawName || !rawEmail || !rawMsg) {
      showToast('⚠️ Harap isi semua kolom pesan!');
      return;
    }

    if (rawName.length > 80 || rawEmail.length > 100 || rawMsg.length > 1000) {
      showToast('⚠️ Karakter melebihi batas!');
      return;
    }

    const cleanName = sanitizeInput(rawName);
    const cleanEmail = sanitizeInput(rawEmail);
    const cleanMsg = sanitizeInput(rawMsg);

    lastSubmitTime = now;

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'MENGIRIM PESAN...';
    }

    setTimeout(() => {
      const waText = encodeURIComponent(`Halo Rafly! Saya ${cleanName} (${cleanEmail}).\n\nPesan: ${cleanMsg}`);
      const waUrl = `https://wa.me/6282263074525?text=${waText}`;

      showToast('🚀 Membuka WhatsApp...');
      
      window.open(waUrl, '_blank', 'noopener,noreferrer');

      form.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Kirim Pesan via WA Direct ⚡';
      }
    }, 800);
  });
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'glass-card px-4 py-3 rounded-xl border border-cyan-400/50 text-cyan-300 font-mono text-sm shadow-neon flex items-center space-x-2 animate-bounce-in';
  toast.innerHTML = `<span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function initPWARegistration() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js')
        .then(reg => console.log('[PWA] ServiceWorker registered:', reg.scope))
        .catch(err => console.log('[PWA] ServiceWorker failed:', err));
    });
  }
}
