export default function Videos() {
  return (
    <section id="video">
      <div className="section-head">
        <div className="section-title">Mes vidéos</div>
        <p className="section-desc">
          Une vidéo longue chaque dimanche sur l&apos;avancée du défi, et le build log brut le
          reste de la semaine. On commence par la présentation.
        </p>
      </div>

      <div className="video-frame">
        <iframe
          src="https://www.youtube-nocookie.com/embed/oqSIHBwyn9Y"
          title="20Kavant — la vidéo de présentation du défi"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>

      <p className="video-cta">
        <a href="https://youtube.com/@robinnat20" target="_blank" rel="noopener">
          Toutes mes vidéos sur YouTube
          <svg className="ico-arrow" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 17L17 7M17 7H9M17 7V15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </p>
    </section>
  );
}
