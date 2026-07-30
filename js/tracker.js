/**
 * Visitor Tracker & Personalized Greeting Engine
 * Rafly Ahmad Muzaki - Cyberpunk Portfolio
 */

const VisitorTracker = (() => {
  const STORAGE_KEY = 'cyber_visitor_logs';
  const OWNER_KEY = 'cyber_is_owner';
  const AUTH_KEY = 'cyber_admin_session';
  const MAX_LOGS = 150;
  let isAuthenticated = false;

  function init() {
    checkSessionAuth();
    handleUrlGreeting();
    recordVisit();
  }

  function checkSessionAuth() {
    if (sessionStorage.getItem(AUTH_KEY) === 'true' || localStorage.getItem(OWNER_KEY) === 'true') {
      isAuthenticated = true;
    }
  }

  function authenticate(inputPin) {
    const validPin = (typeof PORTFOLIO_CONFIG !== 'undefined' && PORTFOLIO_CONFIG.adminPin)
      ? PORTFOLIO_CONFIG.adminPin
      : '925414';

    if (String(inputPin).trim() === String(validPin).trim()) {
      isAuthenticated = true;
      sessionStorage.setItem(AUTH_KEY, 'true');
      localStorage.setItem(OWNER_KEY, 'true');
      
      // Remove self-visit log created just before authenticating
      removeRecentSelfLog();
      return true;
    }
    return false;
  }

  function logout() {
    isAuthenticated = false;
    sessionStorage.removeItem(AUTH_KEY);
  }

  function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to') || params.get('ref') || params.get('name') || params.get('for');
    return {
      to: to ? sanitizeStr(to) : null,
      adminPinParam: params.get('admin')
    };
  }

  function sanitizeStr(str) {
    if (!str) return '';
    return str.replace(/[<>'"]/g, '').trim();
  }

  function handleUrlGreeting() {
    const { to } = getUrlParams();
    if (!to) return;

    // Display custom greeting badge or banner in Hero section
    const formattedName = to.replace(/[-_]/g, ' ');
    
    setTimeout(() => {
      // 1. Toast Notification
      if (typeof showToast === 'function') {
        showToast(`👋 Halo ${formattedName}! Selamat datang di portofolio Rafly.`, 'info');
      }

      // 2. Personal Welcome Banner under Hero Name
      const heroSection = document.querySelector('#hero .max-w-4xl');
      if (heroSection) {
        const existingBanner = document.getElementById('personal-welcome-banner');
        if (!existingBanner) {
          const banner = document.createElement('div');
          banner.id = 'personal-welcome-banner';
          banner.className = 'mt-4 px-5 py-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 text-sm sm:text-base font-orbitron inline-flex items-center space-x-2 animate-bounce shadow-neon';
          banner.innerHTML = `<span>✨</span><span>Selamat datang khusus untuk <strong class="text-white underline decoration-cyan-400">${escapeHtml(formattedName)}</strong>!</span>`;
          
          const heroBio = document.getElementById('hero-bio');
          if (heroBio && heroBio.parentNode) {
            heroBio.parentNode.insertBefore(banner, heroBio.nextSibling);
          }
        }
      }
    }, 600);
  }

  function detectDevice() {
    const ua = navigator.userAgent || '';
    
    // 1. Device Type
    let deviceType = 'Desktop';
    if (/Mobi|Android|iPhone|iPad|iPod|Touch/i.test(ua)) {
      deviceType = 'Mobile';
    }

    // 2. OS Detection (Check iOS/Android BEFORE Mac/Linux to avoid iPhone OS matching 'Mac')
    let os = 'Unknown OS';
    if (/iPhone|iPad|iPod/i.test(ua)) {
      os = 'iOS';
    } else if (/Android/i.test(ua)) {
      os = 'Android';
    } else if (/Win/i.test(ua)) {
      os = 'Windows';
    } else if (/Macintosh|Mac OS/i.test(ua)) {
      os = 'macOS';
    } else if (/Linux/i.test(ua)) {
      os = 'Linux';
    }

    // 3. Browser & In-App App Detection
    let browser = 'Browser';
    if (/Instagram/i.test(ua)) {
      browser = 'Instagram App';
    } else if (/FBAN|FBAV/i.test(ua)) {
      browser = 'Facebook App';
    } else if (/TikTok/i.test(ua)) {
      browser = 'TikTok App';
    } else if (/WhatsApp/i.test(ua)) {
      browser = 'WhatsApp App';
    } else if (/Edg/i.test(ua)) {
      browser = 'Edge';
    } else if (/Chrome/i.test(ua) && !/Edg/i.test(ua)) {
      browser = 'Chrome';
    } else if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) {
      browser = 'Safari';
    } else if (/Firefox/i.test(ua)) {
      browser = 'Firefox';
    }

    return { deviceType, os, browser, screenResolution: `${window.screen.width}x${window.screen.height}` };
  }

  function detectReferrer(ua) {
    const ref = document.referrer ? document.referrer.toLowerCase() : '';
    const isInstagramUA = /Instagram/i.test(ua);
    const isFacebookUA = /FBAN|FBAV/i.test(ua);

    if (isInstagramUA || ref.includes('instagram.com') || ref.includes('l.instagram.com')) {
      return 'Instagram (Bio / Link IG)';
    }
    
    if (isFacebookUA) {
      return 'Facebook (In-App Browser)';
    }

    if (ref.includes('l.facebook.com') || ref.includes('lm.facebook.com') || ref.includes('m.facebook.com') || ref.includes('facebook.com')) {
      return 'Instagram / Facebook (Meta Link)';
    }

    if (ref.includes('t.co') || ref.includes('twitter.com') || ref.includes('x.com')) {
      return 'X / Twitter';
    }

    if (ref.includes('tiktok.com')) {
      return 'TikTok';
    }

    if (ref.includes('linkedin.com') || ref.includes('lnkd.in')) {
      return 'LinkedIn';
    }

    if (ref.includes('wa.me') || ref.includes('whatsapp.com')) {
      return 'WhatsApp Share';
    }

    if (ref.includes('google.')) {
      return 'Google Search';
    }

    if (ref) {
      try {
        return new URL(document.referrer).hostname;
      } catch (e) {
        return ref;
      }
    }

    return 'Direct Link / Bio / Bookmark';
  }

  function removeRecentSelfLog() {
    try {
      const logs = getRawLogs();
      const currentSessionLog = sessionStorage.getItem('last_logged_visit_id');
      let updatedLogs = logs;
      
      if (currentSessionLog) {
        updatedLogs = logs.filter(l => l.id !== currentSessionLog);
      } else {
        if (logs.length > 0 && (Date.now() - logs[0].rawTime) < 120000 && !logs[0].isPersonalLink) {
          updatedLogs = logs.slice(1);
        }
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedLogs));
    } catch (e) {}
  }

  async function recordVisit() {
    // DO NOT record visit if browser is marked as Pemilik / Admin
    if (localStorage.getItem(OWNER_KEY) === 'true' || sessionStorage.getItem(AUTH_KEY) === 'true') {
      return;
    }

    const { to } = getUrlParams();
    const deviceInfo = detectDevice();
    const referrerSource = detectReferrer(navigator.userAgent || '');
    
    // Prevent duplicate logs within 10 seconds for exact same session
    const lastVisitTime = sessionStorage.getItem('last_logged_visit');
    const nowTs = Date.now();
    if (lastVisitTime && (nowTs - parseInt(lastVisitTime)) < 10000) {
      return;
    }
    sessionStorage.setItem('last_logged_visit', nowTs.toString());

    const dateObj = new Date();
    const formattedDate = dateObj.toLocaleDateString('id-ID', {
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });

    const visitId = 'log_' + Math.random().toString(36).substr(2, 9);
    sessionStorage.setItem('last_logged_visit_id', visitId);

    const visitData = {
      id: visitId,
      timestamp: formattedDate,
      rawTime: nowTs,
      targetName: to ? to.replace(/[-_]/g, ' ') : 'Pengunjung Anonim',
      isPersonalLink: !!to,
      device: `${deviceInfo.deviceType} (${deviceInfo.os} - ${deviceInfo.browser})`,
      screen: deviceInfo.screenResolution,
      referrer: referrerSource,
      location: 'Mencari...'
    };

    // Fetch accurate IP Location first before sending Telegram notification
    try {
      visitData.location = await fetchVisitorLocation();
    } catch (e) {
      visitData.location = 'Lokasi Terproteksi / Network Privacy';
    }

    // Save visit log to storage
    saveLogToStorage(visitData);

    // Send Real-Time Telegram Notification to Owner
    sendTelegramNotification(visitData);
  }

  async function fetchVisitorLocation() {
    // Provider 1: ipwho.is (HTTPS, fast, highly accurate for Indonesia & global IPs)
    try {
      const res = await fetch('https://ipwho.is/', { signal: AbortSignal.timeout(3500) });
      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          const city = data.city || '';
          const region = data.region || '';
          const country = data.country || '';
          const isp = data.connection?.isp || data.isp || '';
          const locParts = [city, region, country].filter(Boolean).join(', ');
          if (locParts) {
            return `${locParts}${isp ? ` (${isp})` : ''}`;
          }
        }
      }
    } catch (e) {}

    // Provider 2: freeipapi.com (HTTPS fallback)
    try {
      const res = await fetch('https://freeipapi.com/api/json', { signal: AbortSignal.timeout(3500) });
      if (res.ok) {
        const data = await res.json();
        const city = data.cityName || '';
        const region = data.regionName || '';
        const country = data.countryName || '';
        const locParts = [city, region, country].filter(Boolean).join(', ');
        if (locParts) return locParts;
      }
    } catch (e) {}

    // Provider 3: ipapi.co (HTTPS fallback)
    try {
      const res = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(3000) });
      if (res.ok) {
        const data = await res.json();
        if (!data.error) {
          const city = data.city || '';
          const region = data.region_code || data.region || '';
          const country = data.country_name || '';
          const org = data.org || '';
          const locParts = [city, region, country].filter(Boolean).join(', ');
          if (locParts) {
            return `${locParts}${org ? ` (${org})` : ''}`;
          }
        }
      }
    } catch (e) {}

    return 'Lokasi Tidak Terdeteksi / Network Privacy';
  }

  async function sendTelegramNotification(data) {
    if (typeof PORTFOLIO_CONFIG === 'undefined') return;
    const token = PORTFOLIO_CONFIG.telegramToken;
    const chatId = PORTFOLIO_CONFIG.telegramChatId;
    if (!token || !chatId) return;

    const message = 
`🚀 *PENGUNJUNG PORTOFOLIO BARU!*
━━━━━━━━━━━━━━━━━━
👤 *Nama/Tag:* \`${data.targetName}\`
📍 *Lokasi:* ${data.location}
📱 *Perangkat:* ${data.device}
📐 *Layar:* ${data.screen}
🌐 *Sumber:* ${data.referrer}
⏰ *Waktu:* ${data.timestamp}
━━━━━━━━━━━━━━━━━━`;

    try {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'Markdown'
        })
      });
    } catch (e) {
      console.warn('Telegram notification error:', e);
    }
  }

  function saveLogToStorage(visitData) {
    try {
      const existing = getRawLogs();
      existing.unshift(visitData);
      if (existing.length > MAX_LOGS) existing.pop();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    } catch (e) {
      console.warn('Unable to save log to localStorage:', e);
    }
  }

  function updateLogLocation(id, locationStr) {
    try {
      const logs = getRawLogs();
      const target = logs.find(l => l.id === id);
      if (target) {
        target.location = locationStr;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
      }
    } catch (e) {}
  }

  function getRawLogs() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  function getLogs() {
    if (!isAuthenticated) {
      return { error: 'UNAUTHORIZED', message: 'Akses Ditolak! Membutuhkan PIN Rahasia Pemilik.' };
    }
    return { success: true, logs: getRawLogs() };
  }

  function clearLogs() {
    if (!isAuthenticated) {
      return { error: 'UNAUTHORIZED', message: 'Akses Ditolak! Membutuhkan PIN Rahasia Pemilik.' };
    }
    localStorage.removeItem(STORAGE_KEY);
    return { success: true, message: 'Semua log pengunjung telah dibersihkan.' };
  }

  function exportLogsJSON() {
    if (!isAuthenticated) {
      alert('Akses Ditolak! Masukkan PIN Rahasia terlebih dahulu.');
      return;
    }
    const logs = getRawLogs();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(logs, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `visitor_logs_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }

  function escapeHtml(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  return {
    init,
    authenticate,
    logout,
    isAuth: () => isAuthenticated,
    getLogs,
    clearLogs,
    exportLogsJSON
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  VisitorTracker.init();
});
