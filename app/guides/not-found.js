// 404 des guides : même habillage sobre que les guides eux-mêmes, pour ne pas
// retomber sur la page d'erreur brute de Next au moindre lien mal recopié.
export default function GuideIntrouvable() {
  return (
    <>
      <header className="guide-nav">
        <a className="brand" href="https://20kavant.fr/robinnat">
          <b>20Kavant</b>
          <small>.fr</small>
        </a>
        <span className="guide-nav-tag">Guide</span>
      </header>

      <section className="defi">
        <div className="defi-inner guide-head-inner">
          <h1 className="defi-title">Ce guide est introuvable</h1>
          <p className="defi-sub">
            Le lien est peut-être incomplet, ou le guide a été retiré.
          </p>
        </div>
      </section>

      <section className="guide-body">
        <p className="guide-private">
          Les guides sont privés et accessibles par lien uniquement.
        </p>
      </section>

      <footer className="guide-foot">
        <a href="https://20kavant.fr/robinnat">20kavant.fr</a>
      </footer>
    </>
  );
}
