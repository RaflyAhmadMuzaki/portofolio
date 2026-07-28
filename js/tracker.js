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
    const ua = navigator.userAgent;
    let deviceType = 'Desktop';
    if (/Mobi|Android|iPhone|iPad|iPod/i.test(ua)) {
      deviceType = 'Mobile / Tablet';
    }

    let os = 'Unknown OS';
    if (ua.indexOf('Win') !== -1) os = 'Windows';
    else if (ua.indexOf('Mac') !== -1) os = 'macOS';
    else if (ua.indexOf('Android') !== -1) os = 'Android';
    else if (ua.indexOf('iPhone') !== -1 || ua.indexOf('iPad') !== -1) os = 'iOS';
    else if (ua.indexOf('Linux') !== -1) os = 'Linux';

    let browser = 'Browser';
    if (ua.indexOf('Chrome') !== -1 && ua.indexOf('Edg') === -1) browser = 'Chrome';
    else if (ua.indexOf('Safari') !== -1 && ua.indexOf('Chrome') === -1) browser = 'Safari';
    else if (ua.indexOf('Firefox') !== -1) browser = 'Firefox';
    else if (ua.indexOf('Edg') !== -1) browser = 'Edge';

    return { deviceType, os, browser, screenResolution: `${window.screen.width}x${window.screen.height}` };
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
      referrer: document.referrer ? new URL(document.referrer).hostname : 'Direct Link / Social',
      location: 'Mencari...'
    };

    // Save initial visit log first
    saveLogToStorage(visitData);

    // Fetch IP Location asynchronously (fail-safe)
    try {
      const response = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(3000) });
      if (response.ok) {
        const data = await response.json();
        const city = data.city || '';
        const region = data.region_code || data.region || '';
        const country = data.country_name || '';
        visitData.location = [city, region, country].filter(Boolean).join(', ') || 'Lokasi tidak terdeteksi';
        updateLogLocation(visitData.id, visitData.location);
      }
    } catch (e) {
      // Fallback API if ipapi is blocked by adblock
      try {
        const fbRes = await fetch('https://ip-api.com/json/?fields=status,city,regionName,country', { signal: AbortSignal.timeout(2500) });
        if (fbRes.ok) {
          const fbData = await fbRes.json();
          if (fbData.status === 'success') {
            visitData.location = `${fbData.city}, ${fbData.country}`;
            updateLogLocation(visitData.id, visitData.location);
          }
        }
      } catch (err) {
        visitData.location = 'Lokasi Terproteksi / AdBlock';
        updateLogLocation(visitData.id, visitData.location);
      }
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
