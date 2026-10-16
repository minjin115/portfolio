import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import ProjectCard from './components/ProjectCard'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { projects } from './data/projects'
import './App.css'
import Ongyeol from './pages/Ongyeol'
import TreeInterview from './pages/TreeInterview'
function Portfolio() {
  const main = useRef(null)
  useEffect(() => {
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const elements = main.current.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.remove('reveal-pending'); observer.unobserve(entry.target) }
    }), { threshold: .08 })
    elements.forEach(el => { el.classList.add('reveal-pending'); observer.observe(el) })
    return () => { observer.disconnect(); elements.forEach(el => el.classList.remove('reveal-pending')) }
  }, [])
  return <><a className="skip-link" href="#main">본문 바로가기</a><Header /><main id="main" ref={main}><Hero /><About /><section id="work" className="works section-space"><div className="container"><div className="section-heading" data-reveal><div><p className="eyebrow">02 / SELECTED WORKS</p><h2>Ideas into<br /><em>experiences.</em></h2></div><p className="section-note">디자인, 개발, 그리고 새로운 표현 방식.<br />서로 다른 관점으로 만들어갈 작업들입니다.</p></div><div className="projects-list">{projects.map(project => <ProjectCard key={project.id} project={project} />)}</div></div></section><Skills /><Experience /><Contact /></main><footer className="container footer"><a className="logo" href="#home">MINJIN.</a><p>Soft Blue, Bold Ideas.</p><a href="#home">Back to top ↑</a></footer></>
}

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash)
  const treeDetail = hash === '#/work/tree-interview'
  const detail = hash === '#/work/ongyeol' || treeDetail
  const previousDetail = useRef(detail)
  useEffect(() => {
    const update = () => setHash(window.location.hash)
    window.addEventListener('hashchange', update)
    return () => window.removeEventListener('hashchange', update)
  }, [])
  useLayoutEffect(() => {
    document.title = treeDetail ? '나무의 구직 인터뷰 — MINJIN.' : detail ? 'ONGYEOL — MINJIN.' : 'MINJIN. — Soft Blue, Bold Ideas.'
    if (detail) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      document.getElementById(treeDetail ? 'tree-interview-title' : 'ongyeol-title')?.focus({ preventScroll: true })
    } else if (previousDetail.current) {
      const target = document.getElementById(hash.slice(1)) || document.getElementById('work')
      target?.setAttribute('tabindex', '-1')
      target?.focus({ preventScroll: true })
      target?.scrollIntoView({ behavior: 'instant' })
    }
    previousDetail.current = detail
  }, [hash, detail, treeDetail])
  return treeDetail ? <TreeInterview /> : detail ? <Ongyeol /> : <Portfolio />
}
