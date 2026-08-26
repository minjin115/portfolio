import { useState } from 'react'
import './App.css'

const skills = [
  { name: 'HTML', description: '웹 페이지의 의미 있는 구조를 설계합니다.', level: 90 },
  { name: 'CSS', description: '반응형 UI와 일관된 스타일을 구현합니다.', level: 88 },
  { name: 'JavaScript', description: '사용자와 상호작용하는 기능을 만듭니다.', level: 85 },
  { name: 'React', description: '재사용 가능한 컴포넌트로 화면을 구성합니다.', level: 82 },
  { name: 'Vite', description: '빠르고 효율적인 개발 환경을 구성합니다.', level: 80 },
  { name: 'Figma', description: '아이디어를 UI 디자인으로 시각화합니다.', level: 75 },
  { name: 'Git', description: '변경 이력을 관리하고 협업합니다.', level: 78 },
  { name: 'GitHub', description: '코드를 공유하고 프로젝트를 관리합니다.', level: 78 },
]

const projects = [
  {
    title: 'React Portfolio',
    description: 'React로 구성한 반응형 개인 포트폴리오 웹사이트입니다.',
    image: 'project-react.svg',
    skills: ['React', 'JavaScript', 'CSS'],
    demo: 'https://minjin115.github.io/portfolio/',
    github: 'https://github.com/minjin115/portfolio',
  },
  {
    title: 'Shopping Web App',
    description: '상품을 탐색하고 장바구니에 담을 수 있는 쇼핑 웹 앱입니다.',
    image: 'project-shopping.svg',
    skills: ['React', 'JavaScript', 'CSS'],
    demo: null,
    github: null,
  },
  {
    title: 'Movie Search App',
    description: '영화 정보를 검색하고 상세 내용을 확인할 수 있는 앱입니다.',
    image: 'project-movie.svg',
    skills: ['React', 'API', 'CSS'],
    demo: null,
    github: null,
  },
]

const experiences = [
  {
    year: '2026',
    title: 'React Frontend Project',
    description: 'React와 Vite를 활용한 웹 애플리케이션 제작',
  },
  {
    year: '2025',
    title: 'UI/UX Design Project',
    description: 'Figma를 활용한 웹앱 UI/UX 기획 및 디자인',
  },
  {
    year: '2024',
    title: 'Web Publishing',
    description: 'HTML, CSS, JavaScript 기반 반응형 웹 제작',
  },
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
  }

  function handleMenuToggle() {
    setIsMenuOpen((isOpen) => !isOpen)
  }

  function handleMenuItemClick() {
    setIsMenuOpen(false)
  }

  return (
    <div className="portfolio">
      <header className="site-header container">
        <a className="site-logo" href="#hero">MINJIN PORTFOLIO</a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          onClick={handleMenuToggle}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        <nav
          id="site-navigation"
          className={`site-nav${isMenuOpen ? ' is-open' : ''}`}
          aria-label="주요 메뉴"
        >
          <a href="#hero" onClick={handleMenuItemClick}>Home</a>
          <a href="#about" onClick={handleMenuItemClick}>About</a>
          <a href="#skills" onClick={handleMenuItemClick}>Skills</a>
          <a href="#projects" onClick={handleMenuItemClick}>Projects</a>
          <a href="#contact" onClick={handleMenuItemClick}>Contact</a>
        </nav>
      </header>

      <main>
        <section id="hero" className="section hero-section container">
          <div className="hero-content">
            <div className="hero-copy">
              <p className="hero-greeting">안녕하세요.</p>
              <h1 className="hero-title">
                사용자 경험을 생각하며 구현하는
                <strong>Frontend Developer 김민진</strong>입니다.
              </h1>
              <p className="hero-description">
                React와 JavaScript를 활용하여
                <br />
                사용하기 편리하고 직관적인 웹 서비스를 만드는 것을 좋아합니다.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">프로젝트 보기</a>
                <a className="button button-secondary" href="#contact">연락하기</a>
              </div>
            </div>

            <div className="profile-frame">
              <img
                className="profile-image"
                src={`${import.meta.env.BASE_URL}profile-placeholder.svg`}
                alt="김민진 프로필 이미지"
              />
            </div>
          </div>
        </section>

        <section id="about" className="section about-section container">
          <div className="about-content">
            <div className="about-copy">
              <h2 className="section-title">ABOUT ME</h2>
              <p>
                새로운 기술을 배우고 실제 결과물로 구현하는 것을 좋아하는 프론트엔드 개발자입니다.
              </p>
              <p>
                UI/UX 디자인부터 React 기반 웹 개발까지 사용자 관점에서 고민하며 작업합니다.
              </p>
            </div>

            <div className="about-card">
              <dl className="about-details">
                <div>
                  <dt>Name</dt>
                  <dd>김민진</dd>
                </div>
                <div>
                  <dt>Position</dt>
                  <dd>Frontend Developer</dd>
                </div>
                <div>
                  <dt>Focus</dt>
                  <dd>React / UI·UX / AI</dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>Ansan, Korea</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section container">
          <div className="skills-content">
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid">
              {skills.map((skill) => (
                <article className="skill-card" key={skill.name}>
                  <div className="skill-card-header">
                    <h3>{skill.name}</h3>
                    <span>{skill.level}%</span>
                  </div>
                  <p>{skill.description}</p>
                  <div
                    className="skill-progress"
                    role="progressbar"
                    aria-label={`${skill.name} 숙련도`}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span className="skill-progress-value" data-level={skill.level} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section container">
          <div className="projects-content">
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <img className="project-image" src={`${import.meta.env.BASE_URL}${project.image}`} alt={`${project.title} 미리보기`} />
                  <div className="project-card-body">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p className="project-technologies">{project.skills.join(' / ')}</p>
                    <div className="project-actions">
                      {project.demo ? (
                        <a className="button button-primary" href={project.demo} target="_blank" rel="noopener noreferrer">
                          프로젝트 보기
                        </a>
                      ) : (
                        <span className="button button-primary button-disabled" aria-disabled="true">준비 중</span>
                      )}
                      {project.github ? (
                        <a className="button button-secondary" href={project.github} target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      ) : (
                        <span className="button button-secondary button-disabled" aria-disabled="true">준비 중</span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section experience-section container">
          <div className="experience-content">
            <h2 className="section-title">Experience</h2>
            <div className="timeline">
              {experiences.map((experience) => (
                <article className="timeline-item" key={experience.year}>
                  <time className="timeline-year" dateTime={experience.year}>{experience.year}</time>
                  <div className="timeline-marker" aria-hidden="true" />
                  <div className="timeline-card">
                    <h3>{experience.title}</h3>
                    <p>{experience.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section container">
          <div className="contact-content">
            <div className="contact-copy">
              <h2 className="section-title">LET'S WORK TOGETHER</h2>
              <p>프로젝트와 협업에 관심이 있으시면 언제든지 연락해주세요.</p>
              <div className="contact-links">
                <a href="mailto:minjin@example.com">Email</a>
                <a href="https://github.com/minjin115" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="name">이름</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="이름을 입력해주세요"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">이메일</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="이메일을 입력해주세요"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="message">메시지</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="메시지를 입력해주세요"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
                />
              </div>
              <button className="button button-primary" type="submit">메시지 보내기</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer container">
        <div className="footer-content">
          <p>© 2026 MINJIN Portfolio. All Rights Reserved.</p>
          <nav className="footer-links" aria-label="Footer 링크">
            <a href="https://github.com/minjin115" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:minjin@example.com">Email</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
