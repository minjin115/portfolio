export default function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-main">
        <p className="eyebrow hero-enter" style={{ '--delay': '0ms' }}>
          <span className="blue-dot" />VIDEO EDITOR · CONTENT CREATOR
        </p>
        <h1 className="hero-enter" style={{ '--delay': '100ms' }}>
          Every <span>Frame</span><br />Tells a Story.
        </h1>
        <div className="hero-bottom hero-enter" style={{ '--delay': '220ms' }}>
          <p>촬영과 제작 경험을 바탕으로,<br />장면의 흐름과 리듬을 고민하며 이야기를 완성하는 영상편집자를 지향합니다.</p>
          <a className="round-link hero-work-link" href="#work">
            View My Works
            <span className="hero-arrow-circle" aria-hidden="true"><span className="hero-arrow">↗</span></span>
          </a>
        </div>
      </div>
      <div className="hero-foot hero-enter" style={{ '--delay': '340ms' }}>
        <span>EVERY FRAME TELLS A STORY.</span>
        <a href="#about">Scroll to Explore <span aria-hidden="true">↓</span></a>
      </div>
    </section>
  )
}
