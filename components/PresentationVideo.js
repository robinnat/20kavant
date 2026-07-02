export default function PresentationVideo() {
  return (
    <section id="video">
      <div className="section-head">
        <div className="section-title">Le défi en vidéo</div>
        <p className="section-desc">
          Deux minutes pour comprendre le défi : l&apos;objectif, la deadline, le concours. Tout est
          expliqué dans la vidéo de présentation.
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
    </section>
  );
}
