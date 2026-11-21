import { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import { videos, roles, productionSteps, editingDetails, editingCases, jewelryAssetUrl } from '../data/jewelryShorts'
import './JewelryShorts.css'

function Placeholder({ label }) {
  return <div className="js-placeholder"><span aria-hidden="true">＋</span><p>{label}</p><small>실제 작업 자료 등록 예정</small></div>
}

function Video({ video, onPlay }) {
  const [failed, setFailed] = useState(false)
  useEffect(() => setFailed(false), [video?.src])
  return <div className="js-video">{video?.src && !failed
    ? <video key={video.src} controls playsInline preload="none" poster={jewelryAssetUrl(video.poster)} aria-label={video.title} onPlay={onPlay} onError={() => setFailed(true)}>
      <source src={jewelryAssetUrl(video.src)} type="video/mp4" onError={() => setFailed(true)} />
      {video.captions && <track kind="captions" src={jewelryAssetUrl(video.captions)} srcLang="ko" label="한국어" default />}
      영상 재생을 지원하지 않는 브라우저입니다.
    </video>
    : <Placeholder label={failed ? '영상을 불러올 수 없습니다' : '세로형 영상 · 등록 예정'} />}</div>
}

function Image({ media }) {
  const [failed, setFailed] = useState(false)
  useEffect(() => setFailed(false), [media.src])
  if (!media.src || failed) return <p className="js-image-note">{media.label} · {failed ? '이미지를 불러올 수 없습니다.' : '추후 추가 예정'}</p>
  return <figure><img src={jewelryAssetUrl(media.src)} alt={media.alt || media.label} loading="lazy" onError={() => setFailed(true)} /><figcaption>{media.label}</figcaption></figure>
}

function Heading({ number, label, children }) {
  return <div className="js-heading"><p className="eyebrow">{number} / {label}</p><h2>{children}</h2></div>
}

export default function JewelryShorts() {
  const main = useRef(null)
  const featured = videos.find(video => video.featured && video.src)
  const pauseOthers = event => {
    main.current.querySelectorAll('video').forEach(video => { if (video !== event.currentTarget) video.pause() })
  }
  useEffect(() => {
    const root = main.current
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const elements = root.querySelectorAll('[data-js-reveal]')
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.remove('js-pending'); observer.unobserve(entry.target) }
    }), { threshold: .04 })
    elements.forEach(element => { element.classList.add('js-pending'); observer.observe(element) })
    return () => { observer.disconnect(); elements.forEach(element => element.classList.remove('js-pending')) }
  }, [])
  return <>
    <a className="skip-link" href="#main" onClick={event => { event.preventDefault(); main.current.focus(); main.current.scrollIntoView({ behavior: 'instant' }) }}>본문 바로가기</a>
    <Header />
    <main id="main" className="jewelry-shorts" ref={main} tabIndex={-1}>
      <section className="container js-hero">
        <a className="js-back" href="#work">← Back to Works</a>
        <div className="js-hero-grid">
          <div className="hero-enter"><p className="eyebrow">01 / JEWELRY SHORT-FORM CONTENTS</p><h1 id="jewelry-shorts-title" tabIndex={-1}>Jewelry<br /><span>Short-form</span><br />Contents</h1><p className="js-lead">주얼리 숏폼 콘텐츠 촬영 및 편집</p><p>Video Shooting · Editing · Subtitle · BGM</p><a className="js-back" href="#/work/jewelry-shorts" onClick={event => { event.preventDefault(); document.getElementById('jewelry-videos').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); document.getElementById('jewelry-videos').focus({ preventScroll: true }) }}>Selected Videos ↓</a></div>
          <div className="js-featured"><Video video={featured} onPlay={pauseOthers} /><p>{featured ? featured.title : '대표 영상 등록 예정 · 9:16'}</p></div>
        </div>
      </section>
      <section className="container js-section js-overview" data-js-reveal>
        <Heading number="02" label="OVERVIEW">Small moments.<br /><em>Product stories.</em></Heading>
        <div><p className="js-lead">주얼리 숏폼 콘텐츠 촬영 및 편집</p><p>주얼리 제품을 소개하는 약 20~30초 분량의 세로형 숏폼 콘텐츠를 제작했습니다. 직접 촬영을 진행하고 Adobe Premiere Pro를 활용해 컷 편집, 자막 삽입, 배경음악을 구성했습니다.</p><dl><div><dt>유형</dt><dd>주얼리 관련 숏폼 제작 아르바이트</dd></div><div><dt>담당</dt><dd>{roles.join(' · ')}</dd></div><div><dt>도구</dt><dd>Adobe Premiere Pro</dd></div></dl></div>
      </section>
      <section className="js-tinted js-section" aria-labelledby="jewelry-videos"><div className="container">
        <Heading number="03" label="SELECTED VIDEOS"><span id="jewelry-videos" tabIndex={-1}>Selected<br /><em>Videos.</em></span></Heading>
        <p>직접 촬영하고 편집한 대표 영상 5편입니다. 영상은 재생 버튼을 눌러 시작하며, 다른 영상을 재생하면 이전 영상은 일시정지됩니다.</p>
        {videos.length ? <div className="js-video-grid">{videos.map(video => <article key={video.id} data-js-reveal><Video video={video} onPlay={pauseOthers} /><h3>{video.title}</h3>{video.featured && <span className="js-badge">대표작</span>}<p>{video.description}</p>{video.roles?.length > 0 && <ul className="js-video-roles" aria-label="담당 역할">{video.roles.map(role => <li key={role}>{role}</li>)}</ul>}{video.transcript && <p>{video.transcript}</p>}</article>)}</div>
          : <div className="js-video-grid js-empty" aria-label="영상 미등록"><div><Video /><p>영상 미등록 · 실제 작업물 선정 후 공개합니다.</p></div></div>}
      </div></section>
      <section className="container js-section" data-js-reveal><Heading number="04" label="PRODUCTION PROCESS">From shooting<br /><em>to the edit.</em></Heading><ol className="js-process">{productionSteps.map(([title, text], index) => <li key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></section>
      <section className="js-tinted js-section"><div className="container"><Heading number="05" label="EDITING DETAILS">Inside<br /><em>the edit.</em></Heading><p>두 대표 편집 사례를 완성 영상에서 추출한 실제 프레임으로 소개합니다.</p><div className="js-edit-topics">{editingDetails.map(detail => <div key={detail.id}><h3>{detail.title}</h3><p>{detail.text}</p></div>)}</div><div className="js-details">{editingCases.map(example => <article key={example.id} data-js-reveal><p className="eyebrow">EDITING CASE / 대표 편집 사례</p><h3>{example.title}</h3><p>{example.text}</p><div className="js-case-frames js-media-grid">{example.frames.map(media => <Image key={media.src} media={media} />)}</div><div className="js-case-timeline js-media-grid"><Image media={example.timeline} /></div></article>)}</div></div></section>
      <section className="container js-section" data-js-reveal><Heading number="06" label="REFLECTION">Every second<br /><em>matters.</em></Heading><p className="js-reflection">짧은 영상 안에서 제품의 매력을 전달하기 위해 촬영 구도, 컷 연결, 자막과 음악이 중요하다는 것을 경험했습니다. 촬영한 장면을 편집하며 각 요소가 영상의 흐름과 리듬에 어떻게 영향을 주는지 고민했습니다.</p><a className="round-link js-return" href="#work">Back to Works <span aria-hidden="true">↖</span></a></section>
    </main>
    <footer className="container footer"><a className="logo" href="#home">MINJIN.</a><p>Soft Blue, Bold Ideas.</p><a href="#work">Video Works ↗</a></footer>
  </>
}
