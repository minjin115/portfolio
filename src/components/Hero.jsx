export default function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-main">
        <p className="eyebrow hero-enter" style={{ '--delay': '0ms' }}>
          <span className="blue-dot" />UI/UX DESIGNER · WEB PUBLISHER
        </p>
        <h1 className="hero-enter" style={{ '--delay': '100ms' }}>
          Creating <span>better</span><br />digital<br className="mobile-break" /> experiences<span className="title-period">.</span>
        </h1>
        <div className="hero-bottom hero-enter" style={{ '--delay': '220ms' }}>
          <p>사용자의 경험을 고민하고,<br />아이디어를 실제 화면으로 구현합니다.</p>
          <a className="round-link hero-work-link" href="#work">
            Explore Works
            <span className="hero-arrow-circle" aria-hidden="true"><span className="hero-arrow">↗</span></span>
          </a>
        </div>
      </div>
      <div className="hero-foot hero-enter" style={{ '--delay': '340ms' }}>
        <span>DESIGN WITH PURPOSE. BUILD WITH CARE.</span>
        <a href="#about">Scroll to Explore <span aria-hidden="true">↓</span></a>
      </div>
    </section>
  )
}
