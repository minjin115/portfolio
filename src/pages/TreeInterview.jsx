import { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import { treeInterview as project, treeAssetUrl } from '../data/treeInterview'
import './TreeInterview.css'

function Media({ media, onZoom, cover = false }) {
  const [failed, setFailed] = useState(false)
  useEffect(() => setFailed(false), [media.src])
  const available = media.src && !failed
  const picture = available ? <img src={treeAssetUrl(media.src)} alt={media.alt} loading="lazy" onError={() => setFailed(true)} /> : <div className="ti-placeholder"><span aria-hidden="true">＋</span><p>{media.label}</p><small>실제 작업 자료 등록 예정</small></div>
  return <figure className={`ti-media ${cover ? 'ti-cover' : ''}`}>
    {available && onZoom ? <button className="ti-zoom-button" type="button" onClick={() => onZoom(media)} aria-label={`${media.alt} 확대 보기`}>{picture}<span className="ti-zoom-label">확대 보기 ↗</span></button> : picture}
    {media.caption && <figcaption>{media.caption}</figcaption>}
  </figure>
}
function Heading({ number, label, children }) {
  return <div className="ti-heading"><p className="eyebrow">{number} / {label}</p><h2>{children}</h2></div>
}
function Film({ film }) {
  const [failed, setFailed] = useState(false)
  useEffect(() => setFailed(false), [film.src])
  return <><div className="ti-film">{film.src && !failed ? <video controls playsInline preload="none" poster={treeAssetUrl(film.poster)} aria-label={film.label} onError={() => setFailed(true)}><source src={treeAssetUrl(film.src)} type="video/mp4" onError={() => setFailed(true)} />{film.captions && <track kind="captions" src={treeAssetUrl(film.captions)} srcLang="ko" label="한국어" default />}영상 재생을 지원하지 않는 브라우저입니다.</video> : <div className="ti-placeholder"><span aria-hidden="true">▷</span><p>{film.placeholder}</p><small>MP4 파일 준비 후 연결합니다</small></div>}</div>{film.transcript && <p className="ti-transcript">{film.transcript}</p>}</>
}
export default function TreeInterview() {
  const main = useRef(null)
  const dialog = useRef(null)
  const [zoom, setZoom] = useState(null)
  useEffect(() => {
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const elements = main.current.querySelectorAll('[data-ti-reveal]')
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.remove('ti-pending'); observer.unobserve(entry.target) }
    }), { threshold: .04 })
    elements.forEach(element => { element.classList.add('ti-pending'); observer.observe(element) })
    return () => { observer.disconnect(); elements.forEach(element => element.classList.remove('ti-pending')) }
  }, [])
  useEffect(() => {
    if (zoom) dialog.current.showModal()
    else if (dialog.current.open) dialog.current.close()
  }, [zoom])
  return <>
    <a className="skip-link" href="#main" onClick={event => { event.preventDefault(); main.current.focus(); main.current.scrollIntoView({ behavior: 'instant' }) }}>본문 바로가기</a>
    <Header />
    <main id="main" className="tree-interview" ref={main} tabIndex={-1}>
      <section className="ti-hero container">
        <a className="ti-back" href="#work">← Back to Works</a>
        <div className="hero-enter" style={{ '--delay': '0ms' }}><p className="eyebrow">01 / AI SHORT FILM · CREATIVE PROJECT</p><h1 id="tree-interview-title" tabIndex={-1}>{project.title}</h1><p className="ti-english-title">{project.englishTitle}</p><p className="ti-disciplines">AI Short Film / Storytelling / Video Editing</p></div>
        <Media media={project.hero} cover />
      </section>
      <section className="container ti-section ti-two-columns" data-ti-reveal><Heading number="02" label="OVERVIEW">A story, shaped<br />with AI.</Heading><div><p className="ti-intro">나무를 주인공으로 한 구직 인터뷰.<br />AI 영상 제작과 스토리텔링을 연결하는 개인 작업입니다.</p><dl className="ti-facts">{project.overview.map(([label,value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></div></section>
      <section className="ti-tinted ti-section"><div className="container" data-ti-reveal><Heading number="03" label="PROJECT CONCEPT">An idea<br />takes root.</Heading><div className="ti-three-columns">{project.concept.map(item => <div className="ti-text-block" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></div>)}</div></div></section>
      <section className="container ti-section"><Heading number="04" label="STORYTELLING">A sequence<br />of moments.</Heading><p className="ti-section-note">실제 영상의 장면과 순서에 맞춰 업데이트할 영역입니다. 아래 번호는 등록 슬롯 순서이며, 확정된 장면 수를 뜻하지 않습니다.</p><ol className="ti-scenes">{project.scenes.map((scene,index) => <li key={scene.id} data-ti-reveal><div><span className="ti-index">{String(index+1).padStart(2,'0')}</span><h3>{scene.title}</h3><p>{scene.description}</p></div><Media media={scene.media} /></li>)}</ol></section>
      <section className="ti-tinted ti-section"><div className="container"><Heading number="05" label="STORYBOARD">Before motion,<br />a visual plan.</Heading><p className="ti-section-note">실제 스토리보드를 순서대로 등록할 수 있습니다. 이미지가 등록되면 클릭하거나 키보드로 선택해 확대할 수 있습니다.</p><ol className="ti-storyboards">{project.storyboard.map((board,index) => <li key={board.id} data-ti-reveal><Media media={board.media} onZoom={setZoom} /><span className="ti-index">{String(index+1).padStart(2,'0')}</span><h3>{board.title}</h3><p>{board.description}</p></li>)}</ol></div></section>
      <section className="container ti-section"><Heading number="06" label="AI PRODUCTION">Prompt. Generate.<br />Review. Refine.</Heading><p className="ti-section-note">제작 과정을 정리하는 영역입니다. 실제 프롬프트와 생성 결과는 추후 작업 자료로 연결합니다.</p><ol className="ti-step-list">{project.productionSteps.map((step,index) => <li key={step}><span className="ti-index">0{index+1}</span>{step}</li>)}</ol>{project.comparisons.map(comparison => <div className="ti-comparison" key={comparison.id} data-ti-reveal><h3>{comparison.title}</h3><div className="ti-two-columns"><div><p className="eyebrow">BEFORE / INITIAL PROMPT</p><pre className="ti-prompt">{comparison.promptBefore || '초기 프롬프트를 실제 자료에 맞춰 등록해 주세요.'}</pre><Media media={comparison.before} /></div><div><p className="eyebrow">AFTER / REVISED PROMPT</p><pre className="ti-prompt">{comparison.promptAfter || '수정 프롬프트를 실제 자료에 맞춰 등록해 주세요.'}</pre><Media media={comparison.after} /></div></div><p className="ti-section-note">{comparison.note}</p></div>)}</section>
      <section className="ti-tinted ti-section"><div className="container" data-ti-reveal><div className="ti-two-columns"><Heading number="07" label="POST-PRODUCTION">Finding rhythm<br />in the edit.</Heading><div><p className="ti-section-note">편집 단계별 작업 내용과 실제 편집 화면을 정리할 영역입니다. 세부 내용은 작업 자료에 맞춰 보완합니다.</p><ul className="ti-edit-list">{project.postProduction.map(step => <li key={step}>{step}</li>)}</ul></div></div><Media media={project.editing} /></div></section>
      <section className="container ti-section"><Heading number="08" label="CHALLENGES & SOLUTIONS">Questions along<br />the way.</Heading><p className="ti-section-note">문제와 수정 과정을 실제 자료로 비교할 공간입니다. 확인되지 않은 해결 결과는 성공으로 표현하지 않았습니다.</p><div className="ti-challenges">{project.challenges.map(item => <article key={item.id} data-ti-reveal><div><p className="eyebrow">PROBLEM</p><h3>{item.problem}</h3></div><div><p className="eyebrow">REVISION</p><p>{item.method}</p></div><div><p className="eyebrow">RESULT</p><p>{item.result}</p></div></article>)}</div></section>
      <section className="ti-tinted ti-section"><div className="container" data-ti-reveal><Heading number="09" label="FINAL FILM">The final cut.</Heading><Film film={project.film} /><p className="ti-section-note">자동 재생 없이 재생 버튼으로 시작합니다. 실제 영상 등록 시 필요한 자막과 대체 설명을 함께 제공합니다.</p></div></section>
      <section className="container ti-section" data-ti-reveal><Heading number="10" label="REFLECTION">Keep asking.<br />Keep creating.</Heading><div className="ti-three-columns">{project.reflection.map(item => <div className="ti-text-block" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></div>)}</div><a className="round-link ti-return" href="#work">Back to Works <span aria-hidden="true">↖</span></a></section>
    </main>
    <footer className="container footer"><a className="logo" href="#home">MINJIN.</a><p>Soft Blue, Bold Ideas.</p><a href="#work">Selected Works ↗</a></footer>
    <dialog className="ti-lightbox" ref={dialog} aria-label="스토리보드 확대 보기" onClose={() => setZoom(null)} onClick={event => { if (event.target === dialog.current) setZoom(null) }}><button type="button" className="ti-close" onClick={() => setZoom(null)}>닫기 ×</button>{zoom && <figure><img src={treeAssetUrl(zoom.src)} alt={zoom.alt} /><figcaption>{zoom.caption}</figcaption></figure>}</dialog>
  </>
}
