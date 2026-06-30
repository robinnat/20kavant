export default function Follow() {
  return (
    <section id="suivre">
      <div className="section-head">
        <div className="section-title">Suivre le défi</div>
        <p className="section-desc">
          Vidéo longue chaque dimanche. Build log brut le reste de la semaine.
        </p>
      </div>
      <div className="social-row">
        <a className="social-icon-link" href="https://youtube.com/@robinnat20" target="_blank" rel="noopener">
          <div className="social-icon" style={{ background: "rgba(232,88,158,0.12)" }}>
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M9 8L17 12L9 16V8Z" fill="#E8589E" />
              <rect x="3" y="5" width="18" height="14" rx="3" stroke="#E8589E" strokeWidth="1.6" />
            </svg>
          </div>
          <div className="social-name">YouTube</div>
        </a>
        <a className="social-icon-link" href="https://www.tiktok.com/@robinnat" target="_blank" rel="noopener">
          <div className="social-icon" style={{ background: "rgba(183,155,230,0.12)" }}>
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M12 4V15.5C12 17.43 10.43 19 8.5 19C6.57 19 5 17.43 5 15.5C5 13.57 6.57 12 8.5 12"
                stroke="#B79BE6"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M12 4C12 6.5 14 8.3 16.5 8.3"
                stroke="#B79BE6"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="social-name">TikTok</div>
        </a>
        <a className="social-icon-link" href="https://www.instagram.com/robinnat" target="_blank" rel="noopener">
          <div className="social-icon" style={{ background: "rgba(244,147,107,0.12)" }}>
            <svg viewBox="0 0 24 24" fill="none">
              <rect x="4" y="4" width="16" height="16" rx="5" stroke="#F4936B" strokeWidth="1.6" />
              <circle cx="12" cy="12" r="3.4" stroke="#F4936B" strokeWidth="1.6" />
              <circle cx="16.6" cy="7.4" r="1" fill="#F4936B" />
            </svg>
          </div>
          <div className="social-name">Instagram</div>
        </a>
        <a className="social-icon-link" href="https://x.com/robinnat20" target="_blank" rel="noopener">
          <div className="social-icon" style={{ background: "rgba(246,231,214,0.12)" }}>
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M17.53 3h2.94l-6.42 7.34L21.5 21h-5.9l-4.62-6.04L5.7 21H2.76l6.87-7.85L2.5 3h6.05l4.18 5.52L17.53 3zm-1.03 16.2h1.63L7.6 4.7H5.85L16.5 19.2z"
                fill="#F6E7D6"
              />
            </svg>
          </div>
          <div className="social-name">X</div>
        </a>
      </div>
    </section>
  );
}
