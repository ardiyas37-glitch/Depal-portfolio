import { useEffect, useState } from "react";

export default function FullscreenButton() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    const el = document.documentElement;
    const hasFs =
      !!el.requestFullscreen ||
      !!el.webkitRequestFullscreen ||
      !!el.mozRequestFullScreen ||
      !!el.msRequestFullscreen;
    setSupported(hasFs);
    const onChange = () => {
      const fsEl =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement ||
        null;
      setIsFullscreen(!!fsEl);
    };
    document.addEventListener("fullscreenchange", onChange);
    document.addEventListener("webkitfullscreenchange", onChange);
    document.addEventListener("mozfullscreenchange", onChange);
    document.addEventListener("MSFullscreenChange", onChange);
    onChange();
    return () => {
      document.removeEventListener("fullscreenchange", onChange);
      document.removeEventListener("webkitfullscreenchange", onChange);
      document.removeEventListener("mozfullscreenchange", onChange);
      document.removeEventListener("MSFullscreenChange", onChange);
    };
  }, []);

  async function toggleFullscreen() {
    try {
      if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        const el = document.documentElement;
        if (el.requestFullscreen) await el.requestFullscreen();
        else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
        else if (el.mozRequestFullScreen) await el.mozRequestFullScreen();
        else if (el.msRequestFullscreen) await el.msRequestFullscreen();
      } else {
        if (document.exitFullscreen) await document.exitFullscreen();
        else if (document.webkitExitFullscreen) await document.webkitExitFullscreen();
        else if (document.mozCancelFullScreen) await document.mozCancelFullScreen();
        else if (document.msExitFullscreen) await document.msExitFullscreen();
      }
    } catch {
      // Silently ignore – browser may block without user gesture
    }
  }

  if (!supported) return null;

  const label = isFullscreen ? "Keluar dari fullscreen" : "Masuk mode fullscreen";
  return (
    <button
      type="button"
      className="fullscreen-btn"
      onClick={toggleFullscreen}
      aria-label={label}
      title={label}
      aria-pressed={isFullscreen}
    >
      <span aria-hidden="true" className="fullscreen-btn__icon">
        {isFullscreen ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 3H3V5M11 3H13V5M5 13H3V11M11 13H13V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 8H10M8 6V10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.0" />
            <rect x="5.5" y="5.5" width="5" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.35" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6V3H6M10 3H13V6M3 10V13H6M13 10V13H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
    </button>
  );
}
