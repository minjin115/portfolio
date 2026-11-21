import { useEffect, useRef } from 'react'
import Header from '../components/Header'
import { assetUrl, ongyeol } from '../data/ongyeol'
import './Ongyeol.css'

function Media({ media, className = '' }) {
  return <figure className={`og-media ${className}`}>
    {media.src ? <img src={assetUrl(media.src)} alt={media.alt} loading="lazy" /> : <div className="og-placeholder"><span aria-hidden="true">＋</span><p>{media.label}</p><small>실제 작업 자료로 교체 예정</small></div>}
  </figure>
}
function Heading({ number, title, children }) {
  return <div className="og-section-heading"><p className="eyebrow">{number} / {title.toUpperCase()}</p><h2>{children || title}</h2></div>
}
export default function Ongyeol() {
  const main = useRef(null)
  useEffect(() => {
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const elements = main.current.querySelectorAll('[data-og-reveal]')
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.remove('og-pending'); observer.unobserve(entry.target) }
    }), { threshold: .04 })
    elements.forEach(el => { el.classList.add('og-pending'); observer.observe(el) })
    return () => { observer.disconnect(); elements.forEach(el => el.classList.remove('og-pending')) }
  }, [])
  return <>
    <a className="skip-link" href="#main" onClick={event => { event.preventDefault(); main.current.focus(); main.current.scrollIntoView({ behavior: 'instant' }) }}>본문 바로가기</a><Header />
    <main id="main" className="ongyeol" ref={main} tabIndex={-1}>
      <section className="og-hero" aria-labelledby="ongyeol-title">
        <div className="container og-hero-copy"><a className="og-back" href="#work">← Back to Works</a><p className="eyebrow">01 / PROJECT HERO · TEAM PROJECT</p><h1 id="ongyeol-title" tabIndex={-1}>ONGYEOL<span>온결</span></h1><p className="og-slogan">Nature, Refined.</p><p className="og-disciplines">UI/UX Design · React Development · AI Contents</p></div>
        <Media media={ongyeol.hero} className="og-cover" />
      </section>
      <section className="container og-section" aria-labelledby="og-overview" data-og-reveal>
        <div className="og-two-columns"><div><p className="eyebrow">02 / PROJECT OVERVIEW</p><h2 id="og-overview">A calm approach<br />to skincare.</h2><p className="og-intro">ONGYEOL은 자연에서 얻은 원료와 과학적 연구를 결합한 스킨케어 브랜드 콘셉트의 웹사이트 프로젝트입니다.</p><p>팀 프로젝트로 브랜드 기획, 웹사이트 UI/UX 설계, 반응형 디자인, AI 이미지 및 영상 콘텐츠 제작, React 기반 웹 구현을 진행했습니다.</p></div><dl className="og-facts">{[['Project','ONGYEOL (온결)'],['Type','Team Project'],['Category','Skincare E-commerce Website'],['Role','UI/UX Design, Frontend Development, AI Contents'],['Tools','Figma, React, JavaScript, CSS, Git, GitHub, AI 콘텐츠 제작 도구']].map(([label,value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}<div><dt>Scope</dt><dd>Role은 참여 분야이며, 개인 담당 범위는 아래 My Role에 구분했습니다. AI 도구명은 확인 후 추가합니다.</dd></div></dl></div>
      </section>
      <section className="og-brand og-section" aria-labelledby="og-brand-title"><div className="container" data-og-reveal><p className="eyebrow">03 / BRAND CONCEPT</p><div className="og-two-columns"><h2 id="og-brand-title">자연에서 찾고,<br />과학으로 완성하다.</h2><div><p className="og-intro">Natural · Science · Pure<br />Minimal · Modern · Calm</p><p>자연에서 시작한 원료와 과학적 연구의 만남. 온결은 순수함과 정제된 표현을 바탕으로, 차분하고 현대적인 스킨케어 경험을 지향하는 브랜드 콘셉트입니다.</p><ul className="og-keywords"><li>Nature & Science</li><li>Pure & Simple</li><li>Nature, Refined.</li></ul></div></div><Media media={ongyeol.brand} /><div className="og-palette" aria-label="상세페이지 표현용 색상 팔레트"><div><span style={{background:'#f5f2eb'}} />Ivory</div><div><span style={{background:'#ffffff'}} />White</div><div><span style={{background:'#e9e4f0'}} />Soft Lavender</div><div><span style={{background:'#d6d5d2'}} />Neutral Gray</div></div><p className="og-note">브랜드 원본 색상값 확인 전, 상세페이지 표현용으로 적용한 팔레트입니다.</p></div></section>
      <section className="container og-section" data-og-reveal><Heading number="04" title="My Role">My part,<br />within the team.</Heading><p className="og-section-intro">아래는 개인 담당 작업입니다. 브랜드와 웹사이트 전체는 팀의 공동 결과물이며, 전체 제작 범위와 개인 담당 범위를 구분했습니다.</p><div className="og-role-grid">{ongyeol.roles.map(([number,title,text]) => <div key={number}><span className="og-number">{number}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>
      <section className="og-process og-section"><div className="container"><Heading number="05" title="Design Process">From direction<br />to detail.</Heading><p className="og-section-intro">프로젝트 제작 흐름과 단계별 자료를 정리하는 영역입니다. 현재 이미지 영역은 자료 연결 전 플레이스홀더입니다.</p><ol className="og-process-grid">{ongyeol.process.map((step,index) => <li key={step.title} data-og-reveal><span className="og-number">0{index+1}</span><h3>{step.title}</h3><p>{step.text}</p><Media media={step.media} /></li>)}</ol></div></section>
      <section className="container og-section"><Heading number="06" title="Visual Design">One brand.<br />Across every screen.</Heading><p className="og-section-intro">주요 화면과 디바이스별 디자인을 보여줄 공간입니다. 화면 분류는 팀 프로젝트 전체 기준이며, 개인 작업은 My Role의 범위를 따릅니다.</p><div className="og-visuals">{ongyeol.visuals.map((visual,index) => <div key={visual.title} className="og-visual-set" data-og-reveal><div className="og-visual-title"><span className="og-number">0{index+1}</span><h3>{visual.title}</h3></div><Media media={visual.desktop} className="og-desktop" /><div className="og-device-pair"><Media media={visual.tablet} className="og-tablet" /><Media media={visual.mobile} className="og-mobile" /></div></div>)}</div></section>
      <section className="og-development og-section"><div className="container" data-og-reveal><div className="og-two-columns"><Heading number="07" title="Development">Designed to work.<br />Built with React.</Heading><div><p className="og-intro">화면을 넘어, 흐름까지.</p><p>React 기반 웹 구현에서 다룬 주요 내용입니다. 프로젝트의 구현 항목을 정리했으며, 결제는 주문 화면 흐름을 의미합니다. 실제 결제 서비스 연동 여부는 확인 전입니다.</p></div></div><dl className="og-dev-list">{ongyeol.development.map(([title,text]) => <div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}</dl></div></section>
      <section className="container og-section" data-og-reveal><Heading number="08" title="AI Contents">New ways<br />to express a brand.</Heading><div className="og-two-columns og-ai-intro"><p className="og-intro">브랜드의 분위기를,<br />이미지와 영상으로.</p><p>브랜드 원료, 제품과 제형을 표현하는 AI 이미지 및 브랜드 영상 콘텐츠를 제작·편집하고 웹사이트에 적용했습니다. 아래에는 실제 결과물과 제작 자료를 연결할 수 있습니다.</p></div><div className="og-video">{ongyeol.video.src ? <><video controls playsInline preload="none" poster={assetUrl(ongyeol.video.poster)} aria-label={ongyeol.video.label}>{<source src={assetUrl(ongyeol.video.src)} />}{ongyeol.video.captions && <track kind="captions" src={assetUrl(ongyeol.video.captions)} srcLang="ko" label="한국어" default />}영상 재생을 지원하지 않는 브라우저입니다.</video>{ongyeol.video.transcript && <p className="og-transcript">{ongyeol.video.transcript}</p>}</> : <Media media={{label:'Brand film / 브랜드 대표 영상', src:null}} className="og-video-placeholder" />}</div><p className="og-note">영상은 재생 버튼을 누르면 시작합니다. 영상 등록 시 음성·텍스트 정보에 맞는 자막과 대체 설명을 함께 추가합니다.</p><div className="og-ai-grid">{ongyeol.aiImages.map(media => <Media key={media.label} media={media} />)}</div><div className="og-ai-process"><div><span className="og-number">01 / DIRECTION</span><h3>브랜드 방향</h3><p>자연과 과학, 차분하고 정제된 표현을 기준으로 콘텐츠를 소개합니다.</p></div><div><span className="og-number">02 / CREATION & EDITING</span><h3>제작·편집 자료</h3><p>사용 도구, 생성 과정, 편집 전후 비교는 실제 자료 확인 후 추가할 예정입니다.</p></div><div><span className="og-number">03 / WEB APPLICATION</span><h3>웹사이트 적용</h3><p>브랜드 소개와 웹 화면에 활용한 영상·이미지를 연결할 공간입니다.</p></div></div></section>
      <section className="og-outcome og-section"><div className="container" data-og-reveal><Heading number="09" title="Outcome">Connecting ideas,<br />learning together.</Heading><div className="og-outcome-list">{ongyeol.outcomes.map(([title,text],index) => <div key={title}><span className="og-number">0{index+1}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div><a className="round-link og-return" href="#work">Back to Works <span aria-hidden="true">↖</span></a></div></section>
    </main><footer className="container footer"><a className="logo" href="#home">MINJIN.</a><p>Soft Blue, Bold Ideas.</p><a href="#work">Selected Works ↗</a></footer>
  </>
}
